# Explain why

| Nm | #Question   |
| :---:   | :---: |
| 1   | [What will be result?](#functional-scope-exercise)                                                                                                |
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


1. ### object-entries
```javascript
console.log(x); // 1 (function-scoped)
console.log(y); // ReferenceError (block-scoped)
console.log(z); // ReferenceError (block-scoped)
```
