### 同步编程&&异步编程
  1. 概念  
     * 同步（Synchronous, sync）:同步不意味着所有步骤同时运行，而是指步骤在一个控制流序列中按顺序执行
     *  异步（Asynchronous, async）:一个异步过程的执行将不再与原有的序列有顺序关系。  
     * await 必须在 async function 内使用，否则会提示语法错误
  
  - async 函数执行结果都是Promise
  - await 的使用时 必须在async 函数中
