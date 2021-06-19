## 原型与原型链
### 一.原型
1. 隐式原型：__ proto__
2. 显式原型：prototype
3. 所有引用类型（函数，数组，对象）都拥有__proto__属性
4. 所有函数除了有_proto_属性之外还拥有prototype属性
5. 原型对象：每创建一个函数，该函数会自动带有一个prototype属性，该属性是一个指针，指向了一个对象，我们称之为原型对象
### 二.原型的作用
  - 原型也是一个对象，原型的作用，则是实现对象的继承。(数据共享)
  - 当调用某种方法或查找某种属性时，首先会在自身调用和查找，若自身并没有该属性或方法，则会去它的__proto__属性中调用查找，也就是它构造函数的prototype中调用查找。
### 三.示例
   - 实例对象a的隐式原型指向它构造函数的显式原型，指向的意思是恒等于
  > 
  ```
    function A() { }          // 函数
    var a = new A();          // 对象
    console.dir(A.prototype)  // 显式原型
    console.log(a.__proto__)  // 隐式原型
    console.log(a.__proto__ === A.prototype);  //true
  ```
  - 构造函数：每一个实例对象，都有自己的属性和方法的副本。这不仅无法做到数据共享，也是极大的资源浪费。

  ```
  function DOG(name) {
      this.name = name;
      this.species = '犬科';
    }
    var dogA = new DOG('大毛');
    var dogB = new DOG('二毛');
    dogA.species = '猫科';
    alert(dogA.species);
    alert(dogB.species); // 显示"犬科"，不受dogA的影响
  ```
  - prototype属性的引入：species属性放在prototype对象里，是两个实例对象共享的。只要修改了prototype对象，就会同时影响到两个实例对象。
  ```
   function DOG(name) {
      this.name = name;
    }
    DOG.prototype = { species: '犬科' };
    var dogA = new DOG('大毛');
    var dogB = new DOG('二毛');
    alert(dogA.species); // 犬科
    alert(dogB.species); // 犬科

    DOG.prototype.species = '猫科';
    alert(dogA.species); // 猫科
    alert(dogB.species); // 猫科
  ```
  ### 四.原型链
  - 当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链。

