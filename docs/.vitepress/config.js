// VitePress站点必要的配置文件`.vitepress/config.js`，需要导出一个js对象
module.exports = {
  title: 'One Space', // 站点标题
  description: '一度空间', // 站点描述信息
  base: '/vitepress/', // 站点部署的根路径，可以设置为二级路径，base的配置需要以/开头并且/结尾，例如/base/
  // lang: 'en-US', // 站点的lang属性，仅会出现在使用`vitepress build`构建时，使用`vitepress dev`则不会有
  // 主题配置
  themeConfig: {
    // 头部导航
    nav: [
      {text: '首页', link: '/'}, // 导航菜单可嵌套，使用items列举子菜单
      {text: '里程碑', link: '/mailpost/'}, // 目录下的index.md会被转换为index.html，设置路由地址时需要/结尾或者写全地址/about/index.html
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