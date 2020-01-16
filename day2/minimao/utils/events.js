// Events bus 实现 不同页面之间的消息传递
function Events() {}

Events.prototype.on = function (eventName, callbackFn) {
  this.eventHandlers = this.eventHandlers || {};
  this.eventHandlers[eventName] = this.eventHandlers[eventName] || [];
  this.eventHandlers[eventName].push(callbackFn);
}

Events.prototype.emit = function (eventName, data) {
  let callback_list = this.eventHandlers[eventName];
  if (callback_list) {
    for (var i = 0; i < callback_list.length; i++) {
      var callback = callback_list[i];
      callback(data)
    }
  }
}

let events = new Events();

module.exports = {
  events
}

// let events = new Events();

// events.on('我饿了', function(food) {
//   console.log('开始吃 ', food)
// });


// events.emit('我饿了', '面包');