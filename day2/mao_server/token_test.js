const jwt = require('jsonwebtoken');
let privateKey = '私钥字符串xxxyyyzzz'

let user = {name: 'zhang', age: 18}
// 
const token = jwt.sign(user, privateKey);

console.log(token);

let ret = jwt.verify(token, privateKey);

console.log(ret);