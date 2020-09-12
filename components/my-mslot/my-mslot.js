// components/my-mslot/my-mslot.js
Component({
  // 1.让使用者可以传入数据
  properties: {

  },

  // 2.定义组件内部的初始化数据
  data: {

  },

  // 3.定义组件内部的函数
  methods: {

  },

  // 4.定义组件的配置选项
  options: {
    // 定义多插槽时候使用
    multipleSlots: true
  },

  // 5.外界给组件传递额外的样式
  externalClasses: [],

  // 6.可以监听属性的改变
  observers: {

  },

  // 7.组件中的生命周期函数
  // 7.1: 监听组件所在页面的生命周期
  pageLifetimes: {
    show() {
      console.log("监听组件所在页面显示出来时")
    },
    hide() {
      console.log("监听组件所在页面隐藏起来时");      
    },
    resize() {
      console.log("监听页面尺寸的改变")
    }
  },
  // 7.2: 监听组件本身的生命周期
  lifetimes: {
    created() {
      console.log("组件被创建出来时")
    },
    attached() {
      console.log("组件被添加到页面时")
    },
    ready() {
      console.log("组件被渲染出来时")
    },
    moved() {
      console.log("组件被移动到另一个节点")
    }
  }
})
