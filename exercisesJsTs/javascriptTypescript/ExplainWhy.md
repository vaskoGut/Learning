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

| 5  | [create generic function that filters objects by a key and value](#generic-object-user) 
| 6 | [Explain for loop below](#for-loop-explain) 




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

4. ### generic-object-user
```javascript
// generic function that filters objects by a key and value

type User = {
  id: number;
  name: string;
  active: boolean;
}


function filterObjects<T, K extends keyof T>(
  array: T[],
  key: K,
  value: T[K]
): T[] {
  return array.filter(elem => elem[key] === value )
}

const users: User[] = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

console.log(filterObjects(users, 'active', true));
```

5. ### for-loop-explain
```javascript
for(var i = []; i < 3; i.push(2)) {
    setTimeout(() => {
        console.log(i);
    }, i.length * 1000)
}
```
Answer this:

Arrays are objects → mutations affect all references.
var is function-scoped, let/const is block-scoped.
setTimeout callbacks capture references, not snapshots.
Type coercion can behave unexpectedly in comparisons.

  1. if yuou change on let still will get  [2,2] because of i is an array/object, but mutating an object still points to the same object
  2. explanation why loop runs 2 times not 3:
    ```javascript
      Iteration 1: [] < 3 → 0 < 3 → true ✅
      Iteration 2: [2] < 3 → coerced [2] → "2" → 2 < 3 → true ✅
      Iteration 3: [2,2] < 3 → coerced [2,2] → "2,2" → "2,2" < 3?
      "2,2" → NaN in numeric comparison → NaN < 3 → false ❌
    ```
  3. Fixed version with copy i:
  ```javascript
    for(var i = []; i < 3; i.push(2)) {
        const copy = [...i];
        setTimeout(() => {
            console.log(copy);
        }, i.length * 1000)
    }
  ```
  4. why is it bad?
  ```javascript
    for(var i = []; i < 3; i.push(2)) {
      setTimeout(() => {
          const copy = [...i];
          console.log(copy);
      }, i.length * 1000)
    }
    // Inside setTimeout → too late, you only see the array after the loop finishes.
  ```
     
