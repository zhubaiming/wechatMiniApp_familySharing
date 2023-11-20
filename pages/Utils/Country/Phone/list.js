// pages/Utils/Country/Phone/list.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            {
                "zimu": "A", list: [
                    { "guojia": "埃及", "num": 20 },
                    { "guojia": "奥地利", "num": 43 },
                    { "guojia": "阿根廷", "num": 54 },
                    { "guojia": "澳大利亚", "num": 61 },
                    { "guojia": "阿富汗", "num": 93 },
                    { "guojia": "阿尔及利亚", "num": 213 },
                    { "guojia": "安哥拉", "num": 244 },
                    { "guojia": "埃塞尔比亚", "num": 251 },
                    { "guojia": "阿鲁巴", "num": 297 },
                    { "guojia": "爱尔兰", "num": 353 },
                    { "guojia": "阿尔巴尼亚", "num": 355 },
                    { "guojia": "爱沙尼亚", "num": 372 },
                    { "guojia": "安道尔", "num": 376 },
                    { "guojia": "阿曼", "num": 968 },
                    { "guojia": "阿拉伯联合酋长国", "num": 971 },
                    { "guojia": "阿塞拜疆", "num": 994 },
                    { "guojia": "安圭拉", "num": 1264 },
                    { "guojia": "安提瓜和巴布达", "num": 1268 }
                ]
            },
            {
                "zimu": "B", list: [
                    { "guojia": "比利时", "num": 32 },
                    { "guojia": "波兰", "num": 48 },
                    { "guojia": "巴西", "num": 55 },
                    { "guojia": "巴基斯坦", "num": 92 },
                    { "guojia": "布基纳法索", "num": 226 },
                    { "guojia": "贝宁", "num": 229 },
                    { "guojia": "布隆迪", "num": 257 },
                    { "guojia": "博茨瓦纳", "num": 267 },
                    { "guojia": "冰岛", "num": 354 },
                    { "guojia": "保加利亚", "num": 359 },
                    { "guojia": "白俄罗斯", "num": 33755 },
                    { "guojia": "波斯尼亚和黑塞哥维那", "num": 387 },
                    { "guojia": "伯利兹", "num": 501 },
                    { "guojia": "巴拿马", "num": 507 },
                    { "guojia": "玻利维亚", "num": 591 },
                    { "guojia": "巴拉圭", "num": 595 },
                    { "guojia": "巴布新几内亚", "num": 675 },
                    { "guojia": "巴勒斯坦", "num": 970 },
                    { "guojia": "巴林", "num": 973 },
                    { "guojia": "不丹", "num": 975 },
                    { "guojia": "巴哈马", "num": 1242 },
                    { "guojia": "巴巴多斯", "num": 1246 },
                    { "guojia": "百慕大群岛", "num": 1441 },
                    { "guojia": "波多黎各", "num": 1787 }
                ]
            },
            {
                "zimu": "C", list: [
                    { "guojia": "赤道几内亚", "num": 240 }
                ]
            },
            {
                "zimu": "D", list: [
                    { "guojia": "丹麦", "num": 45 },
                    { "guojia": "德国", "num": 49 },
                    { "guojia": "多哥", "num": 228 },
                    { "guojia": "东帝汶", "num": 670 },
                    { "guojia": "多米尼加", "num": 1767 },
                    { "guojia": "多米尼加共和国", "num": 1809 }
                ]
            },
            {
                "zimu": "E", list: [
                    { "guojia": "俄罗斯", "num": 7 },
                    { "guojia": "厄立特里亚", "num": 291 },
                    { "guojia": "厄瓜多尔", "num": 593 }
                ]
            },
            {
                "zimu": "F", list: [
                    { "guojia": "法国", "num": 33 },
                    { "guojia": "菲律宾", "num": 63 },
                    { "guojia": "法罗群岛", "num": 298 },
                    { "guojia": "芬兰", "num": 358 },
                    { "guojia": "法属圭亚那", "num": 594 },
                    { "guojia": "斐济", "num": 679 },
                    { "guojia": "法属波利尼西亚", "num": 689 }
                ]
            },
            {
                "zimu": "G", list: [
                    { "guojia": "古巴", "num": 53 },
                    { "guojia": "哥伦比亚", "num": 57 },
                    { "guojia": "冈比亚", "num": 220 },
                    { "guojia": "刚果共和国", "num": 242 },
                    { "guojia": "刚果民主共和国", "num": 243 },
                    { "guojia": "格陵兰岛", "num": 299 },
                    { "guojia": "瓜地马拉", "num": 502 },
                    { "guojia": "哥斯达黎加", "num": 506 },
                    { "guojia": "瓜德罗普岛", "num": 590 },
                    { "guojia": "圭亚那", "num": 592 },
                    { "guojia": "格鲁吉亚", "num": 995 },
                    { "guojia": "格林纳达", "num": 1473 },
                    { "guojia": "关岛", "num": 1671 }
                ]
            },
            {
                "zimu": "H", list: [
                    { "guojia": "哈萨克斯坦", "num": 7 },
                    { "guojia": "荷兰", "num": 31 },
                    { "guojia": "韩国", "num": 82 },
                    { "guojia": "黑山", "num": 382 },
                    { "guojia": "洪都拉斯", "num": 504 },
                    { "guojia": "海地", "num": 509 }
                ]
            },
            {
                "zimu": "J", list: [
                    { "guojia": "加拿大", "num": 1 },
                    { "guojia": "几内亚", "num": 224 },
                    { "guojia": "加纳", "num": 233 },
                    { "guojia": "加蓬", "num": 241 },
                    { "guojia": "几内亚比绍共和国", "num": 245 },
                    { "guojia": "吉布提", "num": 253 },
                    { "guojia": "津巴布韦", "num": 263 },
                    { "guojia": "捷克", "num": 420 },
                    { "guojia": "基里巴斯", "num": 686 },
                    { "guojia": "柬埔寨", "num": 855 },
                    { "guojia": "吉尔吉斯斯坦", "num": 996 }
                ]
            },
            {
                "zimu": "K", list: [
                    { "guojia": "喀麦隆", "num": 237 },
                    { "guojia": "开普", "num": 238 },
                    { "guojia": "肯尼亚", "num": 254 },
                    { "guojia": "科摩罗", "num": 269 },
                    { "guojia": "克罗地亚", "num": 385 },
                    { "guojia": "库拉索", "num": 599 },
                    { "guojia": "库克群岛", "num": 682 },
                    { "guojia": "科威特", "num": 965 },
                    { "guojia": "卡塔尔", "num": 974 },
                    { "guojia": "开曼群岛", "num": 1345 }
                ]
            },
            {
                "zimu": "L", list: [
                    { "guojia": "罗马尼亚", "num": 40 },
                    { "guojia": "利比亚", "num": 218 },
                    { "guojia": "利比里亚", "num": 231 },
                    { "guojia": "卢旺达", "num": 250 },
                    { "guojia": "留尼汪", "num": 262 },
                    { "guojia": "莱索托", "num": 266 },
                    { "guojia": "卢森堡", "num": 352 },
                    { "guojia": "立陶宛", "num": 370 },
                    { "guojia": "拉脱维亚", "num": 371 },
                    { "guojia": "列支敦士登", "num": 423 },
                    { "guojia": "老挝", "num": 856 },
                    { "guojia": "黎巴嫩", "num": 961 }
                ]
            },
            {
                "zimu": "M", list: [
                    { "guojia": "美国", "num": 1 },
                    { "guojia": "秘鲁", "num": 51 },
                    { "guojia": "墨西哥", "num": 52 },
                    { "guojia": "马来西亚", "num": 60 },
                    { "guojia": "缅甸", "num": 95 },
                    { "guojia": "摩洛哥", "num": 212 },
                    { "guojia": "毛里塔尼亚", "num": 222 },
                    { "guojia": "马里", "num": 223 },
                    { "guojia": "毛里求斯", "num": 230 },
                    { "guojia": "莫桑比克", "num": 258 },
                    { "guojia": "马达加斯加", "num": 261 },
                    { "guojia": "马拉维", "num": 265 },
                    { "guojia": "马约特", "num": 269 },
                    { "guojia": "马耳他", "num": 356 },
                    { "guojia": "摩尔多瓦", "num": 373 },
                    { "guojia": "摩纳哥", "num": 377 },
                    { "guojia": "马其顿", "num": 389 },
                    { "guojia": "马提尼克", "num": 596 },
                    { "guojia": "孟加拉国", "num": 880 },
                    { "guojia": "马尔代夫", "num": 960 },
                    { "guojia": "蒙古", "num": 976 },
                    { "guojia": "美属维尔京群岛", "num": 1284 },
                    { "guojia": "蒙特塞拉特岛", "num": 1664 },
                    { "guojia": "美属萨摩亚", "num": 1684 }
                ]
            },
            {
                "zimu": "N", list: [
                    { "guojia": "南非", "num": 27 },
                    { "guojia": "挪威", "num": 47 },
                    { "guojia": "尼日尔", "num": 227 },
                    { "guojia": "尼日利亚", "num": 234 },
                    { "guojia": "纳米比亚", "num": 264 },
                    { "guojia": "尼加拉瓜", "num": 505 },
                    { "guojia": "尼泊尔", "num": 977 }
                ]
            },
            {
                "zimu": "P", list: [
                    { "guojia": "葡萄牙", "num": 351 },
                    { "guojia": "帕劳", "num": 680 }
                ]
            },
            {
                "zimu": "R", list: [
                    { "guojia": "瑞士", "num": 41 },
                    { "guojia": "瑞典", "num": 46 },
                    { "guojia": "日本", "num": 81 }
                ]
            },
            {
                "zimu": "S", list: [
                    { "guojia": "斯里兰卡", "num": 94 },
                    { "guojia": "塞内加尔", "num": 221 },
                    { "guojia": "塞拉利昂", "num": 232 },
                    { "guojia": "圣多美和普林西比", "num": 239 },
                    { "guojia": "塞舌尔", "num": 248 },
                    { "guojia": "苏丹", "num": 249 },
                    { "guojia": "索马里", "num": 252 },
                    { "guojia": "斯威士兰", "num": 268 },
                    { "guojia": "塞浦路斯", "num": 357 },
                    { "guojia": "圣马力诺", "num": 378 },
                    { "guojia": "塞尔维亚", "num": 381 },
                    { "guojia": "斯洛文尼亚", "num": 386 },
                    { "guojia": "斯洛伐克", "num": 421 },
                    { "guojia": "赛尔瓦多", "num": 503 },
                    { "guojia": "圣彼埃尔和米克隆岛", "num": 508 },
                    { "guojia": "苏里南", "num": 597 },
                    { "guojia": "所罗门群岛", "num": 677 },
                    { "guojia": "萨摩亚", "num": 685 },
                    { "guojia": "沙特阿拉伯", "num": 966 },
                    { "guojia": "圣马丁岛（荷兰部分）", "num": 1721 },
                    { "guojia": "圣卢西亚", "num": 1758 },
                    { "guojia": "圣文森特和格林纳丁斯", "num": 1784 },
                    { "guojia": "圣基茨和尼维斯", "num": 1869 }
                ]
            },
            {
                "zimu": "T", list: [
                    { "guojia": "泰国", "num": 66 },
                    { "guojia": "土耳其", "num": 90 },
                    { "guojia": "突尼斯", "num": 216 },
                    { "guojia": "坦桑尼亚", "num": 255 },
                    { "guojia": "汤加", "num": 676 },
                    { "guojia": "塔吉克斯坦", "num": 992 },
                    { "guojia": "土库曼斯坦", "num": 993 },
                    { "guojia": "特克斯和凯科斯群岛", "num": 1649 },
                    { "guojia": "特立尼达和多巴哥", "num": 1868 }
                ]
            },
            {
                "zimu": "W", list: [
                    { "guojia": "委内瑞拉", "num": 58 },
                    { "guojia": "乌干达", "num": 256 },
                    { "guojia": "乌克兰", "num": 380 },
                    { "guojia": "乌拉圭", "num": 598 },
                    { "guojia": "文莱", "num": 673 },
                    { "guojia": "瓦努阿图", "num": 678 },
                    { "guojia": "乌兹别克斯坦", "num": 998 }
                ]
            },
            {
                "zimu": "X", list: [
                    { "guojia": "希腊", "num": 30 },
                    { "guojia": "西班牙", "num": 34 },
                    { "guojia": "匈牙利", "num": 36 },
                    { "guojia": "新西兰", "num": 64 },
                    { "guojia": "新加坡", "num": 65 },
                    { "guojia": "象牙海岸", "num": 225 },
                    { "guojia": "新喀里多尼亚", "num": 687 },
                    { "guojia": "叙利亚", "num": 963 }
                ]
            },
            {
                "zimu": "Y", list: [
                    { "guojia": "意大利", "num": 39 },
                    { "guojia": "英国", "num": 44 },
                    { "guojia": "印度尼西亚", "num": 62 },
                    { "guojia": "越南", "num": 84 },
                    { "guojia": "印度", "num": 91 },
                    { "guojia": "伊朗", "num": 98 },
                    { "guojia": "亚美尼亚", "num": 374 },
                    { "guojia": "约旦", "num": 962 },
                    { "guojia": "伊拉克", "num": 964 },
                    { "guojia": "也门", "num": 967 },
                    { "guojia": "以色列", "num": 972 },
                    { "guojia": "英属处女群岛", "num": 1340 },
                    { "guojia": "牙买加", "num": 1876 }
                ]
            },
            {
                "zimu": "Z", list: [
                    { "guojia": "智利", "num": 56 },
                    { "guojia": "中国", "num": 86 },
                    { "guojia": "乍得", "num": 235 },
                    { "guojia": "中非共和国", "num": 236 },
                    { "guojia": "赞比亚", "num": 260 },
                    { "guojia": "直布罗陀", "num": 350 },
                    { "guojia": "中国香港", "num": 852 },
                    { "guojia": "中国澳门", "num": 853 },
                    { "guojia": "中国台湾", "num": 886 }
                ]
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // this.setData({
        //     eventChannel: this.getOpenerEventChannel()
        // })
        // var eventChannel = this.getOpenerEventChannel()

        // eventChannel.emit('acceptDataFromOpenedPage', { data: 'aaa' })

        // eventChannel.on('acceptDataFromOpenedPage', function (data) {
        //     console.log('b', data)
        // })
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

    changePhonePrefix(event) {
        const phoneNumberPrefix = event.currentTarget.dataset.prefix

        const eventChannel = this.getOpenerEventChannel()

        wx.navigateBack({
            delta: 1,
            success: function (res) {
                eventChannel.emit('acceptDataFromOpenedPage', { phoneNumberPrefix })
            }
        })
    }
})