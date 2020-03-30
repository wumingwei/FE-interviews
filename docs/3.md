#### **JavaScript 有 7 种原始数据类型：**

- **String(字符型)**
- **Number(数值型)**
- **Boolean(布尔值型)**
- **Undefined**
- **Null**
- **Object(对象型)**
- **Symbol(符号型，ES6 中新增数据类型)**

> 通常使用 typeof 检测其类型(Null，Array，Object 除外),返回其数据类型值的字符串;

**String**
字符型:由一系列字符组成的字符串，属于值类型。

**Number**
数值型:用来表示数值，属于值类型，可以用于算术逻辑计算。

**Boolean**
布尔值型：用表示逻辑是，逻辑非:true，false，属于值类型。

**Undefined**
未定义：定义未赋值，或未定义（直接使用会引起异常），特殊的数据类原始数据型。

**Null**
空：代表一个空指针，特殊的一种原始数据类型。

**Object**
对象型:以 key-value 的方式代表属性名与属性值，由{}组成，不同的属性以,隔开，JS 中一种重要的引用型原始数据类型。

**Symbol**
符号型：ES6 新增的一种原始数据类型，主要用于解决属性名相同一起的冲突问题，每个 Symbol()值都不相同。

---

#### **3 种基本数据类型：String、Number、Boolean，属于值类型**

```javascript
var a = '10',
  b = 10,
  c = true;
console.log('a ' + typeof a); // 结果:a string
console.log('b ' + typeof b); // 结果:b number
console.log('c ' + typeof c); // 结果:c boolean
```

---

#### **2 种特殊数据类型：Undefined、Null;**

**Undefined:**
1).未定义，直接使用,报错；但是直接输出一个不存在变量的 typeof ,返回 undefined;

```javascript
d; // 报错:ReferenceError: d is not defined
console.log(d); // 报错:ReferenceError: d is not defined
console.log(typeof dd); // 不报错，结果:undefined
```

// 2).已定义，但是未赋值,结果:undefined。

```javascript
var e;
console.log(e); // 结果不报错:undefined
console.log('e ' + typeof e); // 结果:e undefined
```

**Null：**

历史原因设计缺陷，最初未设计此类型，当作 object 的一种特殊值。后来作为一种单独的数据类型独立出来，为了兼容以前的代码，typeof null 返回 object 就没法改变了。

```javascript
var f = null;
console.log('f ' + typeof f); // 结果: f object
```

Null 类型的检测：

```javascript
function isNull(value) {
  if (!value && typeof value === 'object') return true;
  return false;
}
console.log(isNull(null)); // 结果：true
console.log(isNull('a')); // 结果：false
console.log(isNull(123)); // 结果：false
console.log(isNull(true)); // 结果：false
```

---

#### **1 种引用数据类型：Object;**

Object(对象型):一般是基本数据类型的组合，由{}分隔。在{}内部，对象的属性以 key-value 键值对的形式 (name : value) 来定义。属性之间由,分隔：

```javascript
var city = { id: 1, name: '北京', value: 'BeiJing' };
```

有多种定义/寻址/修改方式：

```javascript
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
});// 等价于 city[id]=1,或citys.id=1;

Object.defineProperty(city, 'name', {
  value: '北京',
  writable: true,
  configurable: true,
  enumerable: true
});// 等价于 city[name]='北京',或citys.name='北京';

Object.defineProperty(city, 'value', {
  value: 'BeiJing',
  writable: true,
  configurable: true,
  enumerable: true
});// 等价于 city[value]='BeiJing',或citys.value='BeiJing';

console.log(city); // {id: 1, name: '北京', value: 'BeiJing'}


// defineProperties批量新增或修改属性值
var city = {};
Object.defineProperties(city, {
  id: {
    value: 1，
    writable: true,
    configurable: true,
    enumerable: true
  },
  name: {
    value: '北京'，
    writable: true,
    configurable: true,
    enumerable: true
  },
  value: {
    value: 'BeiJing'，
    writable: true,
    configurable: true,
    enumerable: true
  }
});
// 等价于 直接赋值 city={id: 1, name: '北京', value: 'BeiJing'}
console.log(city); // {id: 1, name: '北京', value: 'BeiJing'}
```

> defineProperty：精确地添加或修改对象的属性这个方法允许修改默认的额外选项（或配置）。
> 一般具有配置属性：value(属性值)、writable(是否可修改)、configurable(是否可删除)、enumerable(是否可枚举)，
> 默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的，
> 默认值配置：writable：false,configurable:false,enumerable:false。

