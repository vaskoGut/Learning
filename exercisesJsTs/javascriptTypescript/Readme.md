# JAVASCRIPT TYPESCRIPT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Write reverse string function using map, reduce methods, for loop](#reverse-string)                                     |
| 2   | [Difference between arrow function and function declaration, expressions](#arrow-function-explanation)                                                                             |



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



3. ### arrow function explanation
   **Functional expression** - function defined inside an expression. Example:

    ```javascript
       const getRectArea = function (width, height) {
        return width * height;
       };
       console.log(getRectArea(3, 4));
    ```
   
   **Functional declaration** - function declared with function keyword. Functional declaration creates binding of new function to a given name.

    ```javascript
       function calcRectArea(width, height) {
          return width * height;
       }
       console.log(calcRectArea(5, 6)););
    ```

    ```javascript
      function print() {
        console.log(arguments)
      }

      print(1,2,3,4);

      /*
        result below:
        {
          "0": 1,
          "1": 2,
          "2": 3,
          "3": 4
        } 
      */
    ```
   Remember arrow function don't have acces to the arguments.

    ```javascript
      const obj = {
      name: 'deeecode',
      print: function() {
        console.log(this)
      }
     }
     obj.print() // {name: 'deeecode', print: ƒ}
    ```
   You can't do smth like above with arrow function.
      
   **Arrow function** - don't have binding to this ( in inherits this from outside look code example below), arguments, super and shouldn't be used as methods.
   They can't be used as a constructors - we can't call them with new keyword. Cannot be used as generator functions.

   Explain next examples:
   ```javascript
      function Person() {
        this.age = 0;
    
        setInterval(() => {
            this.age++; // `this` refers to the `Person` instance
            console.log(this.age); // Correctly logs the incremented age
        }, 1000);
      }
  
     let p = new Person();
    ```

    ```javascript
      function Person() {
        this.age = 0;
    
        setInterval(function() {
            this.age++; // `this` refers to the global object or `undefined` in strict mode
            console.log(this.age); // NaN or throws error in strict mode
        }, 1000);
      }
      let p = new Person();
    ```

    So arrow functions do not have their own this. Instead, they inherit the value of this from the surrounding (lexical) context, which means the value of this is determined by where the arrow function is defined, not by how it is called.

    1 more example:
     normal function:
    ```javascript
     const obj = {
        name: "Alice",
        greet: function() {
          console.log(this.name); // `this` refers to `obj`
        }
      };
    ```
    arrorw function:
      ```javascript
        const obj = {
          name: "Alice",
          greet: () => {
            console.log(this.name); // `this` does NOT refer to `obj`, but to the surrounding context (possibly `window` in non-strict mode or `undefined` in strict mode)
          }
      };

obj.greet(); // Output: undefined or global object, because `this` is inherited from the lexical scope
      ```

obj.greet(); // Output: Alice
