// pages/cinema/cinema.js
const { cinemaList } = require('../../utils/service.js');
const { request } = require('../../utils/req.js');
const { events } = require('../../utils/events.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cookies: []
  },

  getmaoyanpage() {
    wx.request({
      url: 'http://m.maoyan.com/',
      dataType: 'html',
      success: (res) => {
        console.log(res)
        this.setData({
          cookies: res.cookies
        })
      },
      fail(err) {
        console.log(err)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // request({
    //   url: 'http://www.baidu.com',
    //   success(res) {
    //     console.log(res.data)
    //   }
    // })

    events.on('loginOK', () => {
      console.log('loginOK')
      this.getmaoyanpage();
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