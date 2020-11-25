// function foo(a,b) {
//     return a * b;
// }
// console.log(foo.length)
// alert(1)
// class Subject {
//     constructor() {
//         this.sate  = 0
//         this.observers = [];
//     }
//     getState() {
//         return 
//     }

const { connect } = require("http2")
const { callbackify } = require("util")

// }
let b = 1
const a = () => {console.log(this.b)}
const c = {
    b: 2,
    d: function (){
        return () => {console.log(this.b)}
    }
}
// a();
// e = c.d()
const f = c.d
console.log(f()())
f()()

// function.prototype.mycall = function(context) {
//     if() {

//     }
//     context = context || window;
//     context.fn = this;
//     const args = [...arguments].slice(1);
//     const result = context.fn(...args);
//     delete context.fn
//     return result
// }
// Function.prototype.myApply = function(context) {
//     context = context || window
//     context.fn= this;
//     let result 
//     if(arguments[1]) {
//         result = context.fn(...arguments[1])
//     }else {
//         result = context.fn()
//     }
//     delete context.fn;
//     return result
// }
// funtction flatten(arr) {
//     return arr.reduce((reslut,item) => {

//     })
// }

function fn (str){
    let numToChars = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];//键盘0-9数字对应的字母映射
    //step1.如果没有传递数字
    if(str.length<1) return [];
    //step2.如果值传递了一个数字,将单个数字对应的字母变成数组
    if(str.length<2) return numToChars[str[0]].split('');
    
    //step3.如果传递数字大于两位数
    let num = str.split('');//将传递过来的数字变成数组，如"34",变成['3','4']
    let chars = [];//存储每个数字对应的字母
    num.forEach(item=>{
      chars.push(numToChars[item]); //['def','ghi']
    })
    //定义一个两两组合的函数，用于递归
    let comb = (arr)=>{
      // 临时变量用来保存前两个组合的结果
      let tmp = []
      for(let i =0;i<arr[0].length;i++){
        for(let j=0;j<arr[1].length;j++){
          tmp.push(`${arr[0][i]}${arr[1][j]}`);
        }
      }
      arr.splice(0,2,tmp);
      //递归
      if(arr.length>1){
        comb(arr);
      }else{
        return arr;
      }
    }
    return comb(chars)[0];
  }
  fn('23')
  console.log(fn('23'))


//   new的实现原理
// function new (constract,...args) {
//     var obj = {};
//     obj.__proto__ = constract.prototype;
//     const result = constact.apply(obj,args);
//     return result instanceof Object ? result : obj
// }

// function new (contract,...args) {
//     const obj = {};
//     obj.__proto__ = contract.prototype;
//     const result = constract.apply(obj,...args);
//     return result instanceof Object ?  result:obj
// }

// call的实现
// Function.prototype.myCall =  function(context) {
//     if(typeof this !== 'function')  {
//         return
//     }
//     context = context || window;
//     connect.fn = this;
//     const args = [...arguments].slice(1);
//     const result = context.fn(...args)
//     delete context.fn;
//     return result
// }

// // call的实现
// Function.prototype.myCall = function(context) {
//     if() {

//     }
//     context = connect || window;
//     context.fn = this;
//     const args = [...arguments].slice(1);
//     const result = context.fn(...args);
//     delete context.fn
//     return result
// }


// apply 

// Function.apply.myApply = function(context) {
//     context = context || window;
//     connect.fn = this;
//     let result 
//     if(arguments) {
//         result = connect.fn(...arguments[1])
//     }else {
//         result = connect.fn()
//     }
//     delete connect.fn
//     return result
// }

// bind

Function.prototype.myBind = function(context) {
 const _this = this;
 const args = [...arguments].splice(1);
 return function F() {
     if(this instanceof F) {
         return new _this(...args,...arguments)
     }
     return _this.apply(connect)
 }

}

// function $on(name,fn) {
//     // 先检查eventList中有没有创建过
//     // 如果没有，就把这个事件push进去
//     if(!eventList[name]) {
//         eventList[name] = []
//     }
//     eventList[name].push(fn)
// }
// function $once(type,fn) {
//    let key = type + '$once'
//    if(!eventList[type]) {
//     eventList[type] = fn
//    } else {
//        throw new Error()
//    }
// }

// function $emit(type) {
//     let args = [...arguments][1]
//     // let onFunction = eventList[type]
//     let cbs = eventList[type];
//     if(cbs) {
//         cbs.forEach(cb => cb.apply(this,args))
//     }
// }

// function $off(type,fn) {
//  let fns = eventList[type];
//  if(!fns) {
//     return
//  }
//  if(!fn) {
//      fns && (fns.length = 0)
//  }else {

//  }
// }

// function ajax(method,url,success,fail) {
//     let request = new XMLHttpRequest();
//     request.open(method,url);
//     request.onreadystatechange = () => {
//         if(request.readyState == 4) {
//             if(request.status >= 200 && request.status < 300) {
//                 success.call(undefined,request.responseText)
//             }else {
//                 fail.call(undefined,request)
//             }
//         }
//     }
//     request.send()
// }

