// pages/todos/todos.js
const { culDoneCount } = require('../../utils/util.js');
let id = 1000;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newtask: '睡觉',
    todo_list: [
      {id: '111', task: '吃饭', done: true},
      {id: '222', task: '上课', done: false },
      {id: '333', task: '逛街', done: false },
    ],
    doneCount: 0
  },
  changeNewTask(event) {
    console.log(event);
    event.detail.value;
    this.setData({
      newtask: event.detail.value
    });
  },
  addTask(event) {
    let todo_list = this.data.todo_list;
    todo_list.push({
      id: id++,
      task: this.data.newtask,
      done: false
    });

    this.setData({
      todo_list: todo_list,
      newtask: ''
    })
  },

  checkTodo(event) {
    console.log(event);
    let todo = event.currentTarget.dataset.todo;
    let newTodos = this.data.todo_list.map((todoItem) => {
      if (todoItem.id === todo.id) {
        return { ...todoItem, done: !todo.done}
      } else {
        return todoItem
      }
    });
    this.setData({
      todo_list: newTodos,
    });
    this.setData({
      doneCount: culDoneCount(this.data.todo_list)
    })
    console.log(event.currentTarget.dataset.todo);
  },

  delTodo(event) {
    let todo = event.currentTarget.dataset.todo;
    //let position = this.data.todo_list.indexOf(todo); 小程序里面不能使用这种方法

    let position =  this.data.todo_list.findIndex((todoItem) => {
      return todoItem.id === todo.id
    });

    this.data.todo_list.splice(position, 1);

    this.setData({
      todo_list: this.data.todo_list,
      doneCount: culDoneCount(this.data.todo_list)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      doneCount: culDoneCount(this.data.todo_list)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})