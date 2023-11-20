// pages/User/Login/login.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        phoneNumberPrefix: 86,
        phoneNumberDefault: null,
        invitationCodeDefault: null
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
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

    getRealPhoneNum(e) {
        console.log("getRealPhoneNum", e)
    },

    handleTap1() {
        const that = this
        wx.navigateTo({
            url: '/pages/Utils/Country/Phone/list',
            events: {
                acceptDataFromOpenedPage: function (data) {
                    that.setData({
                        phoneNumberPrefix: data.phoneNumberPrefix
                    })
                }
            },
            success: function (res) {
                res.eventChannel.emit('acceptDataFromOpenedPage', { phoneNumberPrefix: that.data.phoneNumberPrefix })
            }
        })
    },

    handleTap2() {
        this.setData({
            phoneNumberDefault: null
        })
    },

    handleTap3(e) {
        const formValue = e.detail.value

        // 校验手机号是否填写，校验邀请码是否填写，校验手机号位数
        wx.reLaunch({
            url: `/pages/User/VerificationCode/code?phoneNumberPrefix=${this.data.phoneNumberPrefix}&phoneNumber=${formValue.phoneNumber}&invitationCode=${formValue.invitationCode}`
        })
    }
})