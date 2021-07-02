### 一. 变量名
 `使用驼峰法来命名(camelCase)`
```
 var firstName = "John";
 var lastName = "Doe";
```
----------
### 二. 空格与运算符
`通常运算符 ( = + - * / ) 前后需要添加空格`
```
var x = y + z;
var values = ["Volvo", "Saab", "Fiat"];
```
---------
### 三. 代码缩进
`通常使用 4 个空格符号来缩进代码块`
```
function Num(a) {
    return (5 / 9) * (a - 32);
}
```
---------
### 四. 语句规则
`简单语句：一条语句通常以分号作为结束符`
```
var values = ["Volvo", "Saab", "Fiat"];
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
`复杂语句`  
   * 将左花括号放在第一行的结尾 
   * 左花括号前添加一空格
   * 将右花括号独立放在一行
   * 不要以分号结束一个复杂的声明
  
1. 函数
```   
function Num(a) {
    return (5 / 9) * (a - 32);
}
```
2. 循环
```   
for (i = 0; i < 5; i++) {
    x += i;
}
```
3. 条件语句
```   
if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
```
---------
### 五. 对象规则
`对象定义的规则`  
  * 将左花括号与类名放在同一行
  * 冒号与属性值间有个空格
  * 字符串使用双引号，数字不需要
  * 最后一个属性-值对后面不要添加逗号
  * 将右花括号独立放在一行，并以分号作为结束符号
```
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
```
```
var person = {name:"John",  age:50, eyeColor:"blue"};
```
`每行代码字符小于 80 :建议在 运算符或者逗号后换行`
```
document.getElementById("demo").innerHTML =
    "Hello word."
```
---------