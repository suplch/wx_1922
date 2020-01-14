// pages/movies/movies.js
const { getHotMovies, getMoreHot } = require('../../utils/service.js');
const { handleImgUrl } = require('../../utils/util.js')

let loadingMore = false;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentType: 'zzry',
    types: [
      {id: 'zzry', text: '正在热映'},
      {id: 'jjsy', text: '即将上映'}
    ],
    pageNo: 0,
    pageSize: 12,
    movieIds: [],
    movie_list: []
  },

  test() {
    return 'hello'
  },

  selType(event) {
    const typeid = event.currentTarget.dataset.typeid;
    this.setData({
      currentType: typeid
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getHotMovies((data) => {
      console.log(data);

      for (let movie of data.movieList) {
        movie.img = handleImgUrl(movie.img, 128, 180)
      }
      this.setData({
        movieIds: data.movieIds,
        movie_list: data.movieList
      })
    });
  },

  reachBottom() {
    console.log('bottom');
    if (loadingMore) {
      return;
    }
    loadingMore = true;
    this.data.pageNo++;
    let ids = this.data.movieIds.slice(this.data.pageNo * 12, this.data.pageNo * 12 + 12)

    getMoreHot(ids, (data) => {
      loadingMore = false;

      for (let movie of data.coming) {
        movie.img = handleImgUrl(movie.img, 128, 180)
      }

      this.setData({
        movie_list: [...this.data.movie_list, ...data.coming]
      })
      console.log(data)
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