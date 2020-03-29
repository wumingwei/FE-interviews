// Undefined:

// 1).未定义，直接使用,报错；但是直接输出一个不存在变量的 typeof ,返回 undefined;
d; // 报错:ReferenceError: d is not defined
console.log(d); // 报错:ReferenceError: d is not defined
console.log(typeof dd); // 不报错，结果:undefined

// 2).已定义，但是未赋值,结果:undefined。
var e;
console.log(e); // 结果不报错:undefined
console.log('e ' + typeof e); // 结果:e undefined
