// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    capabilities: [
      { id: 1, title: '影视投屏' },
      { id: 2, title: '音乐播放' },
      { id: 3, title: '云相册' },
      { id: 4, title: '今日油价' },
      { id: 5, title: '待添加' },
    ],
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // console.clear()

    wx.setNavigationBarColor({
      backgroundColor: '#FF00FF',
      frontColor: '#7FFFAA',
    })


    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  gotologin() {
    wx.reLaunch({
      url: '/pages/User/Login/login'
    })
  },
  tiaozhuan(e) {
    let _url
    console.log(e)
    switch (e.currentTarget.dataset.id) {
      case 1:
        _url = ''
        break;
      case 2:
        _url = '/pages/Music/list/index'
        break;
      case 3:
        _url = '/pages/Music/list/index'
        break;
      case 4:
        _url = '/pages/Music/list/index'
        break;
      case 5:
        _url = '/pages/Music/list/index'
        break;
    }
    wx.reLaunch({
      url: _url,
    })
  }
})
