# JAVASCRIPT TYPESCRIPT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Write reverse string function using map, reduce methods, memoization, for loop](#reverse-string)                                                                                                |
| 2   | [Write palindrom function - with regular aproach and with help of recursion](#palindrom-recursion-solving)                                                                             |
| 3   | [Remove duplicates from array. What is difference in complexity or reduce and map solution ( check code below )?](#remove-duplicates)                                                            |
| 4   | [Flatten 1 level array ( with simple looping )?](#flatten-array)                                                            |
| 5   | [Check similarity of arrays. Bonus question - does return breaks for loop?](#similarity-arrays)                                                            |
| 6   | [Find max min in array ( with help of sort, with help simple looping )?](#max-min-array-element)                                                            |
| 7   | [Summ all numbers in array ](#all-numbers-array)                                                            |
| 8   | [Convert array to object ](#convert-obj-to-array)                                                            |
| 9   | [Find the frequency of elements in an array. Make 1 example with nullish coalescing](#freequency-elements-array)                                                            |
| 10  | [Capitalize the first letter of every word in a sentence. Make also veersion with filtering articles like 'the a an of for etc'](#capitalize-first-letter)                                                            |
| 11  | [Count vowels](#count-vowels)                                                            |
| 12  | [Write high ordered component](#high-ordered-component)                                                            |
| 13  | [Check if object is empty](#object-empty-check)                                                            |
| 14  | [Write a function that returns another function, which remembers a number and adds it to its argument.](#closure-function-task)                                                            |
| 15  | [Create a functin createCounter that returns a function which increments and returns a counter each time it’s called.](#closure-function-task-two)                                                            |
| 16  | [Create a function person that allows getting and setting a private name variable.](#getting-setting-private-name)                                                            |
| 17  | [Fix code exercise: Fix problem with functions inside the loop.](#fix-closure-problem-function)                                                            |
| 18  | [Create a function memoize that remembers results of an expensive function.](#memoization-function)                                                            |
| 19  | [Find factorial.](#factorial-function)                                                            |
| 20  | [If you have 2 functions outer and inner. Will inner function return stop running outer function?](#inner-outer-function)                                                            |
| 21  | [Why variant with arow function doesnt work when you want to console.log 'this' inside object method?](#arrow-declaration-function-prototype)                                                            |
| 22  | [get factorial with recursion](#factorial-recursion)                                                            |
| 23  | [Explain code](#this-arrow-function)                                                            |
| 24  | [Explain code below doesn't work?](#setTimeOut-promise)                                                            |
```javascript
   // why it doesnt work?
   function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve('delay is done'), ms));
   }
```

| 25  | [Why it doesn't work?](#promise-exercise)                                                            |
```javascript
   // why it doesnt work? Nothing happening after writing this code.
   const test = new Promise((resolve, reject) => setTimeout(() => {
       resolve('test');
     }, 1000)
   )
```
| 26  | [Write your own debounce function implementation?](#debounce-function)                                                            |
| 27  | [Write simple example of using prototype chain?](#prototype-chain)                                                            |
| 28  | [Why code below doesn't work?](#arrow-this-err)                                                            |
```javascript
const user = {
  name: "Alex",
  greet: function() {
    () => {
      console.log(this.name);
    }
  }
};
```
| 29  | [Write your own throttle function implementation ?](#throttle-implementation)                                                            |

| 30  | [In which order does it run ?](#microtasks-macrotasks)                                                            |
<img width="540" height="147" alt="image" src="https://github.com/user-attachments/assets/e780c2f3-9b3b-4f2b-9497-8d1e964b9444" />


1. ### reverse string
   Using **map** method:
   
    ```javascript
      const str = 'hello';
      const result = str.split('').map((_, i, arr) => arr[arr.length-1-i]).join('');
    ```
   **map** method isn't ideal here. We create new array. Better just to use for loop or reduce method.

   Using **reduce** method:

    ```javascript
      const result = str.split('').reduce((acc, curr) => {
        acc = curr + acc;
        return acc;
      }, '');
    ```

   Using **for** method:
    ```javascript
      let outPut = '';
      for (var i = str.length-1; i >= 0; i--) {
        outPut += str[i];
      }
    ```

   Using **recursion** method:
   ```javascript
      function reverseStringRecursion(str) {
        if(!str) return '';
      
        return reverseStringRecursion(str.substring(1)) + str[0];
      } 
    ```

   using **recursion memoization**:
   ```javascript
      const fib = '0, 1, 1, 2, 3, 5, 8, 13, 21';

      function fibNumber(num, memo) {
        if(num in memo) return memo[num];
        if(num == 1 || num == 0) return num;
      
        memo[num] = fibNumber(num-1, memo) + fibNumber(num-2, memo);
        
        return memo[num];
      }
      
      console.log(fibNumber(7, {}));
   ```

    using **for loop**:
   ```javascript
       const fib = '0, 1, 1, 2, 3, 5, 8, 13, 21';

       function fibNumber(num) {
        if(num == 0) return 0;
        if(num == 1) return 1;
      
        let firstElem = 0;
        let secondElem = 1;
        let temp;
        for (var i = 2; i <= num; i++) {
          temp = firstElem + secondElem;
        
          firstElem = secondElem;
          secondElem = temp;
        }
      
        return temp;
      }
      
      console.log(fibNumber(7));
   ```

1. ### palindrom recursion solving
   using **simple looping**:

   ```javascript
         function reverseString(str) {
            return str.split('').reverse().join('');
         }
         
         function checkPalindrom(str) {
            if (str === reverseString(str)) return true;
            return false;
         }
         
         console.log(checkPalindrom('parem'));
   ```

   using **for loop**:
   ```javascript
         function checkPalindrom(ourStr) {
           for(var i = 0; i < ourStr.length/2; i++) {
             if(ourStr[i] !== ourStr[ourStr.length - 1 - i]) return false
           };
         
           return true;
         };
         
         console.log(checkPalindrom('parem'));
   ```

   using **recursion**:

   ```javascript
      function palindromRecursion(str) {
           function checkStr(start, end) {
             if(start >= end) return true;
             if(str[start] !== str[end]) return false;
             if(str[start] === str[end]) {
               return checkStr(start + 1, end - 1);
            }
           }
        return checkStr(0, str.length-1); 
      }
   ```

   using **recursion** 2nd solution:

   ```javascript
      function checkPalindrom(ourStr, startPosition) {
        if(startPosition > ourStr.length / 2) return true;
      
        if(ourStr[startPosition] !== ourStr[ourStr.length - 1 - startPosition]) return false;
        else return checkPalindrom(ourStr, startPosition + 1);
      };
   ```

2. ### remove duplicates
   using **new Set**:

   ```javascript
        const testArr = [4, 5, 6, 7, 8, 5, 6, 6, 9, 8];

         function removeDuplicates(arr) {
           return [...new Set(arr)];
         }
   ```
   using **reduce method**:

   ```javascript
         function removeDuplicates(arr) {
           return Object.values(
             arr.reduce((total, curr) => {
               total[curr] = curr;
               return total;
             }, {})
           );
         }
   ```

   using **map method**:
   ```javascript
         function removeDuplicates(arr) {
           const outputArray = [];
           
           arr.map(elem => {
             if(!outputArray.includes(elem)) outputArray.push(elem);
           });
         
           return outputArray;
         }
   ```
   Time Complexity: O(n)

   <img width="457" height="302" alt="image" src="https://github.com/user-attachments/assets/987ee096-63a3-4965-a3fa-afbaf44c85c5" />
   map, reduce + includes inside have  On2 complexity because for each item, includes does another loop inside the main loop.

   using **recursion**:
   ```javascript
      function removeDuplicates(arr, result) {
        if(!arr.length) return result;
        if(!result.includes(arr[0])) result.push(arr[0]);
        arr.shift(); // or instead of shift  const [first, ...rest] = arr;
      
        return removeDuplicates(arr, result);
      }
   ```
   p.s. You can also use retur outside function. But in that case you can have side  effects in 'normal developer life', it will not be pure ( function that doesn't have side effects) function. Better to store result as above in params.
   Example with result outside of function:
   ```javascript
      let result = [];
         function removeDuplicates(arr) {
           if(!arr.length) return result;
           if(!result.includes(arr[0])) result.push(arr[0]);
           arr.shift();
         
           return removeDuplicates(arr);
      }
   ```

3. ### flatten array
   using simple **looping**:
   ```javascript
   const nestedarr = [1, [2, 3], [4, 5], 6];
   const result = nestedarr.reduce((total, curr) => {
     if(Array.isArray(curr)) { // (curr.length > 1) { -  it can lead to problems with string, so  better to use isArray
       curr.forEach(currElem => {
         total.push(currElem);
       })
     } else total.push(curr);
   
     return total;
   }, []);
   ```

   using **for of**:
   ```javascript
      function flattenArray(arr) {
        const result = [];
        for (let arrElem of arr) {
          if(Array.isArray(arrElem)) {
            for (let i=0; i < arrElem.length; i++) {
              result.push(arrElem[i]);
            }
          } else result.push(arrElem);
        }
        return result;
      }
   ```

   Note: there is also flat array built-in method.

   using **recursion**:

   ```javascript
      function flattenArray(arr, result) {
        if(!arr.length) return result;
      
        const [arrFirstItem, ...rest] = arr;
        
        if(Array.isArray(arrFirstItem)) {
          arrFirstItem.forEach(elem => {
            result.push(elem);
          })
        } else {
          result.push(arrFirstItem);
        }
      
        return flattenArray(rest, result);
      }
   ```
   using **generator**
   ```javascript
      function* flattenArrayGenerator(arr) {
         for(var i of arr) {
          if(Array.isArray(i)) {
            yield* i;
          } else yield i;
         }
      }

      console.log([...flattenArrayGenerator(nestedarr)]) // remember to convert result of generator to arrray
    ```

4. ### similarity arrays
     ```javascript
         function checkArraySimilarity(arr1, arr2) {
           if (arr1.length !== arr2.length) return false;
         
           for (let i = 0; i < arr1.length; i++) {
             if (arr1[i] !== arr2[i]) return false; 
           }
         
           return true;
         }
      ```
   Note: yes, return exists for loop.

5. ### max min array element

    using **sort**:
    ```javascript
        const arr = [ 3, 55, 0, 42, 6, 7 ];

         function findMaxMin(array) {
           const modifiedArray = [...array].sort((elem1, elem2) => elem1 - elem2); // sort is overkill, cause it modifies original array
         
           return {
             minNum: modifiedArray[0],
             maxNum: modifiedArray[modifiedArray.length-1]
           }
         }
      ```
   Note: Sort is less efficient than simple loop solution, it has bigger algorithm complexity.

   using **for loop**:

      ```javascript
        const arr = [ 3, 55, 0, 42, 6, 7 ];
         function findMaxMin(array) {
           let max = arr[0];
           let min = arr[0];
           
           for(var i = 0; i < arr.length; i ++) {
             if(max < arr[i]) max = arr[i];
             if(min > arr[i]) min = arr[i];
           }
         
           return {
             min: min,
             max: max
           };
         }
      ```

6. ### all numbers array
   We  need to ask more questions when we get task like that - what an interviewer expects  from us.
   A simple soluition:

      ```javascript
         const arr = [1 ,2 ,3 , 'sdfsdf', 5];
   
         const reulst = arr.reduce((total, curr) => {
           if(typeof(curr) !== "number") return total + 0;
         
           return total + curr;
         }, 0)
         
         console.log(reulst);
      ```

<img width="522" height="257" alt="image" src="https://github.com/user-attachments/assets/9cd707f7-fb16-49d4-ae66-a70e9a32a562" />
<img width="656" height="441" alt="image" src="https://github.com/user-attachments/assets/7397819c-c3fb-4f84-9c28-434ccce5aa78" />

8. ### convert obj to array
    ```javascript
      const arr = [1, 2, 3];

      const result = arr.reduce((total, curr, i) => {
        total[i] = curr;
      
        return total;
      }, {});
   ```

9. ### freequency elements array
   ```javascript
      const arr = [4, 2, 4, 3, 2, 4, 1];

      const modifiedArr = arr.reduce((total, curr) => {
        if(total[curr]) total[curr] += 1;
        else total[curr] = 1;
      
        return total;
      }, {})
   ```

   // an example wit hnullish coalescing:
   ```javascript
      const modifiedArr = arr.reduce((total, curr) => {
        total[curr] = (total[curr] ?? 0) + 1;
        return total;
      }, {});
   ```

10. ### capitalize first letter
    ```javascript
         const arr = 'Hello, how are you man';
         const result = arr.split(' ').map(elem => elem[0].toUpperCase() + elem.slice(1)).join(' ');
         console.log('result', result);
    ```

     // an example with regex

     ```javascript
         const arr = 'Hello, how are you man';
         const regex = /\b(the|of|for|an|are)\b/g
         
         const result = arr.split(' ').map(
           elem => { 
             if(elem.match(regex)) return elem;
             return elem[0].toUpperCase() + elem.slice(1)
         }).join(' ');
     ```

11. ### count vowels
     ```javascript
         const arr = 'Hello, how are you man';

         const regex = /[aoeiyu]/gi;
         let count = 0;
         
         arr.split('').forEach(char => {
           if (char.match(regex)) {
             count++;
           }
         });
     ```

12. ### high ordered component
High-order components (HOCs) are wrappers for other components. They allow you to reuse logic across different components. 

For example, you might want to add a logger HOC, which logs information about mounting and unmounting of a component:

```javascript
export default withLogger(SomeComponent);
```

When a React component is created, it receives `props`:

```
You write:             React sees:
---------------------------------------------------
const LoggedHello =    const LoggedHello =
 withLogger(Hello) →    (props) => <Hello {...props} />;
```

Logger example:

```javascript
import { useEffect } from 'react';

export function withLogger(Component, name) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log(`component ${name} mounted`);

      return () => {
        console.log(`component ${name} unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`[${name}] updated props`, props);
    });

    return <Component {...props} />;
  };
}

export function Hello(props) {
  return <div>{props.name}</div>;
}

const LoggedHello = withLogger(Hello, 'Hello');
```

13. ### object empty check
```javascript
   const obj = {};
   if (!Object.keys(obj).length) console.log('empty');
```
// it can be worth also to check if obj value is Object
```javascript
   if (obj && typeof obj === 'object' && !Object.keys(obj).length) { // first obj check - checks if it's not null
     console.log('empty');
   }
```

14. ### closure function task
```javascript
   function add(a) {
     return function() {
       return a + 5;
     }
   }
   console.log(add(5)());

   // or with IIFE (immidiately invoked function expression):
   function add(a) {
     return (function() {
       return a + 5;
     })();
   }
```

15. ### closure function task two
```javascript
   function createCounter() {
     let count = 0;
     return function() {
       count++;
       return count;
     };
   }

   // Usage:
   const counter = createCounter();
   console.log(counter()); // 1
   console.log(counter()); // 2
   console.log(counter()); // 3
```

16. ### getting setting private name

```javascript
   function person(per1) {
     let currName = per1;
     return {
       getName: () => currName,
       setName: (newName) => { 
         currName = newName
       }
     }
   }
   
   // Usage:
   const p = person("Alice");
   console.log(p.getName()); // Alice
   p.setName("Bob");
   console.log(p.getName()); // Bob
```

17. ### fix closure problem function
// Wrong version:

```javascript
   const funcs = [];
   for (var i = 0; i < 3; i++) {
     funcs.push(function() {
       console.log(i);
     });
   }
   funcs[0](); // 3
   funcs[1](); // 3
   funcs[2](); // 3
```

```javascript
   // Fixed version with IIFE:
   const funcs = [];
   for (var i = 0; i < 3; i++) {
     funcs.push((function(j) {
       return function() { console.log(j) };
     })(i));
   }
   funcs[0](); // 3
   funcs[1](); // 3
   funcs[2](); // 3
```

```javascript
   // Fixed version with let:
   const funcs = [];
   for (var i = 0; i < 3; i++) { // var donsnt' have block scope, so all functions reference to the last updated version of that variable. If you set it to 'let', you have now block scope and everything works as expected
     funcs.push((function(j) {
       return function() { console.log(j) };
     })(i));
   }
   funcs[0](); // 3
   funcs[1](); // 3
   funcs[2](); // 3
```

18. ### memoization function

```javascript
   function memoize(fn) {
     const cache = {};
   
     return (n) => {
       if (n in cache) return cache[n]; // use "in" to handle falsy results like 0
       const result = fn(n);
       cache[n] = result;
       return result;
     };
   }
```

19. ### factorial function

```javascript
   function factorial(n) {
     if(n === 1) return 1;
   
     return n * factorial(n-1);
   }
```

20. ### inner outer function

```javascript
   function inner() {
     console.log("Inner starts");
     return false;
     console.log("Inner ends"); // never runs
   }
   
   function outer() {
     console.log("Outer starts");
     inner();
     console.log("Outer ends"); // ← this still runs
   }
   
   outer();

   // answer: no, inner function return will not stup running outer function
```

21. ### arrow-declaration-function-prototype
```javascript
   function Person(name) {
     this.name = name;
   }
   const vasyl = new Person('vasyl');
   Person.prototype.getName = function() { console.log(this.name)}; // workcs, this is takent from outside context
   Person.prototype.getName = () => console.log(this.name); // doesnt work because this isn't taken from outside context
```

22. ### factorial-recursion
```javascript
   function factorial(n) {
     if (n < 1) return 1;
   
     return n * factorial(n-1);
   }
   
   console.log(factorial(5));
```

23. ### this-arrow-function
<img width="632" height="455" alt="image" src="https://github.com/user-attachments/assets/7f67a0bf-f353-4443-8ac5-c92b99a3d6cd" />

Arrow function doesn't have its own this. It inherits it from out context.

24. ### setTimeOut-promise
```javascript
   // inside setTimeout should function not just resolve()
   // without funciton resolves rusn immidiately
   function delay(ms) {
      return new Promise((resolve) => setTimeout(() => resolve('delay is done'), ms));
   }
   
   async function test() {
     console.log('before delay');
     const result = await delay(3000);
     console.log('result', result);
   }
     
   test();
```

25. ### promise-exercise
```javascript
   // nothing happening because u need to handle result of promise. You dont don anything with it.
   const test = new Promise((resolve, reject) => setTimeout(() => {
       resolve('test');
     }, 1000)
   ).then(value => console.log(value))
```

26. ### debounce-function
```javascript
   function debounce(func, dlay=1000) {
     let timer;
   
     return function(...arg) {
       clearTimeout(timer);
       
       timer = setTimeout(() => {
         func(...arg);
       }, dlay)
     };
   }

   const logSmth = (a) => console.log('smth:', a);
   const useDebounce = debounce(logSmth);
useDebounce(5);
```

27. ### prototype-chain
```javascript
   const user = {
     sayHi: () => console.log('hi')
   }
   
   user.sayHi();
   
   const user2 = Object.create(user);
   user2.sayHi();
```
parent is the prototype of child.
child inherits the greet method from parent.
The chain consists of child → parent → Object.prototype → null.

28. ### arrow-this-err
```javascript
functino () => {...} isn't called. Correct code:
const user = {
  name: "Alex",
  greet: function() {
    (() => {
      console.log(this.name);
    })();
  }
}

console.log(user.greet());
```

29. ### throttle-implementation
```javascript
function throttle(fn, delay) {
  let timer = null;

  return function (...args) {
    if (timer) return;

    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
}

const sayHello = () => {
  console.log('hello');
};

const throttledHello = throttle(sayHello, 100); // 2 seconds delay
throttledHello();
```

30. ### microtasks-macrotasks
<img width="173" height="90" alt="image" src="https://github.com/user-attachments/assets/6fc687cd-e9c5-4122-b149-f35a49886d1a" />
