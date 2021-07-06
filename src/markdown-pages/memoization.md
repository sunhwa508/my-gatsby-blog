---
title: "Memoization, Currying"
date:  "2021-01-26"
description: "Memoization ︎🤓"
tags: ["javascript"]
---
 ## Memoization ? 
 > memoization is a specific form of caching

```javascript
function addTo80(n){
  return n+ 80  
}

addTo80(5) // 85
```
##### memoization 을 이용해 값을 가져와보자.
```javascript
let cache = {}; // long time => 85
//cache에 미리 초기값을 적용해 줄 수 있다.
//let cache = { 5: 85 }; // => 85
function memoizedAddTo80(n){
  //cache.n 
  if(n in cache){
   return cache[n];  
  } else{
    console.log('long time');
    cache[n] = n + 80;
    return cache[n];
  }  
}
console.log('1', memoizedAddTo80(5));
// => long time 1 85

//같은 함수가 반복될 경우 cache에서 값을 가져온다.
console.log('2', memoizedAddTo80(5));
// => 2 85
```

 ## currying ?
 > currying is the technique of translating the evaluation of a function.

 ````javascript
const multiply = (a,b) => a*b;
multiply(3,4)

// currying 를 적용해보자
const curriedMultiply = (a) => (b) => a*b
curriedMultiply(5,3) //undefined
curriedMultiply(5)(3) //15

const curriedMultiplyBy5 = curriedMultiply(5);

//여러번 call 하더라도 curriedMultiply 함수는 1번 실행된다. 
curriedMultiplyBy5(4) //20
curriedMultiplyBy5(4) //20
curriedMultiplyBy5(4) //20
````