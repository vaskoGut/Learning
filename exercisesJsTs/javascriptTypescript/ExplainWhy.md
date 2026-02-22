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
    console.log(x);
    console.log(y);
    console.log(z);
  }
```
| 2   | [What will be result?](#hoisting-variables-explanation)                                                                                                |
```javascript
  console.log(a);
  console.log(b);
  console.log(c);
  
  var a = 1;
  let b = 2;
  const c = 3;
```


1. ### functional scope variables
```javascript
  console.log(x); // 1 (function-scoped)
  console.log(y); // ReferenceError (block-scoped)
  console.log(z); // ReferenceError (block-scoped)
```

2. ### hoisting-variables-explanation)
```javascript
  console.log(a); // undefined (hoisted)
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
```
