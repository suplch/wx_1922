
function getHotMovies(callback) {
  wx.request({
    url: 'http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=3CB6E28022CD11EAB1493B40EFD466378DF35103B9504A45A181AC2194395ABF&optimus_risk_level=71&optimus_code=10',
    success(res) {

      callback(res.data)
    }
  })
}

function getMoreHot(ids, callback) {
  console.log(ids);
  let movieIds = ids.join(',');
  movieIds = encodeURIComponent(movieIds)
  wx.request({
    url: 'http://m.maoyan.com/ajax/moreComingList?token=&movieIds=' + movieIds +  '&optimus_uuid=3CB6E28022CD11EAB1493B40EFD466378DF35103B9504A45A181AC2194395ABF&optimus_risk_level=71&optimus_code=10',
    success(res) {
      callback(res.data);
    }
  })
}

function getMovieDetail(mid, callback) {
  wx.request({
    url: 'http://m.maoyan.com/ajax/detailmovie?movieId=' + mid + '&optimus_uuid=3CB6E28022CD11EAB1493B40EFD466378DF35103B9504A45A181AC2194395ABF&optimus_risk_level=71&optimus_code=10',
    success(res) {
      callback(res.data)
    }
  })
}

function mostExpected(offset, limit, callback) {
  wx.getStorage({
    key: 'mostExpected_' + offset + '_' + limit,
    success: function(res) {
      callback(res.data)
    },
    fail: function() {
      wx.request({
        url: 'http://m.maoyan.com/ajax/mostExpected?ci=1&limit=' + limit + '&offset=' + offset + '&token=&optimus_uuid=3CB6E28022CD11EAB1493B40EFD466378DF35103B9504A45A181AC2194395ABF&optimus_risk_level=71&optimus_code=10',
        success(res) {
          if (res.data.coming.length === 0) {
            callback(res.data)
          } else {
            wx.setStorage({
              key: 'mostExpected_' + offset + '_' + limit,
              data: res.data,
              success() {
                callback(res.data)
              }
            })
          }
        }
      })
    }
  })
}

function cinemaList() {
  wx.request({
    url: 'http://m.maoyan.com/ajax/cinemaList?day=2020-01-15&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1579071200664&cityId=1&optimus_uuid=1F05B860376311EA84D9C3A96EA6CD3A083408039FF6493BA7A585484E2A2DB2&optimus_risk_level=71&optimus_code=10',
    header: {
      Cookie: 'uuid_n_v=v1; iuuid=1F05B860376311EA84D9C3A96EA6CD3A083408039FF6493BA7A585484E2A2DB2; webp=true; ci=1%2C%E5%8C%97%E4%BA%AC; _last_page=c_dmLad; _lxsdk_cuid=16fa7f6ad13c8-0ca1fc3d9f6508-2d604637-3d10d-16fa7f6ad1385; _lxsdk=1F05B860376311EA84D9C3A96EA6CD3A083408039FF6493BA7A585484E2A2DB2; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1576807629,1578981432; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1579070959; __mta=245723451.1579070959005.1579070959005.1579070959016.2; _lxsdk_s=16fa7f6abb6-7cc-8a2-b89%7C%7C9'
    },
    success(res) {
      console.log(res.data)
    },
    fail(err) {
      console.log(err)
    }
  })
}

module.exports = {
  getHotMovies,
  getMoreHot,
  getMovieDetail,
  mostExpected,
  cinemaList
}