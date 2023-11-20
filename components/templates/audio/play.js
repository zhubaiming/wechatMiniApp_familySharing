// components/templates/audio/play.js
Component({
  properties: {
    isPlay: {
      type: Boolean,
      value: false
    },
    imgSrc: {
      type: String,
      value: ''
    },
    mediaName: {
      type: String,
      value: '未知'
    },
    mediaArtists: {
      type: Array,
      value: [{
        id: 0,
        name: '未知'
      }]
    },
    duration: {
      type: Number,
      value: 0
    },
    fee: {
      type: Number,
      value: 0
    },
    lrc: {
      type: String,
      value: ''
    },
    sliderMax: {
      type: Number,
      value: 100
    },
    sliderValue: {
      type: Number,
      value: 0
    }
  },

  /**
   * 页面的初始数据
   */
  data: {},

  methods: {
    // 点击播放或暂停
    playOrPause() {
      console.log('组件：components/templates/audio/play.js，调用函数：playOrPause')
      this.triggerEvent('clickOperation')
    }
  }
})