```javascript
// 小小说明
// 使用以下方法可以精确配置对象obj:
Object.defineProperty(obj,obj_name,{
  value:name_value,
  writable：false,// 默认,配置后不可直接赋值修改
  configurable:false,// 默认,配置后不可使用delete删除
  enumerable:false// 默认,配置后不可在for-in、Object.keys()中枚举
});

// 示例说明：
var obj={};
// 使用以下方法操作obj,等价于obj={name:'hello'}；
Object.defineProperty(obj,name,{
  value:'hello',
  writable：true,// 默认
  configurable:true,// 可删除，可以使用delete obj.name,来删除name属性;
  enumerable:true// 可枚举
});
```

属性有两种寻址方式：

```javascript
// 点方法
var cityName = city.name;
console.log(cityName); // 北京

// 或者方括号方法
var cityName = city[name];
console.log(cityName); // 北京
```

对象可以使用 for-in、Object.keys()来枚举其属性

```javascript
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
```

**_对象的原型、原型链、方法继承另篇总结。_**

---

#### **1 种 ES6 新增数据类型：Symbol。**

> 为什么引入 Symbol?
> ES5 的对象属性名都是字符串，这容易造成属性名的冲突。比如，你使用了一个他人提供的对象，但又想为这个对象添加新的方法（mixin 模式），新方法的名字就有可能与现有方法产生冲突。如果有一种机制，保证每个属性的名字都是独一无二的就好了，这样就从根本上防止属性名的冲突。这就是 ES6 引入 Symbol 的原因。

Symbol 是一种用来解决因对象属性名冲突，来确保每个属性名全局唯一的第 7 种新的原始数据类型。

```javascript
var s = Symbol();
console.log('s ', s, typeof s); // s  Symbol()  'symbol'
```

不可以使用 new 来定义一个 Symbol();因为 Symbol()函数生成的是一个原始数据类型的值类型而非引用类型，不是对象，所以不能添加属性。基本上，它是一种类似于字符串/数值的数据类型；

```javascript
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 === s2); // false
```

Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。相同描述的两个 Symbol,返回值依然是不相等的,同样是两个不同的 Symbol；

```javascript
var s1 = Symbol('s1');
var s2 = Symbol('s2');

console.log(s1, s2); //   Symbol(s1)   Symbol(s2)
console.log(s1.toString(), s2.toString()); // "Symbol(s1)"   "Symbol(s2)"

var _s1 = Symbol('s1');
console.log(_s1 === s1); // false
```

但是，Symbol 值可以显式转为字符串。

```javascript
var symb = Symbol('a symbol');

String(symb); // 'Symbol(a symbol)'
symb.toString(); // 'Symbol(a symbol)'
```

另外，Symbol 值也可以转为布尔值，但是不能转为数值。

```javascript
var symb = Symbol();
Boolean(symb); // true
!symb; // false

if (symb) {
  console.log('if symb be true,do somethine.'); // if symb be true,do somethine.
}

Number(symb); // Uncaught TypeError: Cannot convert a Symbol value to a number
symb + 2; // Uncaught TypeError: Cannot convert a Symbol value to a number
```

当 Symbol 作为属性名：
由于每一个 Symbol 值都是不相等的，这意味着 Symbol 值可以作为标识符，用于对象的属性名，就能保证不会出现同名的属性。这对于一个对象由多个模块构成的情况非常有用，能防止某一个键被不小心改写或覆盖。这也是 Symbol 的设计初衷之一。

```javascript
var mySymbol = Symbol();

// 第一种写法
var a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
var a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
var a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol]; // "Hello!"
```

_注意，Symbol 值作为对象属性名时，不能用点运算符。_

```javascript
var mySymbol = Symbol();
var a = {};

a.mySymbol = 'Hello!';
a[mySymbol]; // undefined
a['mySymbol']; // "Hello!"
```

在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

```javascript
let s = Symbol();

let obj = {
  [s]: function(arg) {
    // do something
  }
};

// 为了更简洁，也可以采用增强的对象写法
let obj = {
  [s](arg) {
    // do something
  }
};

obj[s](123);
```

> Symbol 的特性使得用来定义一组常量具有很好的优势，从而保证常量的值都是不一样的。

---

#### **Symbol 应用实例：消除魔术字符串**

魔术字符串：在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值。风格良好的代码，应该尽量消除魔术字符串，改由含义清晰的变量代替。

其中魔术字符串在 switch 条件语句中有大量的体现：

