## map set
### 1. set
* set对象类似于数组，且成员的值都是唯一的
* Set 实例属性:
  1. Set.prototype.constructor：构造函数，默认就是Set函数。
  2. Set.prototype.size：返回Set实例的成员总数。
* Set 实例方法:分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。
  1. add(value)：添加某个值，返回 Set 结构本身。
  2. delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
  3. has(value)：返回一个布尔值，表示该值是否为Set的成员。
  4. clear()：清除所有成员，没有返回值。
* 遍历操作 Set 结构的实例有四个遍历方法，可以用于遍历成员:
  1. keys()：返回键名的遍历器
  2. values()：返回键值的遍历器
  3. entries()：返回键值对的遍历器
  4. forEach()：使用回调函数遍历每个成员
> 
```
const mySet = new Set([1, 2, 3, 4, 4])
  alert([...mySet]); // [1, 2, 3, 4]
```

### 2.map 
* Map 对象是键值对集合，和 JSON 对象类似，但是 key 不仅可以是字符串还可以是对象
* size: 属性返回 Map 结构的成员总数

* 实例方法（基本上同Set）：
  1. set(key, value): 返回的是当前的Map对象，因此可以采用链式写法。
  2. get(key)：读取key对应的键值，如果找不到key，返回undefined。
  3. has(key)：返回一个布尔值，表示该值是否为Map的key对应的键值。
  4. delete(key)：删除某个键值，返回一个布尔值，表示删除是否成功。
  5. clear()：清除所有成员，没有返回值。

* 遍历方法 Map 结构原生提供三个遍历器生成函数和一个遍历方法。
  1. keys()：返回键名的遍历器。
  2. values()：返回键值的遍历器。
  3. entries()：返回所有成员的遍历器。
  4. forEach()：遍历 Map 的所有成员。