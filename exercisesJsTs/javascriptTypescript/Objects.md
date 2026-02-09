# JS OBJECTS

| Nm | #Question   |
| :---:   | :---: |
| 1   | [Write function to compare flatten objects](#compare-flat-objects)                                                                                                |


1. ### compare-flat-objects
```javascript
 function isObject(obj) {
  return typeof obj == 'object' && obj !== null;
}

function compareFlatObject(obj1, obj2) {
  if(!isObject(obj1) || (!isObject(obj2))) return 'its not objects';

  if(Object.keys(obj1).length !== Object.keys(obj2).length) return 'objects have diff number of keys';

  return (Object.keys(obj2).every(elem => obj1[elem] === obj2[elem]));
}

console.log(compareFlatObject({ name: 'vasyl', surname: 'gutnyk'}, { name: 'vasyl', surname: 'gutnyk'}));
```
