# JS OBJECTS

| Nm | #Question   |
| :---:   | :---: |
| 1   | [Write function to compare flatten objects](#compare-flat-objects)                                                                                                |
| 2   | [Refactor code from example above to care nested objects](#compare-nested-objects)                                                                                                |

1. ### compare-flat-objects
```javascript
 function isObjectValid(obj) {
  return typeof obj == 'object' && obj !== null;
}

function compareObject(obj1, obj2) {
  if(!isObjectValid(obj1) || !isObjectValid(obj2)) return false;

  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  if(keysObj1.length !== keysObj2.length) return false;

  return keysObj1.every(key => obj1[key] === obj2[key]);
}


console.log(compareObject({ name: 'vasyl', surname: 'gutnyk'}, { name: 'vasyl', surname: 'gutnyk'}));
```

2. ### compare-nested-objects
```javascript
function isObjectValid(obj) {
  return typeof obj === 'object' && obj !== null;
}

// make simple object flat comparison
function compareObject(obj1, obj2) {
  if(obj1 === obj2) return true; // here we compare values of objects. If its equall. Code will go deeper till the line with return

  if(!isObjectValid(obj1) || !isObjectValid(obj2)) return false;

  const keysObj1 = Object.keys(obj1);
  const keysObj2 = Object.keys(obj2);

  if(keysObj1.length !== keysObj2.length) return false;

  return keysObj1.every(key => compareObject(obj1[key], obj2[key]));
}

console.log(compareObject({name: 'Vasyl', job: {
  position: 'doctor',
}}, { name: 'Vasyl', job: {
  position: 'doctor'
} }));
```




#  OBJECT QUESTIONS TEORY

| Nm | #Question   |
| :---:   | :---: |
| 1   | [How do you access and update values in an object?](#access-object)                                                                                                |
| 2   | [How do you add or remove properties from an object?](#add-remove-object)                                                                                                |
| 3   | [How to list properties of object?](#list-object-properties)                                                                                                |
| 4   | [What is object.entries result?](#object-entries)                                                                                                |
| 5   | [Difference between in and hasownpropertyt?](#in-hasownproperty)                                                                                                |
| 6   | [How do u clone object?](#clonning-object)                                                                                                |
| 7   | [Why spread clonning object is shallow? What does it mean?](#shallow-clonning)                                                                                                |
| 8   | [Merge 2 objects and resolve conflicts?](#resolve-confclits)                                                                                                |

1. ### access-object
by dot or by array notation
```javascript
const user = { name: "Alex", age: 25 };
user.age = 26;
user["name"] = "Alexa";
```

2. ### add-remove-object
```javascript
user.email = "alex@email.com";
delete user.age;
```
3. ### list-object-propertie
```javascript
for (var k in obj) {
  console.log('k', k);
}

Object.keys
Object.values
Object.entries
```
4. ### object-entries
```javascript
const obj = {
  name: 'vasyl',
}

// result: [["name", "vasyl"]]
```

5. ### in-hasownproperty
In checks anywehre in the object, including its prototype chain.
```javascript
const obj = { name: "Alice" };

console.log("name" in obj);        // true
console.log("toString" in obj);    // true
```
hasOwnProperty - checks only directly inside of object.

6. ### clonning-object
```javascript
const copy = { ...user };
```
```javascript
const deepCopy = JSON.parse(JSON.stringify(user));
```

7. ### shallow-clonning
```javascript
const user = {
  name: "Alice",
  address: {
    city: "New York"
  }
};

const copy = { ...user };
```
<img width="630" height="298" alt="image" src="https://github.com/user-attachments/assets/19ebcc3f-a349-4dc3-9a42-53f17af10755" />

8. ### resolve-confclits
const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };

const merged = { ...a, ...b };
// { x: 1, y: 3, z: 4 }
// las 1 object most important, so that's why we have y 3
