# JS TYPES QUESIONNS

| Nm | #Question   |
| :---:   | :---: |
| 1   | [Null undefined euqality](#null-undefined)                                                                                                |
| 2   | [What is difference between loose equality and strict equality?](#loose-strict-equality)                                                                                                |
| 3   | [[] == false](#empty-array-false)                                                                                                |
| 4   | [what is result of comparing 2 empty arrays and 2 empty objects?](#arrays-objects)                                                                                                |
| 5   | [Implement write example, when 2 objects will be equal](#objects-equality)                                                                                                |

1. ### null-undefined
null == undefined // true
null === undefined // false.
null and undefined are only equal to each other (and to nothing else)

2. ### loose-strict-equality
Best practice: always use ===
== - type coertion happens
=== - no corection

3. ### empty-array-false
```javascript
  [] == false // true
```
<img width="242" height="137" alt="image" src="https://github.com/user-attachments/assets/8cb52dac-6382-4717-8b27-40857296f1dd" />

4. ### arrays-objects
result of comparing 2 arrays or 2 objects will be false cause objects are compared by its reference.

5.  ### objects-equality
```javascript
  const a = {};
  const b = a;
  a === b // true
```

