// pages/User/VerificationCode/code.js
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        inter: null,
        phoneNumberPrefix: null,
        phoneNumber: null,
        invitationCode: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            phoneNumberPrefix: options.phoneNumberPrefix,
            phoneNumber: options.phoneNumber,
            invitationCode: options.invitationCode,
        })

        try {
            let canSendSmsTime = wx.getStorageSync('canSendSmsTime')
            let minuTime = (new Date()).getTime()

            if (canSendSmsTime) {
                if (minuTime >= canSendSmsTime) { // 可发送
                    this.setData({
                        showSendBtn: true
                    })
                } else { // 不可发送
                    this.startInterval(Math.floor((canSendSmsTime - minuTime) / 1000))
                }
            } else {
                wx.setStorageSync('canSendSmsTime', minuTime + app.globalData.glbSendSmsTime * 1000)
                this.setData({
                    showSendBtn: true
                })
            }
        } catch (e) {
            console.log('catch', e)
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },

    /**
     * 启动定时器
     */
    startInterval(t) {
        const that = this

        this.setData({
            inter: setInterval(function () {
                if (0 < t) {
                    t--
                    that.setData({
                        time: t,
                        showSendBtn: false
                    })
                } else {
                    that.stopInterval()
                }
            }, 1000)
        })
    },

    /**
     * 结束定时器
     */
    stopInterval() {
        this.setData({
            showSendBtn: true
        })
        clearInterval(this.data.inter)
    },

    handleTap1() {
        let minuTime = (new Date()).getTime()
        wx.setStorageSync('canSendSmsTime', minuTime + app.globalData.glbSendSmsTime * 1000)

        this.startInterval(app.globalData.glbSendSmsTime)
    },

    handleTap2() {
        // todo 验证表单，发起登录请求

        wx.reLaunch({
            url: '/pages/index/index'
        })
    }
})