```javascript
function getArea(shape, options) {
  var area = 0;

  switch (shape) {
    case 'Triangle': // 魔术字符串
      area = 0.5 * options.width * options.height;
      break;
    // other shape
  }

  return area;
}

getArea('Triangle', { width: 100, height: 100 });
// 常量'Triangle' 代码块中两次出现，出现了魔术字符串，不利于修改与维护；
```

一般是把常量变成变量，即可消除魔术字符串，故上述一般作如下处理：

```javascript
var shapeType = {
  triangle: 'Triangle'
};

function getArea(shape, options) {
  var area = 0;
  switch (shape) {
    case shapeType.triangle:
      area = 0.5 * options.width * options.height;
      break;
  }
  return area;
}

getArea(shapeType.triangle, { width: 100, height: 100 });
```

不过上述的 shapeType.triangle 依然存在无法确保唯一的可能，如果使用 Symbol,就会消除这样可能，使得 switch 可以以可靠的按照设计的方式执行,以上做如下修改即可。

```diff
  var shapeType = {
-  triangle: 'Triangle'
+  triangle: Symbol()
  };

```

---

#### **对象中属性包含 Symbol 的遍历**

当 Symbol 作为对象属性名时，对象的遍历就发生了一些小的变化，该属性就不会再 for-in 、for-of,循环中出现，也不会在 Object.keys()、Object.getOwnProperNames()、JSON.stringify()中作为属性返回了。

不过，它也不是私有属性，有一个 Object.getOwnPropertySymbols 方法，可以获取指定对象的所有 Symbol 属性名。

Object.getOwnPropertySymbols 方法返回一个数组，成员是当前对象的所有用作属性名的 Symbol 值。

```javascript
var obj = {},
  a = Symbol('a'),
  b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';
obj['c'] = "I'm";
obj['d'] = 'a FE Developer!';

// 4种遍历方式的对比：

// 1.使用for-in遍历对象
console.error('for-in遍历对象：');
for (const key in obj) {
  console.log('key:' + key);
}

// 2.使用Object.keys遍历对象
var objKeys_keys = Object.keys(obj);
console.error('Object.keys()遍历对象：');
console.log(objKeys_keys); // ["c","d"]

// 3.使用Object.getOwnProperNames(),遍历对象
var objKeys_ownProper = Object.getOwnPropertyNames(obj);
console.error('Object.getOwnPropertyNames()遍历对象：');
console.log(objKeys_ownProper); // ["c","d]

// 4.使用Object.getOwnPropertySymbols,遍历对象
var objectKeys_symbol = Object.getOwnPropertySymbols(obj);
console.error('Object.getOwnPropertySymbols遍历对象：');
console.log(objectKeys_symbol); // [Symbol(a), Symbol(b)]

// 对比输出结果：
// for-in遍历对象：["c","d"]
// Object.keys遍历对象：["c","d"]
// Object.getOwnPropertyNames()遍历对象：["c","d"]
// Object.getOwnPropertySymbols遍历对象：[Symbol(a), Symbol(b)]
```

上述使用 for-in、Object.keys()、Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()对对象的遍历做了对比。那么，有没有一种方法可以可以枚举一个对象的所有的属性呢？

答案是有的：Reflect.keys();

---

#### **Reflect.keys()遍历对象属性,不会受 enumerable 影响**

什么是 Reflect？

Reflect 是一个对象，所有属性和方法都是静态的，类似于 Math()函数，提供以下静态方法：

> Reflect.apply():对一个函数进行调用操作，同时可以传入一个数组作为调用参数。和 Function.prototype.apply() 功能类似。
>
> Reflect.construct():对构造函数进行 new 操作，相当于执行 new target(...args)。
>
> Reflect.defineProperty():和 Object.defineProperty() 类似。
>
> Reflect.deleteProperty():作为函数的 delete 操作符，相当于执行 delete target[name]。
>
> Reflect.enumerate():该方法会返回一个包含有目标对象身上所有可枚举的自身字符串属性以及继承字符串属性的迭代器，for...in 操作遍历到的正是这些属性。
>
> Reflect.get():获取对象身上某个属性的值，类似于 target[name]。
>
> Reflect.getOwnPropertyDescriptor():类似于 Object.getOwnPropertyDescriptor()。
>
> Reflect.getPrototypeOf():类似于 Object.getPrototypeOf()。
>
> Reflect.has():判断一个对象是否存在某个属性，和 in 运算符 的功能完全相同。
>
> Reflect.isExtensible():类似于 Object.isExtensible().
>
> Reflect.ownKeys():返回一个包含所有自身属性（不包含继承属性）的数组。(类似于 Object.keys(), 但不会受 enumerable 影响).
>
> Reflect.preventExtensions():类似于 Object.preventExtensions()。返回一个 Boolean。
>
> Reflect.set():将值分配给属性的函数。返回一个 Boolean，如果更新成功，则返回 true。
>
> Reflect.setPrototypeOf():类似于 Object.setPrototypeOf()。

