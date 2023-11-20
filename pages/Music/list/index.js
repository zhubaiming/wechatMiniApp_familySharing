// pages/Music/list/index.js
var wwyApi = require('../../../utils/WYY_encrypt');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                keyword: '加油鸭',
                artistKey: '张轩睿'
            },
            {
                keyword: '往事只能回味',
                artistKey: '陈小春'
            }
        ]
    },

    navigateToSuccessRes: null,

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let that = this

        this.data.list.forEach((item, index) => {
            let keyword = item.keyword,
                api;

            // 1
            api = wwyApi.webApi.search_song_info(keyword)

            wx.request({
                url: api.url,
                data: {
                    params: api.params,
                    encSecKey: api.encSecKey
                },
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                method: 'POST',
                dataType: 'json',
                success(res) {
                    console.log(res.data.result)
                    const resp = res.data.result.songs
                    resp.forEach((resp_item, resp_index) => {
                        resp_item.artists.forEach((artist_item, artist_index) => {
                            if (artist_item.name.includes(item.artistKey)) {
                                that.setData({
                                    ["list[" + index + "].id"]: resp_item.id,
                                    ["list[" + index + "].name"]: resp_item.name,
                                    ["list[" + index + "].artists"]: resp_item.artists,
                                    // ["list[" + index + "].pic"]: wwyApi.webApi.get_song_detail(resp_item.id),
                                    //  https://p2.music.126.net/9JtPoPf-qqEHx59n4zZOGA==/109951164231017207.jpg?param=130y130
                                    // 	https://p1.music.126.net/pbZt4gUmcXjrW_tx_qRV7A==/109951166366107095.jpg?param=130y130
                                    ["list[" + index + "].duration"]: resp_item.duration,
                                    ["list[" + index + "].fee"]: resp_item.fee
                                })
                            }
                        })
                    })

                    // 2
                    api = wwyApi.webApi.get_song_lyric(item.id)
                    wx.request({
                        url: api.url,
                        data: {
                            params: api.params,
                            encSecKey: api.encSecKey
                        },
                        header: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        method: 'POST',
                        dataType: 'json',
                        success(res) {
                            that.setData({
                                ["list[" + index + "].lrc"]: res.data.lrc.lyric
                            })
                        }
                    })

                    // 3
                    api = wwyApi.webApi.get_song_player_url(item.id)
                    wx.request({
                        url: api.url,
                        data: {
                            params: api.params,
                            encSecKey: api.encSecKey
                        },
                        header: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        method: 'POST',
                        dataType: 'json',
                        success(res) {
                            that.setData({
                                ["list[" + index + "].url"]: 'https' + encodeURIComponent(res.data.data[0].url).substring(4)
                            })
                        }
                    })

                    // 4
                    wx.request({
                        url: `https://music.163.com/song?id=${item.id}`,
                        method: 'GET',
                        success(res) {
                            let arr = res.data.match(/\<meta(.*)og:image(.*)\>/)
                            let i = arr[2].search(/http/)
                            let len = arr[2].lastIndexOf('\"')
                            that.setData({
                                ["list[" + index + "].pic"]: arr[2].substring(i, len)
                            })
                        }
                    })
                }
            })
        })
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

    goToPlay(e) {
        // console.log(e)
        // console.log(e.currentTarget)
        // console.log(e.currentTarget.dataset)
        // console.log(this.data.list)

        // return false

        // let playUrl = encodeURIComponent('https://zz123.com/xplay/?act=songplay&id=aszsuak')
        // let item = this.data.list[e.currentTarget.dataset.index - 1]

        let that = this,
            _index = e.currentTarget.dataset.index,
            item = that.data.list[_index]

        wx.navigateTo({
            url: `/pages/Music/play/index`,
            events: {
                // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
                toggleMusic: (data) => {
                    console.log('获取被打开页面传送到当前页面的数据', data)
                    _index = data.index

                    if (0 > _index) {

                    } else {
                        item = that.data.list[_index]
                        that.transmitMusicInfo(_index, item)
                    }
                },
                // acceptDataFromOpenedPage: (data) => {
                //     console.log('获取被打开页面传送到当前页面的数据', data)
                // },
                // someEvent: (data) => {
                //     console.log(data)
                // }
            },
            success: (res) => {
                that.navigateToSuccessRes = res
                // res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
                that.transmitMusicInfo(_index, item)
            }
        })
    },

    transmitMusicInfo(index, item) {
        item.index = index
        this.navigateToSuccessRes.eventChannel.emit('transmitMusicInfo', item)
    }
})