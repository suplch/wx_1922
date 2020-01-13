
const express = require('express');

const app = express();

const goods_list = [
    { id: '111', name: '苹果', price: 10, pic: '🍎'},
    { id: '222',  name: '橘子', price: 20, pic: '🍊' },
    { id: '333',  name: '西瓜', price: 30, pic: '🍉' },
    { id: '444',  name: '菠萝', price: 12, pic: '🍍' },
]

const goods_all = {
    '111': { id: '111', name: '苹果', price: 10, pic: '🍎', desc: '烟台大苹果'},
    '222': { id: '222',  name: '橘子', price: 20, pic: '🍊', desc: '南方橘子' },
    '333': { id: '333',  name: '西瓜', price: 30, pic: '🍉', desc: '大兴大西瓜' },
    '444': { id: '444',  name: '菠萝', price: 12, pic: '🍍', desc: '海南菠萝' },
}

app.get('/goods/list', function(request, response) {
    response.send({
        code: 100,
        msg: 'ok',
        goods_list: goods_list
    })
})
//    /goods/detail?good_id=111
app.get('/goods/detail', function(req, res) {
    console.log(goods_all);
    console.log('-------')
    console.log(goods_all[req.query.goods_id])
    res.send({
        code: 100,
        msg: 'ok',
        goods_detail: goods_all[req.query.goods_id]
    })
})


const port = 3000;
app.listen(port, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('http://localhost:' + port);
});