在此我们只讨论 Reflect.ownKeys();

因为它类似于 Object.keys(),但是不受 enumerable 影响，所有它会返回一个对象下面的所有属性(不包括继承属性，但包括 Symbol 属性)；

```javascript
// 我们对上述的obj,使用此方法，来遍历它的属性
var obj = {},
  a = Symbol('a'),
  b = Symbol('b');

obj[a] = 'Hello';
obj[b] = 'World';
obj['c'] = "I'm";
obj['d'] = 'a FE Developer!';

var objKeys_reflect = Reflect.ownKeys(obj);
console.log(objKeys_reflect); // ["c", "d", Symbol(a), Symbol(b)]
```

这样就遍历了一个对象下的所有属性了。

---

#### **Symbol 的一个重要方法：Symbol.for();**

在前面介绍 Symbol 在 ES6 的引入初衷时，我们提到了它是为了避免对象属性被污染，而设计的一种新的数据类型。

Symbol 作为对象的属性，优秀的解决了对象属性被污染的问题，但是这样还不够。

因为我们有时候需要在某些地方重新使用已经定义的 Symbol,所以 Symbol();就不满足不了这个需求了。

ES6 中就设计了 Symbol 的一个全局登记机制:使用 Symbol.for(key)方法会生成指定 key 的会被登记在全局环境中,在当前运行时具有全局有效性的 Symbol。同时，Symbol.keyFor 方法可以返回一个已登记的 Symbol 类型值的 key。

```javascript
// Symbol.for登记一个全局的Symbol
const symbol = Symbol.for('foobar');
Symbol.keyFor(symbol); // "foobar"

// Symbol.keyFor(),返回一个已登记的 Symbol 类型值的key
var s1 = Symbol.for('foo');
Symbol.keyFor(s1); // "foo"

var s2 = Symbol('foo');
Symbol.keyFor(s2); // undefined
```

> Symbol.for()与 Symbol()的区别：
>
> Symbol.for()会根据传入的 key 在全局作用域中注册一个 Symbol 值，如果某个 key 值从未被注册到全局作用域中，便会创建一个 Sybmol 值并根据 key 只注册到全局环境中。如果是该 key 已被注册，就会返回一个与第一次使用所创建的 Symbol 值等价的 Symbol 值。

```javascript
const symbol = Symbol.for('foo');
const obj = {};
obj[symbol] = 'bar';
// ...

const anotherSymbol = Symbol.for('foo');

console.log(symbol === anotherSymbol); // true
console.log(obj[anotherSymbol]); // bar
```

这在大型的系统开发中可以用于一些全局的配置数据中或者用于需要多处使用的数据中。

---

#### **各类型之间的转换**

> String(value)、value.toString()、Boolean(value)、Number(value)、parseInt(value) 可以把对应的 value 转化为相应的类型。

##### **转化为字符串**

两种方式将其他类型可以转化为字符串，不过稍有区别。

- String()方法
- toString() 方法

  1.使用 String():将其它对象转化为字符串,可以被认为是一种更加安全的做法，虽然该方法底层使用的也是 toString() 方法，但是针对 null/undefined/symbols，String() 方法会有特殊的处理

```javascript
// Number-->String
console.log(String(10)); // '10'
console.log(String(0)); // '0'
console.log(String(1)); // '1'
console.log(String(NaN)); // 'NaN'

// Boolean --> String
console.log(String(true)); // 'true'
console.log(String(false)); // 'false'

// Undefined --> String
console.log(String(undefined)); // 'undefined'

// Null --> String
console.log(String(null)); // 'null'

// Object-->String
console.log(String({a:1,b:"hello"})); // '[object Object]'

// String-->Symbol
console.log(String(Symbol('foo'));// 'Symbol(foo)'
```

2.使用 toString():会调用该类型下的 toString()方法，但是对于 Undefined、Null 类型的会抛出异常。对于 Object 类型的会返回该对象的原始字符串表示：'[object,Object]',与 JSON.stringify(),返回结果有别。

**Number 使用 toString(),有两种模式：**

