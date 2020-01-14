
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

module.exports = {
  getHotMovies,
  getMoreHot
}