// Null：
// 历史原因设计缺陷，最初未设计此类型，当作 object 的一种特殊值。后来作为一种单独的数据类型独立出来，为了兼容以前的代码，typeof null 返回 object 就没法改变了。

var f = null;
console.log('f ' + typeof f); // 结果: f object

// Null 类型的检测：
function isNull(value) {
  if (!value && typeof value === 'object') return true;
  return false;
}
console.log(isNull(null)); // 结果：true
console.log(isNull('a')); // 结果：false
console.log(isNull(123)); // 结果：false
console.log(isNull(true)); // 结果：false
