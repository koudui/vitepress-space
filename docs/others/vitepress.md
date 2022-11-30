---
outline: 2
---



## 起步

1. 创建一个新项目，并初始化包管理器

   ```shell
   mkdir vitepress-demo && cd vitepress-demo && yarn init
   ```

2. 安装VitePress依赖

   既然我们需要创建一个`VitePress`项目，那么安装依赖是必不可少的步骤。

   ```
   yarn add --dev vitepress vue
   ```

3. 配置启动开发环境

   `VitePress`默认需要把`markdown`文件放在`docs`目录下：

   ```
   mkdir docs
   ```

   然后打开`package.json`，配置相关脚本：

   ```json
   {
     ...
     "scripts": {
       "docs:dev": "vitepress dev docs",
       "docs:build": "vitepress build docs",
       "docs:serve": "vitepress serve docs"
     },
     ...
   }
   ```

   如果需要在本地环境运行的话，就可以直接运行`yarn docs:dev`。

4. 添加更多页面

   一般来说，需要将`.md`文件放在`docs`目录下；如果文件很多，需要分级管理，那么就需要在`docs/.vitepress/config.js`中配置相关路径。



## 配置

如果需要配置`VitePress`。那么需要在`docs`目录下新建`.vitepress/config`，此时的项目结构：

```
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.js
│  └─ index.md
└─ package.json
```

在`config.js`中，需要导出一个包含相关属性的对象：

```javascript
// VitePress站点必要的配置文件`.vitepress/config.js`，需要导出一个js对象
module.exports = {
  title: 'One Space', // 站点标题
  description: '一度空间', // 站点描述信息
  // 站点部署的根路径，可以设置为二级路径，base的配置需要以/开头并且/结尾，例如/base/
  base: '/vitepress/',
  // lang属性仅会出现在使用`vitepress build`构建时，使用`vitepress dev`则不会有
  // lang: 'en-US',
  // 主题配置
  themeConfig: {
    // 头部导航
    nav: [
      {text: '首页', link: '/'}, // 导航菜单可嵌套，使用items列举子菜单
      // 目录下的index.md会被转换为index.html，
      // 设置路由地址时需要/结尾或者写全地址/about/index.html
      {text: '里程碑', link: '/mailpost/'},
    ],
    // 侧边导航
    sidebar: {
      // 根据路由匹配多个不同的侧边栏
      '/mailpost/': [
        {
          text: '历程',
          items: [
            { text: '2022', link: '/mailpost/2022.md'},
          ]
        }
      ],
      '/': [
        {
          // 侧边栏嵌套
          items: [
            {
              text: '其他',
              items: [
                {text: 'VitePress入门实践', link: '/others/vitepress.md'}
              ]
            }
          ]
        }
      ]
    },
    siteTitle: 'One Space', // 设置站点标题
  },
  markdown: {
    anchor: {
      // permalink: true, // 设置锚点样式
    },
    toc: {
      includeLevel: [1, 2], // 设置目录包含的结构，即仅展示H1和H2的标题
    }
  }
}
```

### 应用配置

`appearance`

+ 类型：boolean
+ 默认值：true
+ 作用：是否开启深色主题切换

`base`

+ 类型：string
+ 默认值：/
+ 作用：站点部署的根路径，可以设置为二级路径，base的配置需要以/开头并且/结尾，例如/base/

`description`

+ 类型：string
+ 默认值：`A VitePress site`
+ 作用：描述站点

`head`

+ 类型：HeadConfig[]
+ 默认值：[]
+ 作用：设置HTML头信息

```
export default {
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }]
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ]
}
```

`lang`

+ 类型：string
+ 默认值：`en-US`
+ 作用：设置站点语言

`lastUpdated`

+ 类型：boolean
+ 默认值：false
+ 作用：显示页面的上次更新时间，可通过`themeConfig.lastUpdatedText`选项设置文本

```
export default {
  lastUpdated: true,
  themeConfig: {
  	lastUpdatedText: '上次更新文本'
  }
}
```

`markdown`

+ 类型：`MarkdownOption`
+ 作用：markdown相关配置

```
export default {
  markdown: {
    theme: 'material-palenight', // 设置主题，https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-themes
    lineNumbers: true, // 代码块中显示代码行数
  }
}
```

`outDir`

+ 类型：string
+ 默认值：`./.vitepress/dist`
+ 作用：指定站点构建时的输出目录

`srcDir`

+ 类型：string
+ 默认值：.
+ 作用：相对于根目录，存放markdown页面的目录

`title`

+ 类型：string
+ 默认值：VitePress
+ 作用：设置站点的title

`titleTemplate`

+ 类型：string | boolean
+ 作用：站点title的后缀

`buildEnd`

+ 类型：`(siteConfig: SiteConfig) => Awaitable<void>`
+ 作用：钩子函数，作用在构建完成但是VitePress Cli退出前

```
export default {
  async buildEnd(siteConfig) {
  }
}
```

### 主题配置

主题配置（themeConfig）运行自定义主题。

```
export default {
  themeConfig: {},
}
```

`logo`

+ 作用：设置站点logo，可以传入图片路径、一个对象或者根据light/dark主题切换的不同图片对象

```
export default {
  themeConfig: {
    logo: '/logo.svg',
    logo: {
    	src: '',
    	alt: '' // 非必需
    },
    logo: {
    	light: {
    		src: '',
    		alt: ''
    	},
    	dark: {
    		src: '',
    		alt: ''
    	}
    }
  }
}
```

`siteTitle`

	+ 类型：string | false
	+ 作用：显示在导航栏的站点标题

```
export default {
  themeConfig: {
    siteTitle: 'Hello World'
  }
}
```

`nav`

+ 作用：设置菜单导航。可以设置一级菜单，也可设置多级菜单，一般位于页面顶部

```
export default {
  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide' },
      {
        text: 'Dropdown Menu',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ]
  }
}
```

`sidebar`

+ 作用：设置侧边栏菜单，可设置一级菜单，也可设置多级菜单。一般位于页面左侧

```
export default {
  themeConfig: {
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
          ...
        ]
      }
    ]
  }
}
```

`outline`

+ 作用：显示页面大纲
+ 默认值：2，默认显示二级标题及以上的大纲，三级标题不显示
+ 类型：number | [number, number] | ‘deep’ | false

`outlineTile`

+ 作用：设置大纲标题
+ 默认值：`On this page`

`socialLinks`

+ 作用：在导航栏显示社交按钮链接

```
export default {
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
      // 传入自定义的svg图标
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ]
  }
}
```

`footer`

+ 作用：设置页面页脚信息，受限于布局，仅在没有侧边栏时才会生效

```
export default {
  themeConfig: {
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
}
```

`docFooter`

+ 作用：文档页脚，自定义上一页、下一页链接的显示文字

```
export default {
  themeConfig: {
    docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
  }
}
```

### 前言配置

前言配置支持基于页面的配置。可以在页面添加任何设置以覆盖应用配置或主题配置，有些设置只能在`FrontMatter`中定义。在`FrontMatter`中定义的属性，可以通过`$frontmatter`来访问使用

`设置`

```
---
title: this is title
---
```

`使用`

```
{{ $frontmatter.title }}
```