- **1.默认模式 toString()**
- **2.基模式 toString(radix),只对于 Number 有效**

采用默认模式:直接使用 toString() 方法会输出的字符串型的数字值（无论是整数、浮点数还是科学计数法）

```javascript
// 默认模式
var iNum1 = 10,
  iNum2 = 10.0,
  iNum3 = 10.12;
console.log(iNum1.toString()); //输出 "10"
console.log(iNum2.toString()); //输出 "10"
console.log(iNum3.toString()); //输出 "10.12"
```

采用基模式：使用 toString(radix) 可以指定传入不同的基数 radix 输出该数字对应基数的字符串型，例如二进制的基是 2，八进制的基是 8，十进制的基是 10，十六进制的基是 16。radix 范围 2 ~ 36 之间的整数，超出返回抛出异常, 默认模式是基数为 10 的基模式，默认可以不传入参数。

```javascript
// 基模式
var iNum = 10;
console.log(iNum.toString(2)); //输出 "1010"
console.log(iNum.toString(8)); //输出 "12"
console.log(iNum.toString(10)); //输出 "10" 等价于：iNum.toString();
console.log(iNum.toString(16)); //输出 "A"

// 基数超出范围，抛出异常
console.log(iNum.toString(0)); // Uncaught RangeError: toString() radix argument must be between 2 and 36
console.log(iNum.toString(1)); // Uncaught RangeError: toString() radix argument must be between 2 and 36
console.log(iNum.toString(37)); // Uncaught RangeError: toString() radix argument must be between 2 and 36

// NaN使用基模式指定基数无效，结果返回'NaN'
console.log(NaN.toString(2)); //输出 "NaN"
console.log(NaN.toString(8)); //输出 "NaN"
console.log(NaN.toString(10)); //输出 "NaN"
console.log(NaN.toString(16)); //输出 "NaN"
```

> 对于常量，数字.toString(),数字为整数时，会报错，因为默认会把后面的.解析成整数的一部分，小数.toString()则正常，我们使用数字..toString()、(数字).toString()则输出正常,一般使用后者，即可解决该问题；
> 对于变量则不会有上述问题。

```javascript
console.log(10.toString()); // Uncaught SyntaxError: Invalid or unexpected token
console.log(10.67867.toString()); // '10.67867'  小数.toString(),不报错
console.log(10.67867..toString()); // Uncaught SyntaxError: Unexpected token '.'
console.log(10..toString()); // '10'   虽然同样可以输出结果，一般不使用，以免引起不可控异常

// 一般使用(数字).toString()的写法，避免.解析引起的异常
console.log((10).toString()); // '10'
console.log((10.67867).toString()); // '10.67867'
```

**Boolean 使用 toString()，等价于 String()**

```javascript
console.log(true.toString()); // 'true'
console.log(false.toString()); // 'false'
```

**Null、Undefined 使用 toString()，会抛出异常，与 String()有区别**

```javascript
console.log(null.toString()); // Uncaught TypeError: Cannot read property 'toString' of null

console.log(undefined.toString()); // Uncaught TypeError: Cannot read property 'toString' of undefined
```

**Object 使用 toString(),等效于 String()**

```javascript
console.log({ a: 1, b: 'hello' }.toString()); // '[object Object]'
```

**Symbol 使用 toString(),等效于 String()**

```javascript
console.log(Symbol('foo').toString()); // 'Symbol(foo)'
```

##### **转换为 Number**

ECMAScript 提供了两种把非数字的原始值转换成数字的方法，即 parseInt() 和 parseFloat()。

前者把值转换成整数，后者把值转换成浮点数。只有对 String 类型调用这些方法，它们才能正确运行；对其他类型返回的都是 NaN。

当然作为 JS 的全局对象 Number(value)，也可以把对象的值转换为数字。

常用方法：

- Number();
- parseInt();
- parseFloat();

Number():把对象的值转换为数字，对于非数字字符串会特殊处理，与后两种方法有别。

```javascript
// Number(value)
console.log(Number('a')); // NaN
console.log(Number('10')); // 10
console.log(Number('')); // 0
console.log(Number('0')); // 0
console.log(Number('1')); // 1
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
console.log(Number({ a: 1, b: 'hello' })); // NaN
console.log(Number(Symbol('foo'))); // Uncaught TypeError: Cannot convert a Symbol value to a number
```

parseInt(string, [radix]):可解析一个字符串，并返回一个整数。

