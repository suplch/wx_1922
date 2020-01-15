
wx.request({
  url: '',
})

function request(options) {
  wx.getStorage({
    key: 'Cookies',
    success: function(res) {
      let cookieStr = 'name=zhang;' // ...若干处理 res.data
       // 其实做了一个代理
      options.header.Cookie = cookieStr
      
      if (options.success) {
        // 其实做了一个代理
        let oldSuccess = options.success;
        options.success = function(res) {
          let cookies = res.header['Set-Cookie'];
          wx.setStorage({
            key: 'Cookies',
            data: cookies,
          })
          oldSuccess(res)
        }
      }
      
      wx.request(options)
    },
    fail() {
      wx.request(options)
    }
  })
  
}
module.exports = {
  request
}
