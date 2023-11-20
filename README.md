# wechatMiniApp_familySharing
微信小程序，家庭共享


## 目录结构

├─  app.js    --- 小程序加载时优先加载的入口JS
├─  app.json   ---入口文件和公共配置
├─  app.wxss     ---公共样式表
├─  project.config.json     ---小程序全局配置文件
├─  sitemap.json     ---允许微信索引文件
│  
├─cloud-functions     ---云函数
│  └─setCrypto      ---数据加密模块，用户加密一些数据
│          index.js
│          package.json
│          ...
│          ...
│          
├─components      ---小程序自定义组件
│  ├─plugins      --- （重点）可独立运行的大型模块，可以打包成plugins
│  │  ├─comment         ---评论模块
│  │  │  │  index.js
│  │  │  │  index.json
│  │  │  │  index.wxml
│  │  │  │  index.wxss
│  │  │  │  services.js    ---（重点）用来处理和清洗数据的service.js，配套模板和插件
│  │  │  │      
│  │  │  └─submit    ---评论模块子模块：提交评论
│  │  │          index.js
│  │  │          index.json
│  │  │          index.wxml
│  │  │          index.wxss
│  │  │      
│  │  └─canvasPoster     ---canvas海报生成模块
│  │          index.js
│  │          index.json
│  │          index.wxml
│  │          index.wxss
│  │          services.js    ---（重点）用来处理和清洗数据的service.js，配套模板和插件
│  │     ...
│  │     ...
│  │          
│  └─templates   ---（重点）模板，通过外部传参的容器，不做过多的数据处理
│      │      
│      ├─slideshow     ---滚屏切换模板
│      │      index.js
│      │      index.json
│      │      index.wxml
│      │      index.wxss
│      │      service.js    ---（重点）用来处理和清洗数据的service.js，配套模板和插件
│      │      
│      └─works       ---作品模板
│          │  index.js
│          │  index.json
│          │  index.wxml
│          │  index.wxss
│          │  service.js
│          │  
│          ├─articlePlugin    ---作品模板中的文章类型
│          │      index.js
│          │      index.json
│          │      index.wxml
│          │      index.wxss
│          │      
│          ├─galleryPlugin    ---作品模板中的九宫格类型
│          │      index.js
│          │      index.json
│          │      index.wxml
│          │      index.wxss
│          │      
│          └─videoPlugin     ---作品模板中的视频类型
│                  index.js
│                  index.json
│                  index.wxml
│                  index.wxss
│                  ...
│                  ...
│                  
├─config     ---自定义配置文件
│      config.js    ---存放基础配置
│      constants.js   ---存储常量
│      weui.wxss   ---第三方文件wxss，js等
│      ...
│      ...
│      
├─pages     ---小程序页面
│  ├─user      ---用户页面
│  │      index.js
│  │      index.json
│  │      index.wxml
│  │      index.wxss
│  ├─news      ---新闻页面
│  │      index.js
│  │      index.json
│  │      index.wxml
│  │      index.wxss
│  │      
│  └─home      ---首页
│         index.js
│         index.json
│         index.wxml
│         index.wxss
│         ...   
│         ...   
│          
├─request      ---https请求管理（根据switch tab分类会比较好）
│      common.js    ---一些公共请求获取，如兑换openId,unionId 等
│      news.js
│      uri.js     --- （重点）总的URI请求管理，方便切换和配置DEV,QA,PROD环境
│      user.js
│      ...
│      ...
│      
└─utils       ---功能组件
        logger.js    ---日志管理
        util.js       ---公共小组件库
        ...
        ...