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

| 3  | [Why you have results ln loop like that?](#loop-results)                                                                                                |
```javascript
// var - function scoped
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // Prints: 3, 3, 3
}

// let - block scoped
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // Prints: 0, 1, 2
}
```

| 4  | [Why you have 3 times 3, and how to fix it?](#event-loop-ex4)     
```javascript
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
```


1. ### functional scope variables
```javascript
  console.log(x); // 1 (function-scoped)
  console.log(y); // ReferenceError (block-scoped)
  console.log(z); // ReferenceError (block-scoped)
```

2. ### hoisting-variables-explanation
```javascript
  console.log(a); // undefined (hoisted)
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  console.log(c); // ReferenceError: Cannot access 'c' before initialization
```

3. ### loop-results
<img width="689" height="617" alt="image" src="https://github.com/user-attachments/assets/b38d8bb5-0624-4a8a-bcfd-1896d54b5b77" />

4. ### event-loop-ex4
Because synchronous code runs before asynchronous code. And because functional scope of var.
Fix is simple, just swap var with let:
```javascript
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  }
```
