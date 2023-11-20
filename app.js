// app.js
App({
  // 生命周期回调——监听小程序初始化
  onLaunch(opts) {
    // console.clear()

    // 同步获取当前storage的相关信息
    console.log("storage的相关信息")
    wx.getStorageInfo({
      success(res) {
        console.log("当前 storage 中所有的 key", res.keys)
        console.log("当前占用的空间大小, 单位 KB", res.currentSize)
        console.log("限制的空间大小，单位 KB", res.limitSize)
      },
      fail(err) { },
      complete(comp) { }
    })

    // 获取系统信息
    // console.log(wx.getSystemInfoSync())

    // 获取微信APP基础信息，基础库 2.20.1 开始支持
    // console.log(wx.getAppBaseInfo())

    // // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
  },
  // 生命周期回调——监听小程序启动或切前台
  onShow(opts) {
    console.log('小程序启动或切前台')
    // wx.checkSession({
    //   // session_key 未过期，并且在本生命周期一直有效
    //   success() {

    //   },
    //   // session_key 已过期，需要重新执行登录
    //   fail() {
    //     wx.reLaunch({
    //       url: '/pages/User/Login/login',
    //     })
    //   },
    //   complete() { }
    // })
  },
  // 生命周期回调——监听小程序切后台
  onHide(opts) { },
  // 错误监听函数
  onError(opts) { },
  // 页面不存在监听函数
  onPageNotFound(opts) { },
  globalData: {
    userInfo: null,
    glbSendSmsTime: 60
  }
})
