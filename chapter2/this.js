/* 
1、this的指向
this总是指向一个对象，具体指向哪个对象是在运行时给予函数的执行环境动态绑定的，
而不是函数被声明时的环境
this指向大致可以分为4种：
1）作为对象的方法调用,this指向对象
var obj = {
  a: 1,
  getA: function() {
    alert(this === obj);// 输出：true
    alert(this.a); //输出：1
  }
}
obj.getA()
2）作为普通函数调用，this指向全局对象-window
window.name = 'pugbabu'
var getName = function () {
  return this.name
}
console.log(getName()) // 输出：'pugbabu'
⚠️：严格模式下，this被规定为不会指向全局对象，而是undefined，如：
function func() {
  "use strict"
  alert(this) // 输出：undefined
}
func()
3）构造器调用
var MyClass = function () {
  this.name = 'pugbabu'
}
var obj = new MyClass()
console.log(obj.name) //输出：'pugbabu'
4）Function.prototype.call 或 Function.prototype.apply调用
动态改变传入函数的this
var obj1 = {
  name: 'sven',
  getName: function() {
    return this.name
  }
}
var obj2 = {name: 'pugbabu'}
console.log(obj1.getName()) // 输出sven
console.log(obj1.getName.call(obj2)) //输出：pugbabu


*/