> radix 表示要解析的数字的基数。该值介于 2 ~ 36 之间。
>
> 传入该值按照指定的基数解析，为 0 或不传入会根据 string 来判断数字的基数
>
> 如果它以 “0x” 或 “0X” 开头，将以 16 为基数。
>
> 如果该参数小于 2 或者大于 36，则 parseInt() 将返回 NaN。
>
> 举例，如果 string 以 "0x" 开头，parseInt() 会把 string 的其余部分解析为十六进制的整数。
>
> 如果 string 以 0 开头，那么 ECMAScript v3 允许 parseInt() 的一个实现把其后的字符解析为八进制或十六进制的数字。
>
> 如果 string 以 1 ~ 9 的数字开头，parseInt() 将把它解析为十进制的整数。
>
> 如果字符串的第一个字符不能被转换为数字，那么 parseFloat() 会返回 NaN。
>
> 如果中间出现不能解析为数字的，会停止解析，返回已解析的结果。
>
> 首尾出现空格会自动忽略。

> 正常解析为数值:

```javascript
console.log(parseInt('0')); // 0
console.log(parseInt('1')); // 1
console.log(parseInt('10')); // 10
console.log(parseInt('010')); // 10 或 8  按照10进制或者是8进制解析，结果不定,但是控制台一般都是输出10；

console.log(parseInt('0xa')); // 10   按照16进制解析,16^0*10 =10；
console.log(parseInt('0Xa')); // 10   按照16进制解析,16^0*10 =10；
console.log(parseInt('0xf')); // 15   按照16进制解析,16^0*15 =15；
console.log(parseInt('0x0f')); // 15   按照16进制解析,16^0*15 =15；
console.log(parseInt('0x1f')); // 31   按照16进制解析 16^1*1 + 16^0*15 =31；
console.log(parseInt('0xef')); // 239  按照16进制解析 16^1*14 + 16^0*15 =239；
```

> 指定基数正常解析:

```javascript
console.log(parseInt('10', 2)); // 2   按照2进制解析,按照8421码的速读，为2；
console.log(parseInt('010', 2)); // 2   按照2进制解析,忽略0；

console.log(parseInt('1100', 2)); // 12   按照2进制解析,按照8421码的速读，为8+4=12；
console.log(parseInt('11', 2)); // 3   按照2进制解析,按照8421码的速读，为2+1=3；
console.log(parseInt('11111', 2)); // 31   按照2进制解析,2^4*1 + 2^3*1 + 2^2*1 + 2^1*1 + 2^0*1=31；

console.log(parseInt('10', 8)); // 8   按照8进制解析,8^1*1 + 8^0*0 =8；
console.log(parseInt('010', 8)); // 8   按照8进制解析,忽略进制标识符0，8^1*1 + 8^0*0 =8；

console.log(parseInt('199', 10)); // 199   按照10进制解析；
console.log(parseInt('0199', 10)); // 199   按照10进制解析,忽略0；

console.log(parseInt('a', 16)); // 10   按照16进制解析，16^0*10 =10；
console.log(parseInt('0xa', 16)); // 10   按照16进制解析,忽略进制标识符0x，16^0*10 =10；
```

> 超出基数解析:

```javascript
console.log(parseInt('10', 0)); // 10   按照10进制解析；
console.log(parseInt('010', 0)); // 10   按照10进制解析；

console.log(parseInt('10', 1)); // NaN
console.log(parseInt('010', 1)); // NaN

console.log(parseInt('10', 68)); // NaN
console.log(parseInt('010', 68)); // NaN
```

> 特殊值解析:

```javascript
console.log(parseInt('a')); // NaN
console.log(parseInt('')); // NaN
console.log(parseInt(true)); // NaN
console.log(parseInt(false)); // NaN
console.log(parseInt(undefined)); // NaN
console.log(parseInt(null)); // NaN
console.log(parseInt({ a: 1, b: 'hello' })); // NaN
console.log(parseInt(Symbol('foo'))); // Uncaught TypeError: Cannot convert a Symbol value to a number
```

> 首尾空格解析:

```javascript
console.log(parseInt(' 10')); // 10
console.log(parseInt('10 ')); // 10
console.log(parseInt(' 10 ')); // 10
```

> 遇阻解析:

```javascript
console.log(parseInt('a10')); // NaN
console.log(parseInt('1a0')); // 1
console.log(parseInt('10a')); // 10
```

parseFloat():将它的字符串参数解析成为浮点数并返回。如果在解析过程中遇到了正负号（+ 或 -）、数字 (0-9)、小数点，或者科学记数法中的指数（e 或 E）以外的字符，则它会忽略该字符以及之后的所有字符，返回当前已经解析到的浮点数。同时参数字符串首位的空白符会被忽略。

