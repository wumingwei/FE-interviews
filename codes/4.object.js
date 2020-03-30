// 1 种引用数据类型：Object

// Object(对象型):一般是基本数据类型的组合，由{}分隔。在{}内部，对象的属性以 key-value 键值对的形式 (name : value) 来定义。属性之间由,分隔：
var city = { id: 1, name: '北京', value: 'BeiJing' };

// 有多种定义/寻址/修改方式：
// 直接定义赋值
var city = { id: 1, name: '北京', value: 'BeiJing' };

// 关键字new定义并赋值
var city = new Object();
city.id = 1;
city.name = '北京';
city.value = 'BeiJing';

// defineProperty单个新增或修改某个属性值
var city = {};
Object.defineProperty(city, 'id', {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true
}); // 等价于 city[id]=1,或citys.id=1;

Object.defineProperty(city, 'name', {
  value: '北京',
  writable: true,
  configurable: true,
  enumerable: true
}); // 等价于 city[name]='北京',或citys.name='北京';

Object.defineProperty(city, 'value', {
  value: 'BeiJing',
  writable: true,
  configurable: true,
  enumerable: true
}); // 等价于 city[value]='BeiJing',或citys.value='BeiJing';

console.log(city); // {id: 1, name: '北京', value: 'BeiJing'}

// defineProperties批量新增或修改属性值
var city = {};
Object.defineProperties(city, {
  id: {
    value: 1,
    writable: true,
    configurable: true,
    enumerable: true
  },
  name: {
    value: '北京',
    writable: true,
    configurable: true,
    enumerable: true
  },
  value: {
    value: 'BeiJing',
    writable: true,
    configurable: true,
    enumerable: true
  }
});
// 等价于 直接赋值 city={id: 1, name: '北京', value: 'BeiJing'}
console.log(city); // {id: 1, name: '北京', value: 'BeiJing'}

// 小小说明
// 使用以下方法可以精确配置对象obj:
Object.defineProperty(obj, obj_name, {
  value: name_value,
  writable: false, // 默认,配置后不可直接赋值修改
  configurable: false, // 默认,配置后不可使用delete删除
  enumerable: false // 默认,配置后不可在for-in、Object.keys()中枚举
});

// 示例说明：
var obj = {};
// 使用以下方法操作obj,等价于obj={name:'hello'}；
Object.defineProperty(obj, name, {
  value: 'hello',
  writable: true, // 默认
  configurable: true, // 可删除，可以使用delete obj.name,来删除name属性;
  enumerable: true // 可枚举
});

// 属性有两种寻址方式：

// 点方法
var cityName = city.name;
console.log(cityName); // 北京

// 或者方括号方法
var cityName = city[name];
console.log(cityName); // 北京

// 对象可以使用 for-in、Object.keys()来枚举其属性
var city = { id: 1, name: '北京', value: 'BeiJing' };
// for-in枚举属性
for (const key in city) {
  if (city.hasOwnProperty(key)) {
    let value = city[key]; // 或者let value = city.key;
    console.log(key, value);
  }
}
// id    1
// name  北京
// value BeiJing

// Object.keys()枚举属性
for (let i = 0; i < Object.keys(city).length; i++) {
  const key = Object.keys(city)[i];
  let value = city[key]; // 或者let value = city.key;
  console.log(key, value);
}
// id    1
// name  北京
// value BeiJing
