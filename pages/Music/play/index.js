// pages/Music/play/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isPlay: false,
        index: 0,
        id: null,
        name: null,
        artists: null,
        duration: null,
        fee: null,
        lrc: null,
        pic: null,
        url: null,
        sliderMax: 0,
        sliderValue: 0,
        IActx: null,
    },

    /**
     * 自定义参数
     */
    eventChannel: null,


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var that = this

        that.eventChannel = that.getOpenerEventChannel()
        // eventChannel.emit('acceptDataFromOpenedPage', { data: 'test1' })
        // eventChannel.emit('someEvent', { data: 'test2' })
        // // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
        // eventChannel.on('acceptDataFromOpenerPage', (data) => {
        //     console.log('上一页面通过eventChannel传送到当前页面的数据', data)
        // })
        that.eventChannel.on('transmitMusicInfo', (data) => {
            console.log('上一页面通过eventChannel传送到当前页面的数据', data)

            const innerAudioContext = wx.createInnerAudioContext({
                useWebAudioImplement: false // 是否使用 WebAudio 作为底层音频驱动，默认关闭。对于短音频、播放频繁的音频建议开启此选项，开启后将获得更优的性能表现。由于开启此选项后也会带来一定的内存增长，因此对于长音频建议关闭此选项
            })

            console.log(data.url)

            // 音频资源的地址，用于直接播放
            // innerAudioContext.src = data.url
            innerAudioContext.src = 'http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3'
            // 开始播放的位置（单位：s），默认为 0
            innerAudioContext.startTime = 0
            // 是否自动开始播放，默认为 false
            innerAudioContext.autoplay = false
            // 是否循环播放，默认为 false
            innerAudioContext.loop = false
            // 音量，范围 0~1，默认为 1「基础库 1.9.90 开始支持」
            innerAudioContext.volume = 1
            // 播放速度，范围 0.5~2.0，默认为 1「基础库 2.11.0 开始支持」
            innerAudioContext.playbackRate = 1.0

            that.setData({
                index: data.index,
                id: data.id,
                name: data.name,
                artists: data.artists,
                duration: data.duration,
                fee: data.fee,
                lrc: data.lrc,
                pic: data.pic,
                // url: data.url,
                // url: decodeURIComponent(data.url),
                sliderMax: Math.floor(data.duration / 1000),
                IActx: innerAudioContext
            })
        })



        // wx.setInnerAudioOption({
        //     mixWithOther: false,
        //     obeyMuteSwitch: false,
        //     speakerOn: true,
        //     success() {
        //         console.log('设置成功')
        //     }
        // })

        // console.log(that.data)






        // 当前音频的长度（单位：s），只有在当前有合法的src时返回（只读）
        // console.log("当前音频的长度（单位：s）", audioCtx.duration)
        // 当前音频的播放位置（单位：s），只有在当前有合法的src时返回，时间保留小数点后6位「在基础库 2.26.2 之前只读，基础库 2.26.2 开始可读可写，改变 currentTime 值等同于调用 seek」
        // this.audioCtx.currentTime
        // 当前是是否暂停或停止状态（只读）
        // console.log("当前是是否暂停或停止状态", audioCtx.paused)
        // // 音频缓冲的时间点，仅保证当前播放时间点到此时间点内容已缓冲（只读）
        // console.log("音频缓冲的时间点", audioCtx.buffered)



        // // 监听音频播放事件
        // // this.IActx.onPlay(() => {
        // //     console.log("音频播放事件")
        // // })

        // // 监听音频暂停事件
        // // this.IActx.onPause(
        // //     console.log("音频暂停事件")
        // // )

        // 监听音频自然播放至结束的事件
        // that.IActx.onEnded(() => {
        that.data.IActx.onEnded(() => {
            console.log("音频自然播放至结束的事件")
            that.setData({
                isPlay: false,
                sliderValue: 0
            })
        })

        // 监听音频进入可以播放状态的事件。但不保证后面可以流畅播放
        // that.IActx.onCanplay(() => {
        that.data.IActx.onCanplay(() => {
            console.log("音频进入可以播放状态的事件")
            // let i = setInterval(() => {
            //     if (that.IActx.duration != 0) {
            //         that.setData({
            //             sliderMax: Math.floor(that.IActx.duration)
            //         })
            //         clearInterval(i)
            //     }
            // }, 300)
        })

        // 监听音频播放进度更新事件
        // that.IActx.onTimeUpdate(() => {
        that.data.IActx.onTimeUpdate(() => {
            // console.log("volume: ", that.IActx)
            // console.log("volume: ", that.IActx.volume)
            // console.log("volume: ", that.IActx.currentTime)
            that.setData({
                sliderValue: that.IActx.currentTime
            })
        })

        // /*
        // // 监听音频停止事件
        // audioCtx.onStop(this.localOnStop())

        // 监听音频播放错误事件
        // that.IActx.onError((error) => {
        that.data.IActx.onError(() => {
            console.log('音频播放错误')
            console.log(error)
        })

        // // 监听音频加载中事件。当音频因为数据不足，需要停下来加载时会触发
        // audioCtx.onWaiting(this.localOnWaiting())

        // // 监听音频进行跳转操作的事件
        // audioCtx.onSeeking(this.localOnSeeking())

        // // 监听音频完成跳转操作的事件
        // audioCtx.onSeeked(this.localOnSeeked())
        // */
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
        console.warn("页面隐藏,onHide")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {
        console.warn("页面卸载,onUnload")
        this.destroyIActx()
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

    changeSwiper(event) {
        console.log('页面：pages/Music/play/index.js，调用函数：changeSwiper，当前所在滑块的 index 改变时触发')
        console.log(event)
        console.log(event.detail)
    },
    transitionSwiper(event) {
        console.log('页面：pages/Music/play/index.js，调用函数：transitionSwiper，swiper-item 的位置发生改变时会触发')
        // console.log(event)
        // console.log(event.detail)
        if (100 <= event.detail.dy) {
            this.destroyIActx()
            this.eventChannel.emit('toggleMusic', {
                index: this.data.index + 1
            })
        } else if (-100 >= event.detail.dy) {
            this.destroyIActx()
            this.eventChannel.emit('toggleMusic', {
                index: this.data.index - 1
            })
        }
    },
    animationginishSwiper(event) {
        console.log('页面：pages/Music/play/index.js，调用函数：animationginishSwiper，动画结束时会触发')
        console.log(event)
        console.log(event.detail)
    },
    playOrPause: function () {
        console.log('页面：pages/Music/play/index.js，调用函数：playOrPause')
        console.log('组件点击操作')
        if (this.data.isPlay) {
            console.log("点击暂停")
            this.data.IActx.pause()
        } else {
            console.log("点击播放")
            this.data.IActx.play()
        }
        this.setData({
            isPlay: !this.data.isPlay
        })
    },
    destroyIActx() {
        this.data.IActx.stop()
        this.data.IActx.destroy()
        this.setData({
            IActx: null
        })
    }
})