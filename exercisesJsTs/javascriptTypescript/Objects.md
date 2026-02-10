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
