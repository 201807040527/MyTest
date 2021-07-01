### 一. 运算符
> 
    1. = 用于给变量赋值  
    2. == 等于
    3. === 绝对等于（值和类型均相等）
    4. + 运算符用于把文本值或字符串变量加起来（连接作用）
-------------
### 二. 浮点型数据
  ```
    var x=0.1
    var y=0.2
    var z=x+y   // z的结果为 0.30000000000000004 
  ```
  `解决方法`
  ```
  var x=0.1
  var y=0.2
  var z = (x * 10 + y * 10) / 10;  // z的结果为 0.3
  ```
-------------
### 三. 字符串分行
 ```
  var x =
  "Hello World!";
 ```
 `字符串断行需要使用反斜杠(\)`
 ```
  var x = "Hello \
  World!";
 ```
-------------
### 四.return 语句
 ```
   function myFunction(a) {
      var
      power = 10; 
      return a * power;  
   }
 ```
 ` return 是一个完整的语句`
 ```
  function myFunction(a) {
    var           // var是一个不完整的语句
    power = 10;   // JavaScript 将尝试读取第二行的语句
    return;       // 分号结束，返回 undefined
    a * power;
}
 ```
 ------------
 ### 五.数组索引
 ```
 var person = [];
 person[0] = "John";
 person[1] = "Doe";
 person[2] = 46;
 var x = person.length;   // person.length 返回 3
 var y = person[0];       // person[0] 返回 "John"
 ```
 `如果使用名字作为索引,数组的方法及属性将不能再使用`
 ```
 var person = [];
 person["firstName"] = "John";
 person["lastName"] = "Doe";
 person["age"] = 46;
 var x = person.length;         // person.length 返回 0
 var y = person[0];             // person[0] 返回 undefined
 ```
------------
### 六.定义数组元素，最后不能添加逗号
```
var colors = [5, 6, 7,]; //这样数组的长度可能为3 也可能为4。
```
------------
### 七.Undefined 不是 Null
>
    1. 在JavaScript中, null用于对象, undefined用于变量，属性和方法。
    2. 对象只有被定义才有可能为 null，否则为 undefined。

  `需要先使用 typeof 来检测对象是否已定义`
  ```
  if (typeof myObj !== "undefined" && myObj !== null) 
  ```