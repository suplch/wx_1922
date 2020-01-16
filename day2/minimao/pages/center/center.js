// pages/center/center.js
const phoneReg = /^1[3456789]\d{9}$/;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    disableGetCodeBtn: true,
    disableInputCode: true,
    disableLogin: true,
    phoneNum: '13565656767',
    code: ''
  },

  changePhone(event) {
    let phone = event.detail.value;

    let dis = !phoneReg.test(phone);

    this.setData({
      phoneNum: phone,
      disableGetCodeBtn: dis,
      disableInputCode: dis,
      disableLogin: dis
    })
  },

  changeCode(event) {
    this.setData({
      code: event.detail.value
    })
  },

  sendCode() {
    wx.request({
      url: "http://localhost:3000/sendCode",
      method: 'POST',
      data: {
        phone: this.data.phoneNum
      },
      success(res) {
        console.log(res.data)
      }
    });
  },

  login() {
    wx.request({
      url: "http://localhost:3000/verify",
      method: 'POST',
      data: {
        phone: this.data.phoneNum,
        code: this.data.code
      },
      success(res) {
        console.log(res.data)
        if (res.data.code === 100) {

          wx.setStorageSync('token', res.data.token)

        }
      }
    });
  },

  getUser() {
    let token = wx.getStorageSync('token')
    wx.request({
      url: 'http://localhost:3000/getuserinfo?token=' + token,
      success(res) {
        console.log(res.data);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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