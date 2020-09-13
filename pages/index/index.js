Page({
  handleShowToast() {
    wx.showToast({
      title: '加载中, Toast',
      duration: 1000,
      icon: 'loading',
      success: function() {
        console.log("展示弹窗成功")
      },
      fail: function() {
        console.log("展示弹窗失败")
      },
      complete: function() {
        console.log("完成函数的调用")
      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '你好, ShowModal',
      content: '我是内容',
      success: function(res) {
        console.log(res)
        if(res.cancel) {
          console.log("用户点击了取消按钮")
        } else {
          console.log("用户点击了确定按钮")
        }
      }
    })
  },
  handleShowLoading() {
    wx.showLoading({
      title: 'Loading',
      mask: true
    })
    // 必须手动调用hideLoading才会让loading消失
    setTimeout(() => wx.hideLoading(), 1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      success: function(res) {
        console.log(res)
      }
    })
  }
})
