// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(event) {
      this.setData({
        currentIndex: event.currentTarget.dataset.index
      })

      this.triggerEvent('itemClick', {
        index: event.currentTarget.dataset.index,
        title: this.properties.title[event.currentTarget.dataset.index]
      })
    }
  }
})
