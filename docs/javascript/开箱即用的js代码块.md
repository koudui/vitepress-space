# 开箱即用的js代码块

在实际开发过程中，总是会使用到一些简洁好用的代码块，本文就简单总结一些，方便后续查用。

## 数组

### 1. 判断数组是否为空数组

`解析`

使用`isArray`判断是否为数组（也可以使用其他方式），然后判断数组长度是否为0

```js
const emptyArr = (arr) => Array.isArray(arr) && !arr.length
```

### 2. 拷贝一个数组

`解析`

拷贝数组的方式很多，可根据不同的使用场景选择合适的。值得注意的是，如果数组项为对象，还需要考虑地址引用问题。

```js
let clone = (arr) => arr.slice(0); // 从0开始到最后一个数据
clone = (arr) => [...arr]; // 解构
clone = (arr) => Array.from(arr);
clone = (arr) => arr.map(x => x);
clone = (arr) => JSON.parse(JSON.stringify(arr));
clone = (arr) => arr.concat([]);
```

### 3. 将对象数组转换为指定key的对象

`解析`

对于数组的操作，除了常用的map、filter等方法，reduce也是一个不容忽视的函数。合理使用reduce可以更高效简洁地解决问题，如果不熟悉reduce怎么使用，可参考 [reduce]([你真的会使用reduce吗 - 掘金 (juejin.cn)](https://juejin.cn/post/7085984008340766756))

本例中使用reduce循环调用，指定初始值为{}，解构出回调函数返回的对象，并使用动态键值对的方式完成新对象的创建。这里需要注意`动态键值对`的使用。

```js
const Array2Object = (arr, key) => arr.reduce((a, b) => ({...a, [b[key]]: b}),{})
Array2Object([
  {id: 1, value: 'a'},
  {id: 2, value: 'b'},
  {id: 3, value: 'c'}
], 'id');
// 运行结果
{
  1: {
    id: 1, value: 'a'
  },
  2: {
    id: 2, value: 'b'
  },
  3: {
    id: 3, value: 'c'
  },
}
```

### 4. 统计对象数组中指定key的值的重复次数

`解析`

+ reduce的初始值为{}，则对应的pre为初始值，cur为数组第一个元素
+ 动态添加或修改对象的属性，其中++undefined返回值为NAN，也就是说未出现的属性值赋值为1，否则自增1
+ 返回当前对象便于下一次遍历时使用

```js
const countBy = (arr, key) => arr.reduce((pre, cur) => {
  pre[cur[key]] = ++pre[cur[key]] || 1;
  return pre;
}, {})
countBy([
  {id: 1, value: 'a'},
  {id: 1, value: 'b'},
  {id: 2, value: 'c'}
], 'id');
// 运行结果
{1: 2, 2: 1}
```

### 5. 统计数组中指定值出现的次数

`解析`

+ 使用reduce累加指定值出现的次数
+ 使用filter过滤数组并取新数组的长度

```js
let count = (arr, val) => arr.reduce((pre, cur) => {
  if (cur === val) return pre + 1;
  return pre;
}, 0)
count = (arr, val) => arr.filter(e => e === val).length;
count([1,2,3,3,3,2], 3); // 3
```

### 6. 查找数组中最接近指定值的数

`解析`

+ 数组的sort方法可以传入自定义的函数，用来控制排序的条件
+ 排序条件为数组元素与指定值的差值

```js
let closestNum = (arr, num) => arr.sort((a, b) => (Math.abs(a - num) - Math.abs(b - num)))[0];
closestNum([10, 5, 7, 45, 89, 65, 100], 50);
```

### 7. 查找数组中最接近指定值的索引

`解析`

+ 原理同查找最接近的数，不同的是需要准备一个对象数组，主要是用来保存索引位置
+ 排序时根据数组元素与指定值差值的绝对值来排序

```js
let closestNumIndex = (arr, num) => arr.reduce((pre, cur, index) => ([...pre, {'abs': Math.abs(cur - num), index}]), []).sort((a, b) => a.abs - b.abs)[0].index;
closestNumIndex([10, 5, 7, 45, 89, 65, 100], 50);
```

### 8. 数组中的最大值

```js
let max = (arr) => arr.sort((a, b) => b - a)[0];
max = (arr) => arr.reduce((pre, cur) => (cur > pre ? cur : pre), arr[0]);
max = (arr) => Math.max(...arr);
max([2,3,8,4,9,1]);
```

### 9. 数组中最大值的索引

`解析`

+ reduce指定初始值0，表示返回的索引
+ reduce有4个参数

```js
let indexOfMax = (arr) => arr.reduce((pre, cur, i, a) => (cur > a[pre] ? i : pre), 0);
indexOfMax([2,3,8,4,9,1]);
```

### 10. 扁平化数组

`解析`

+ 使用reduce来处理，并且递归调用
+ 直接访问数组的flat方法，需考虑兼容性

```js
let flat = (arr) => arr.reduce((a, b) => (Array.isArray(b) ? [...a, ...flat(b)] : [...a, b]), []);
flag = (arr) => arr.flat();
flat(['cat', ['lion', 'tiger']]);
```

### 11. 对象数组分组

```js
let groupBy = (arr, key) => arr.reduce((pre, cur) => {
  pre[cur[key]] = [...(pre[cur[key]] || []), cur];
  return pre;
}, {});
groupBy(
  [
    { branch: 'audi', model: 'q8', year: '2019' },
    { branch: 'audi', model: 'rs7', year: '2020' },
    { branch: 'ford', model: 'mustang', year: '2019' },
    { branch: 'ford', model: 'explorer', year: '2020' },
    { branch: 'bmw', model: 'x7', year: '2020' },
  ],
  'branch'
);
// 运行结果
{
  audi: [
    { branch: 'audi', model: 'q8', year: '2019' },
    { branch: 'audi', model: 'rs7', year: '2020' },
  ],
  ford: [
    { branch: 'ford', model: 'mustang', year: '2019' },
    { branch: 'ford', model: 'explorer', year: '2020' },
  ],
  bmw: [
    { branch: 'bmw', model: 'x7', year: '2020' },
  ]
}
```



## 日期时间

### 12. 计算两个日期相差的天数

`解析`

+ 通过计算两个日期之间的毫秒数差并上取整

```js
let diffDays = (date, otherData) => Math.ceil(Math.abs(date - otherData) / (1000 * 60 * 60 * 24));
diffDays(new Date('2021-12-1'), new Date('2022-1-21'));
```

### 13. 日期格式化

`解析`

+ 使用toISOString()获取时间
+ 再通过字符串截取，得到YYYY-MM-DD格式的时间

```js
let formatYmd = (date) => date.toISOString().slice(0, 10);
formatYmd(new Date('2022-01-21 12:23:45')); // 2022-01-21
```

### 14. 获取当前日期所在的季度

```js
let getQuarter = (date = new Date()) => Math.ceil((date.getMonth() + 1) / 3);
getQuarter();
```

### 15. 获取当前时间的秒数

```js
let getSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000);
getSeconds();
```



## DOM操作

### 16. 判断一个元素是否聚焦

```js
let isFocus = (element) => element === document.activeElement;
```

### 17. 获取一个节点的所有兄弟节点

`解析`

+ Array.prototype.slice.call(arguments)能将具有length属性的对象转成数组
+ 除了IE下的节点集合（因为ie下的dom对象是以com对象的形式实现的，js对象与com对象不能进行转换）

```js
let siblings = (ele) => [].slice.call(ele.parentElement.children).filter(e => e !== ele);
```

### 18. 获取选中的文本内容

```js
let selectedText = () => window.getSelection().toString();
```

### 19. 获取给定html格式中的纯文本内容

`解析`

+ 将html文本转为DOM节点，再从DOM节点中获取纯文本内容

```js
let stripHTML = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent;
stripHTML('<div style="color: red;">hello world</div>');
```

### 20. 判断是否滚动到页面底部

```js
let isAtBottom = () => document.documentElement.clientHeight + window.screenX >= document.documentElement.scrollHeight;
```

## 数字处理

### 21. 对象缓存斐波拉契数列

+ 获取斐波拉契数列，并使用对象缓存，提升效率
+ 用对象缓存可以满足O(1)时间复杂度

```js
let feibo = (n, memo = {}) => memo[n] || (n <= 2 ? 1 : (memo[n] = feibo(n - 1, memo) + feibo(n - 2, memo)))
feibo(5)
```



## 对象处理

### 22. 去除对象中所有空属性

+ Object.entries()将对象转换为key-value数组
+ == null包含了undefined和null的情况

````js
let deleteNull = (obj) => Object.entries(obj).reduce((a, [k, v]) => {
    if (v == null || v === '') return a;
    a[k] = v;
    return a;
},{})
deleteNull({
    foo: null,
    bar: undefined,
    name: '',
    fuzz: 0
})
// 运行结果
{
    fuzz: 0
}
````

### 23. 根据对象的key进行排序

```js
let sortObj = (obj) => Object.keys(obj).sort().reduce((res, key) => {
	res[key] = obj[key];
	return res;
}, {});
sortObj({
	white: '#ffffff',
    black: '#000000',
    red: '#ff0000',
    green: '#008000',
    blue: '#0000ff',
})
```

## 随机数处理

### 24. 随机布尔值

```js
let randomBool = () => Math.random() >= 0.5
```

### 25. 随机颜色值

+ numObj.toString([radix])，数字转换为字符串时可指定转换的基数(2-36)，默认为10进制
+ padEnd(targetLength [, padString]) 从当前字符串末尾填充给定字符串到指定的长度，如果长度已经满足则不填充

```js
let randomColor = () => '#' + Math.random().toString(16).slice(2, 8).padEnd(6, '0');
```

### 26. 给定范围的随机整数

```js
let randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
randomInteger(5, 10)
```

### 27. 随机IPV4地址

```js
let randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255 + (i === 0 ? 1 : 0))).join('.');
randomIp();
```

### 28. 给定范围的随机整数数组

+ Array.from(arrayLike,  (element) => {})
+ arrayLike：想要转换为数组的伪数组对象，即含有length属性的对象
+ mapFun：如果指定了该参数，新数组中的每一个元素都会执行该回调函数
+ 给定范围的随机整数

```js
let randomRange = (min, max, len) => Array.from({length: len}, () => Math.floor(Math.random() * (max - min + 1)) + min);
randomRange(1, 10, 5);
```

## 校验

### 29. 是否为偶数

```js
let isEven = (n) => (n & 1) === 0
```

### 30. 是否为2的幂

``` js
let isPowerOfTwo = (n) => (n & (n - 1)) === 0
```

### 31. 是否为闰年

```
let isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
```

## 其他

### 32. 获取字符串的长度，以字节为单位

```
let bytes = (str) => new Blob([str]).size;
```

### 33. 将十六进制颜色转为rgb格式

```js
let hexToRgb = (hex) =>
  hex
    .replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`)
    .substring(1)
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
hexToRgb('#00ffff'); // [0, 255, 255]
hexToRgb('#0ff'); // [0, 255, 255]
```

### 34. 将rgb颜色转为十六进制

```js
let rgbToHex = (red, green, blue) => `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1)}`;
rgbToHex(0, 255, 255); // '#00ffff'
```

### 35. 从URL中获取指定参数的值

```js
let getParams = (url, param) => new URLSearchParams(new URL(url).search).get(param);
getParam('http://domain.com?message=hello', 'message'); 
```

