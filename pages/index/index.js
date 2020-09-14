const app = getApp()

Page({
  onShareAppMessage: function(options) {
    return {
      title: 'nihao',
      path: 'pages/index/index'
    }
  },
  data: {
    title: 'hahah'
  }
})