> 如果参数字符串的第一个字符不能被解析成为数字，则 parseFloat 返回 NaN。

```javascript
// parseFloat()
console.log(parseFloat('10.322')); // 10.322
console.log(parseFloat('0')); // 0
console.log(parseFloat('0x1')); // 0
console.log(parseFloat('0xf')); // 0

console.log(parseFloat(Math.PI)); // 3.141592653589793

console.log(parseFloat('a')); // NaN
console.log(parseFloat('')); // NaN
console.log(parseFloat(true)); // 1
console.log(parseFloat(false)); // 0
console.log(parseFloat(undefined)); // NaN
console.log(parseFloat(null)); // NaN
console.log(parseFloat({ a: 1, b: 'hello' })); // NaN
console.log(parseFloat(Symbol('foo'))); // Uncaught TypeError: Cannot convert a Symbol value to a number
```

##### 转换为 Boolean

一般使用 JS 全局对象 Boolean()，可以把指定类型转换为 Boolean 型。

```javascript
// Boolean(value)
console.log(Boolean('a')); // true
console.log(Boolean('')); // false
console.log(Boolean('10')); // true
console.log(Boolean(10)); // true
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
var a;
console.log(Boolean(a)); // false
console.log(Boolean(null)); // false
console.log(Boolean({ a: 1, b: 'hello' })); // true
console.log(Boolean(Symbol('foo'))); // true
```

同样的，取反运算符!、!!也可以把特定类型的转换为 Boolean 型。

```javascript
console.log(!''); // true
console.log(!!''); // false

console.log(!'a'); // false
console.log(!!'a'); // true

console.log(!0); // true
console.log(!!0); // false

console.log(!!1); // true
console.log(!1); // false

console.log(!undefined); // true
console.log(!!undefined); // false

console.log(!null); // true
console.log(!!null); // false

console.log(!{ a: 1, b: 'hello' }); // false
console.log(!!{ a: 1, b: 'hello' }); // true

console.log(!Symbol('foo')); // false
console.log(!!Symbol('foo')); // true
```

##### **关于各类型之间的隐式转换**

上述的类型转换都是我们主动转换的，属于显式转换，但是在 js 的运算中，当运算符在运算时，如果两边数据不统一，CPU 就无法计算，这时我们编译器会自动将运算符两边的数据做一个数据类型转换，转成一样的数据类型再计算，这种无需程序员手动转换，而由编译器自动转换的方式就称为隐式转换。

常见的隐式转换：

- 字符串连接
- 比较运算
- 算术运算
- 特殊表达式

字符串连接：连接之前会将非字符串转换为字符串，再做连接运算(Symbol 值除外，会抛出异常)；

```javascript
console.log('a' + 10); // 'a10'
console.log('a' + 0); // 'a0'
console.log('a' + 1); // 'a1'
console.log('a' + NaN); // 'aNaN'

console.log('a' + true); // 'atrue'
console.log('a' + false); // 'afalse'
console.log('a' + undefined); // 'aundefined'
console.log('a' + null); // 'anull'

console.log('a' + { a: 1, b: 'foo' }); // 'a[object Object]'
console.log('a' + Symbol('foo')); // Uncaught TypeError: Cannot convert a Symbol value to a string
```

比较运算:'>'、'<' 、'==',会调用 Number()方法，转换数值后再做比较。

'==='不会隐式转换类型，同时比较数值与其类型。

> 特列：
> 字符串直接的大小比较：从首位逐个对比其对应的 Unicode 编码值的大小；
> 可以使用 charCodeAt()获取字符串中某个字符的 Unicode 值
> null===null 为 true，任何两个 null 都是相等的
> NaN===NaN 为 false，任何两个 NaN 都是不相等的
>
> undefined==null 为 true

```javascript
console.log('a' > 'b'); // false 比较Unicode值,97>98
console.log('a' < 10); // false
console.log('a' < 10); // false
console.log('a' == 10); // false
console.log('a' === 10); // false

console.log('5' > '10'); // true   按照字符串比较来判断

console.log('10' > 10); // fasle
console.log('10' < 10); // fasle
console.log('10' == 10); // true
console.log('10' === 10); // false

// 特殊比较
console.log(null === null); // true
console.log(undefined === undefined); //true
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false

console.log(undefined == null); // true
console.log(undefined === null); // false
console.log(NaN == undefined); //false
console.log(NaN == null); // false
```

