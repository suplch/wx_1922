// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    goods_detail: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    
    wx.request({
      url: 'http://localhost:3000/goods/detail?goods_id=' + options.goods_id, //仅为示例，并非真实的接口地址
      success: (res) => {
        console.log(res.data)
        this.setData({
          goods_detail: res.data.goods_detail
        })
      }
    })
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