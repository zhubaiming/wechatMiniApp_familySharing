// components/plugins/media/degree_of_progress.js
var util = require('../../../utils/util')

Component({
    properties: {
        duration: {
            type: Number,
            value: 0
        },
        max: {
            type: Number,
            value: 100
        },
        value: {
            type: Number,
            value: 0
        }
    },

    /**
     * 页面的初始数据
     */
    data: {
        totalTime: '00:00',
        // 已选择的颜色
        activeColor: 'rgba(0, 0, 0, 0.3)',
        // 背景条的颜色
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        // 滑块的大小，取值范围为 12 - 28
        blockSize: 12,
        // 滑块的颜色
        blockColor: 'rgba(0, 0, 0, 0.5)'
    },

    observers: {
        'duration': function (val) {
            if (0 != val) {
                this.setData({
                    totalTime: util.secondTOHms(val)
                })
            }
        }
    },

    methods: {
        changeSlider(event) {
            console.log('组件：components/plugins/media/degree_of_progress.js，调用函数：changeSlider')
            console.log(event)
            console.log(event.detail)
        },

        changingSlider(event) {
            console.log('组件：components/plugins/media/degree_of_progress.js，调用函数：changingSlider')
            console.log(event)
            console.log(event.detail)
        }
    }
})