算术运算：会隐式的使用 Number()转换为数值型后，再做运算。

> 特例：
> 非数字的字符串与数值型数字相加，不会使用此规则，会使用字符串连接规则；
> Object 与数字相加，不会使用此规则，会使用字符串连接规则；
> 数组与数字相加，不会使用此规则，会使用字符串连接规则；
> Symbol 值参与算术运算，会抛出异常。

```javascript
// 加运算 +
console.log('a' + 10); //  'a10'   特例,直接使用字符串连接原则
console.log('10' + 10); //  20   10 + 10
console.log(true + 10); // 11    1 + 10
console.log(false + 10); // 10    0 + 10
console.log(undefined + 10); // NaN    NaN + 10
console.log(null + 10); // 10    0 + 10
console.log({ a: 1, b: 'hello' } + 10); // '[object Object]10'  特例：使用了字符串连接原则
console.log(['a', 'b'] + 10); // 'a,b10'  特例：使用了字符串连接原则
console.log(Symbol('foo') + 10); // Uncaught TypeError: Cannot convert a Symbol value to a number

// 减运算 -
console.log('a' - 10); //  NaN
console.log('10' - 10); //  0   10 - 10
console.log(true - 10); // -9    1 - 10
console.log(false - 10); // -10    0 - 10
var a;
console.log(a - 10); // NaN    NaN - 10
console.log(null - 10); // -10    0 - 10
console.log({ a: 1, b: 'hello' } - 10); // NaN
console.log(['a', 'b'] - 10); // NaN
console.log(Symbol('foo') - 10); // Uncaught TypeError: Cannot convert a Symbol value to a number

//  除运算符 /
console.log('a' / 10); //  NaN
console.log('10' / 10); //  1
console.log(true / 10); // 0.1
console.log(false / 10); // 0
console.log(undefined / 10); // NaN
console.log(null / 10); // 0
console.log({ a: 1, b: 'hello' } / 10); // NaN
console.log(['a', 'b'] / 10); // NaN
console.log(Symbol('foo') / 10); // Uncaught TypeError: Cannot convert a Symbol value to a number

//  取余运算符 %
console.log('a' % 10); //  NaN
console.log('10' % 10); //  0
console.log(true % 10); // 1
console.log(false % 10); // 0
console.log(undefined % 10); // NaN
console.log(null % 10); // 0
console.log({ a: 1, b: 'hello' } % 10); // NaN
console.log(['a', 'b'] % 10); // NaN
console.log(Symbol('foo') % 10); // Uncaught TypeError: Cannot convert a Symbol value to a number

// +=  -=  /=  %=  也是在上述规则上，做运算
```

特殊表达式: +字符串、-字符串、会把当前字符串转换为 Number，等价于 Number(字符串)，然后根据+/-对应取正负。

```javascript
console.log();

console.log(+'a'); //  NaN
console.log(+'10'); //  10
console.log(+true); // 1
console.log(+false); // 0
console.log(+undefined); // NaN
console.log(+null); // 0
console.log(+{ a: 1, b: 'hello' }); // NaN
console.log(+['a', 'b']); // NaN
console.log(+Symbol('foo')); // Uncaught TypeError: Cannot convert a Symbol value to a number

console.log(-'a'); //  NaN
console.log(-'10'); //  -10
console.log(-true); // -1
console.log(-false); // -0    与0等价：-false===0 为true
console.log(-undefined); // NaN
console.log(-null); // -0     与0等价: -null===0 为true
console.log(-{ a: 1, b: 'hello' }); // NaN
console.log(-['a', 'b']); // NaN
console.log(-Symbol('foo')); // Uncaught TypeError: Cannot convert a Symbol value to a number
```

**总结：**

1. JavaScript 主要有 7 种原始数据类型：
2. 3 种基本数据类型：String、Number、Boolean，属于值类型
3. 2 种特殊数据类型：Undefined、Null;
4. 1 种引用数据类型：Object;
5. 1 种 ES6 新增数据类型：Symbol。
6. Symbol 应用实例：消除魔术字符串
7. 对象中属性包含 Symbol 的遍历
8. Reflect.keys()遍历对象属性,不会受 enumerable 影响
9. Symbol 的一个重要方法：Symbol.for();
10. 各类型之间的转换
    1. 转化为字符串
    2. 转换为 Number
    3. 转换为 Boolean
    4. 关于各类型之间的隐式转换

上述汇总了以上列表内容，信息较多，如有纰漏，欢迎指点。
