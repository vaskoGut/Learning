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


1. ### access-object
by dot or by array notation
```javascript
const user = { name: "Alex", age: 25 };
user.age = 26;
user["name"] = "Alexa";
```
