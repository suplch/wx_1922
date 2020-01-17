const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const app = express();

app.use(express.static(path.join(__dirname, '..')));

app.use(bodyParser.json())

app.post('/cal', function(req, res) {
    const {left, op, right} = req.body;
    console.log('正在计算', req.body)
    let value;
    switch (op) {
        case '+':
            value = left + right;
            break;
        case '*':
            value = left * right;
            break;
        case '-':
            value = left - right;
            break;
        case '/':
            value = left / right;
            break;
    }
    console.log('计算结果 ', value)
    setTimeout(function() {
        res.send({
            value
        })
    }, 3000);
    

})


app.listen(3000, function() {

    console.log('http://localhost:3000');
})