// 随机生成字符串
// function randomWord() {

// }
// 洗牌算法
// function shuffle(arr) {
//     var l = arr.length;
//     var index, temp
//     while (l > 0) {
//         index = Math.floor(Math.random() * l);
//         temp = arr[l-1];
//         arr[l-1] = arr[index];
//         arr[index] = temp;
//         l--
//     }
//     return arr
// }

// // 深拷贝
// function deepCopy(obj) {
//     let newObj = null;
//     if(typeof obj == 'object' && obj !== null) {
//         newObj = obj instanceof Array ? [] : {};
//         for(let key in obj) {
//             newObj[key] = deepCopy(obj[key])
//         }
//     }else {
//         newObj = obj
//     }
//     return newObj
// }
// // 快速排序
// function partition(A,lo,hi) {
//     const pivot = A[hi-1];
//     let i = lo, j = hi - 1;
//     while(i !== j) {
//         if(A[i] <= pivot) {
//             i++
//         }else {
//             swap(A,i, --j)
//         }
//     }
//     swap(A,j,j-1);
//     return j
// }
// function qSort(A,lo=0,hi = A.length) {
//     if(hi-lo <= 1) {
//         return
//     }
//     const p = partition(A,lo,hi);
//     qSort(A,lo,p)
//     qSort(A,p+1,hi)
// }
// // 二叉树的深度
// function deepPath(tree) {
//     if(tree == null) {
//         return 0
//     }else {
//         let left = deepPath(tree.left);
//         let right = deepPath(tree.right);
//         return 1 + Math.max(left,right)
//     }
// }

// function mySetInterval(fn,millset) {
//     function interval() {
//         setTimeout(interval,millset);
//         fn()
//     }
//     setTimeout(interval,millset)
// }


// // 原型继承
// function Person(name) {
//     this.name = name
// }
// function Mann() {

// }
// Mann.prototype = new Person()


// // 构造继承
// function Man() {
//     Person.apply(this,arguments)
// }

// // 组合继承
// function Person1() {

// }
// function Man() {
//     Person.apply(this.arguments)
// }
// Man.prototype = new Person()

// function Person2() {

// }
// function Man1() {
//     Person.apply(this,arguments)
// }
// Man.prototype = Object.create(Person.prototype)

// 解析url
function parse(str) {
    return str.split('&').reduce((o,kv) => {
        const [key,value] = kv.split('=');
        if(!value) return o
        // o[key] = value;
        
        deep_set(o,key.split(/[\[\]]/g).filter(x=>x),value)
        return o
    },{})
}
// 针对特殊情况的解析
function deep_set(o,path,value) {
    let i = 0
    for(; i < path.length-1;i++) {
        if(o[path[i]] === undefined) {
            // 判断是否是数组
            if(path[i+1].match(/^\d+$/)) {
                o[path[i]] = []
            }else {
                o[path[i]] = {}
            }
            o[path[i]] = {}
        }
        o = o[path[i]]
    }
    o[path[i]] = value
}
// 写了这个深层的递归判断后呢，对象的就已经解决了，但是数组的还米有解决
console.log(parse('a=1&b=2&c=5'))
console.log(parse('a&b&c'))
console.log(parse('a[name]=fox&a[age]=10&b=hh'))
console.log(parse('color=Deep%20Blue'))
console.log(parse('a[0]=11&a[1]=12'))
// { a: '1', b: '2', c: '5' }
// {}
// { a: { name: 'fox', age: '10' }, b: 'hh' }
// { color: 'Deep%20Blue' }
// { a: { '0': { ' ': ' 11 ' } }, ' a': { '1': { ' ': ' 12' } } }



// 选择排序
// function choose(arr) {
//     let choose = arr[0];
//     let minIndex = 0;
//     for(let i = 0; i < arr.length - 1; i++) {
//         minIndex = i;
//         for(j=i+1; j < arr.length; j++) {
//             if(arr[j] < arr[minIndex]) {
//                 minIndex = j
//             }
//         }
//         swap(arr,i,minIndex)
//     }
//     return arr
// }

// function partition(A,lo,hi) {
//     const pivot = A[hi-1];
//     let i = lo, j = hi -1;
//     while(i !== j) {
//         if(A[i] <= pivot){
//             i++
//         }else {
//             swap(A,i,--j)
//         }
//     }
//     swap(A,j,j-1);
//     return j
// }
// function qSort(A,lo=0,hi = A.length) {
//     if(hi-lo <= 1) {
//         return 
//     }
//     const p = partition(A,lo,hi)
//     qSort(A,lo,p);
//     qSort(A,p,hi)
// }

// 求组合问问题
// function combination(s,k) {
//     if(k ===0 || s.length ===k) {
//         return [s.splice(0,k)]
//     }
//     const  [first,...others] = s
//     let r = [];
//     r = r.concat(combination(others,k-1)).map(c=>[first,...c])
// }

// 继承问题
function Person() {

}
Person.prototype.getName = function() {
  console.log('lll')
}

function Man() {

}
Man.prototype = new Person();
let man = new Man()
console.log(Man().prototype)