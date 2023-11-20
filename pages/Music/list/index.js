// pages/Music/list/index.js
// var wwyApi = require('../../../utils/WYY_encrypt');
import { WYY } from '../../../request/wangyiyun/music';

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
    async onLoad(options) {
        const aaa = await WYY.getResourceByKeywords({
            keyword: '加油鸭',
            artistKey: '张轩睿'
        });

        // console.log(aaa);


        // let that = this

        // that.data.list.forEach((item, index) => {
        //     let keyword = item.keyword;

        //     const aaa = await WYY.searchSongInfo(keyword);

        //     console.log(aaa);
        // })
    },

    // onLoad: async function (options) {
    //     let that = this

    //     this.data.list.forEach((item, index) => {
    //         let keyword = item.keyword, api;

    //         // let aaa = wyy.wyy.search_song_info(keyword);
    //         let aaa = await wyy.wyy.aaa(keyword);

    //         console.log(aaa);
    //     })
    // },

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