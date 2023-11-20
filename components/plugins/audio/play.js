// components/plugins/audio/play.js
Component({
  properties: {
    isPlay: Boolean,
    imgSrc: String,
    sliderValue: Number
  },

  /**
   * 页面的初始数据
   */
  data: {
    imageAnimationObject: null,
    imageAnimation: null,
    animationRotate: 0
  },

  observers: {
    'sliderValue': function (val) {
      if (0 != val) {
        // console.log(this.data.animationRotate)
        let rotate = 0 === this.data.animationRotate ? 5 : this.data.animationRotate + 5
        this.data.imageAnimationObject.rotate(rotate).step()
        this.setData({
          imageAnimation: this.data.imageAnimationObject.export(),
          animationRotate: rotate
        })
      }
    }
  },

  methods: {
    // 当错误发生时触发
    imgLoadingError (event) {
      console.log('组件：components/plugins/audio/play.js，调用函数：imgLoadingError')
      console.log(event)
    },

    // 当图片载入完毕时触发
    imgLoaded (event) {
      console.log('组件：components/plugins/audio/play.js，调用函数：imgLoaded')
    },

    // 点击播放或暂停
    playOrPause () {
      console.log('组件：components/plugins/audio/play.js，调用函数：playOrPause')
      this.triggerEvent('clickOperation')
    }
  },

  lifetimes: {
    created: function () {
      console.log('组件：components/plugins/audio/play.js，在组件实例刚刚被创建时执行')

    },
    attached: function () {
      console.log('组件：components/plugins/audio/play.js，在组件实例进入页面节点树时执行')
      this.setData({
        imageAnimationObject: wx.createAnimation({
          duration: 250,
          timingFunction: 'linear'
        })
      })
    },
    ready: function () {
      console.log('组件：components/plugins/audio/play.js，在组件在视图层布局完成后执行')
    },
    moved: function () {
      console.log('组件：components/plugins/audio/play.js，在组件实例被移动到节点树另一个位置时执行')
    },
    detached: function () {
      console.log('组件：components/plugins/audio/play.js，在组件实例被从页面节点树移除时执行')
    }
  }
})