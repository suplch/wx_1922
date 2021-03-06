//index.js
//获取应用实例
// const app = getApp()

Page({
  data: {
    item: '哈哈',
    welcome: '欢迎光临',
    show: true,
    students: [
      {name: '张三', age: 18},
      { name: '李四', age: 28 },
      { name: '王五', age: 8 },
    ]
  },
  showInfo() {
    console.log('被执行了 show info');
    // this 代表 当前页面 实例也 就是 Page 的 实例
    console.log(this);
    this.setData({
      show: !this.data.show
    })
  },
  gologs() {
    // 跳转到指定页面, 还可以 点击后退 按钮返回
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  gotodos() {
    // 将当前页面替换, 不能再返回了
    wx.redirectTo({
      url: '../todos/todos',
    })
  }
})
