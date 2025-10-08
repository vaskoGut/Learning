# JAVASCRIPT TYPESCRIPT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Write reverse string function using map, reduce methods, memoization, for loop](#reverse-string)                                                                                                |
| 2   | [Write palindrom function - with regular aproach and with help of recursion](#palindrom-recursion-solving)                                                                             |
| 3   | [Remove duplicates from array. What is difference in complexity or reduce and map solution ( check code below )?](#remove-duplicates)                                                            |
| 4   | [Flatten 1 level array ( with simple looping )?](#flatten-array)                                                            |

1. ### reverse string
   Using **map** method:
   
    ```javascript
      const str = 'hello';
      const result = str.split('').map((_, i, arr) => arr[arr.length-1-i]).join('');
    ```

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

2. ### palindrom recursion solving
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

3. ### remove duplicates
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

4. ### flatten array
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

   Note: there is also flat array built-in method.
   




   

