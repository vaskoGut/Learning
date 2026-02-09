# JS TYPES QUESIONNS

| Nm | #Question   |
| :---:   | :---: |
| 1   | [Null undefined euqality](#null-undefined)                                                                                                |
| 2   | [What is difference between loose equality and strict equality?](#loose-strict-equality)                                                                                                |
| 3   | [[] == false](#empty-array-false)                                                                                                |
| 4   | [what is result of comparing 2 empty arrays and 2 empty objects?](#arrays-objects)                                                                                                |
| 5   | [Implement write example, when 2 objects will be equal](#objects-equality)                                                                                                |
| 6   | [What is output 0 == '0' and 0 === '0'](#zero-equlatiy)                                                                                                |
| 7   | [What is output 0 == false ](#zero-false-equlatiy)                                                                                                |
| 8   | [How you can comparare objects?](#object-comparizing)                                                                                                |
| 9   | [Is nAn equall to nAn?](#nan-equality)                                                                                                |
| 10  | [[] + [] result and why?](#empty-array-equality)                                                                                                |

 nan-equality

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

6.  ### zero-equality
<img width="326" height="261" alt="image" src="https://github.com/user-attachments/assets/db3e2a80-a9e7-4463-8c99-13bbee6e50ce" />

7.  ### zero-false-equlatiy
```javascript
  0 == false // true
```

8.  ### object-comparizing
<img width="306" height="131" alt="image" src="https://github.com/user-attachments/assets/3e36d2da-d0b7-4a60-9aea-f25a59aa8183" />

9.  ### nan-equality
<img width="400" height="287" alt="image" src="https://github.com/user-attachments/assets/d9df33ce-9de7-4346-9a78-f16213b5654b" />

10.  ### empty-array-equality
<img width="838" height="665" alt="image" src="https://github.com/user-attachments/assets/319bd834-064e-40ba-a46d-0ae2b2136f87" />



