# Explain why

| Nm | #Question   |
| :---:   | :---: |
| 1   | [What will be result?](#hoisting-exercise)                                                                                                |
```javascript
  function example() {
    if (true) {
      var x = 1;
      let y = 2;
      const z = 3;
    }
    console.log(x); // 1 (function-scoped)
    console.log(y); // ReferenceError (block-scoped)
    console.log(z); // ReferenceError (block-scoped)
  }
```


hoisting-exercise
```javascript
console.log(x); // 1 (function-scoped)
console.log(y); // ReferenceError (block-scoped)
console.log(z); // ReferenceError (block-scoped)
```
