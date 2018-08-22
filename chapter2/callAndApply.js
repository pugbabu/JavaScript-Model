/*
在实际开发种，特别是在一些函数式风格的代码种，call和apply方法尤为有用，能熟练运用Function.prototype.call()和
Function.prototype.apply()这2种方法，是真正成为一名JavaScript程序员的重要一步
1、区别
两者作用一模一样，区别在于二者传入参数形式的不同
var func = function (a, b, c) {
  alert([a, b, c]) //输出 [1, 2, 3]
}
func.apply(null, [1, 2, 3])或func.call(null, 1, 2, 3)
第一个参数为null，函数体内的this会指向默认的宿主对象，在浏览器种则是window；
有时候使用call或者apply的目的不在于指定this指向，而是另有用途，比如借用对象的方法，那么我们
可以传入null来代替某个具体的对象：
Math.max.apply(null, [1, 2, 3]) //输出3

2、用途
1）改变this指向
2) 借用其他对象的方法
如在操作arguments的时候，我们会非常频繁地找Array.prototype对象借用方法
arguments转数组：Array.prototype.slice.call(arguments) 或[].slice.call(arguments, 0)
arguments移除头一个元素：Array.prototype.shift.call(arguments)
我们还可以将“任意”对象传入Array.prototype.push中
*/