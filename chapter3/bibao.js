//1. 提炼函数 全局变量封装为私有变量
var mult = (function() {
  var cache = {}
  var calculate = function() {
    var a = 1
    for (var i = 0, l = arguments.length; i < l; i++) {
      a = a * arguments[i]
    }
    return a
  }
  return function() {
    var args = Array.prototype.join.call(arguments, ',')
    if (cache[args]) {
      return cache[args]
    }
    return cache[args] = calculate.apply(null, arguments)
  }
})()
// 2.延续局部变量的寿命
// var report = function(src) {
//   var img = new Image()
//   img.src = src
// }
// report('http://xxx.com/121.jpg')
var report = (function() {
  var imgs = []
  return function(src) {
    var img = new Image()
    ims.push(src)
    img.src = src
  }
})()
report('http://xxx.com/121.jpg')