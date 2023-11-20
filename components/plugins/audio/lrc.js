// components/plugins/audio/lrc.js
var util = require('../../../utils/util')

Component({
  properties: {
    sliderValue: Number,
    fee: {
      type: Number,
      value: 0
    },
    lrc: {
      type: String,
      value: ''
    }
  },

  /**
   * 页面的初始数据
   */
  data: {
    lrcs: [],
    currentSwiper: 0
  },

  observers: {
    'sliderValue': function (val) {
      if (0 != val) {
        if (val >= this.data.lrcs[this.data.currentSwiper + 1].time) {
          let currentSwiper = this.data.currentSwiper + 1
          this.setData({
            currentSwiper: currentSwiper
          })
        }
      } else {
        this.setData({
          currentSwiper: 0
        })
      }
    },
    'lrc': function (val) {
      // console.log('传递给组件的歌词: ', val)
      let _lrc = [];
      if (0 != val.length) {
        val.trim().split(/[\r\n]/).forEach((item, index) => {
          let arr = item.substring(1).split(']')
          if (0 != arr.length) {
            _lrc[index] = {
              index: index,
              time: util.hmsTOSecond(arr[0].trim()),
              ctx: arr[1].trim()
            }
          }
        })

      } else {
        _lrc = [{
          index: 0,
          time: 999.999999,
          ctx: '暂无歌词'
        }]
      }

      this.setData({
        lrcs: _lrc
      })
    }
  },

  methods: {}
})