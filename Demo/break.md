## break 与 continue 区别
### 1. break 语句
* break: 跳出循环，不会继续执行该循环之后的代码
* break 可以使用于循环和 switch 等
> 
```
 function Bre() {
      var x = '';        
      for (var i = 0; i < 10; i++) {
        if (i == 4) {        //循环会跳出在4这里
          break;
        }
        x = x + '数字是' + i + '<br/>'
      }
      document.write(x);
    }
    Bre();
```


### 2. continue 语句
* continue: 跳过当前循环，会继续执行该循环之后的代码
* continue 只能用于循环的代码块
> 
```
 function Cont() {
      var x = '';       
      for (var i = 0; i < 10; i++) {
        if (i == 4) {        //循环会跳过4这个数
          continue;
        }
        x = x + '数字是' + i + '<br/>'
      }
      document.write(x);
    }
    Cont();
```

