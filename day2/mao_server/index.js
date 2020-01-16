const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
//const http = require('http')
const axios = require('axios');

// http://dianxing.com/xxx/yyy/sendCode;  post
// { key:'xxxyyzzzz', phone: 1345656788, msg: '尊敬的客户 ....'}
const app = express();
app.use(bodyParser.json());

let db = {}

app.post('/sendCode', function(req, res) {
    const { phone } = req.body;
    let code = 100000 + Math.floor(Math.random() * 900000)
    // let result = await axios.post('http://dianxing.com/xxx/yyy/sendCode', {
    //     key:'xxxyyzzzz',
    //     phone: 1345656788, 
    //     msg: code
    // })

    console.log(code);
    db[phone] = String(code);
    res.send({
        code: 100,
        msg: '短信发送成功'
    })
});

app.post('/verify', function(req, res) {
    const {phone, code} = req.body;
    console.log(code);
    console.log(db[phone])
    if (db[phone] == code) {

        // 后端应该 生成一个一个 token 发给前端, 用来识别这个用户
        // jsonwebtoken
        // npm install jsonwebtoken --save
        // const jwt = require('jsonwebtoken')
        
        
        let token = jwt.sign(phone, '秘钥串xxxxxxx')

        res.send({
            code: 100,
            token: token,
            msg: '验证成功'
        })
    } else {
        res.send({
            code: 101,
            msg: '验证失败'
        })
    }

})

app.get('/getuserinfo', function(req, res) {
    let token = req.query.token;
    try {
        let phone = jwt.verify(token, '秘钥串xxxxxxx')
        res.send({
            code: 100,
            user: {
                name: 'zhang san',
                age: 18,
                phone: phone,
                hobby: '睡觉'
            }
        })
    } catch (err) {
        res.send({
            code: 102,
            msg: 'token 异常 请重新登录'
        })
    }
    


})


app.listen(3000, function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('http://localhost:' + 3000);
});