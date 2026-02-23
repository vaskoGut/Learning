# REACT JS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [1. What for is used useEffect? When useEffectIsCalled? 3. Diff between useEffect and useLayoutEffect? 4. Lifecycle phases of useEffect? 5. How to avoid memory leaks in useEffect? ](#react-useEffect)                               |
| 2   | [2. What causes infinite loops inside useEffect? ](#useEffect-infinite-loops)                               |


1. ### react-useEffect

1.  **UseEffect** allows to perform you side effects in your application ( fetchingdata, diretly update dom, setting timers).
2. useEffect is called after first render, and every time component is updated.
3. Difference between useEffect and UseLayoutEffect ( Useeffect runs after browser finishing painting,useLayoutEffect runs synchronically with painting browser). 
UseEffect  has built-in error handling, so it doesn't crush entire application,whiel  useLayoutEffect
doesn't have it.
<img width="593" height="129" alt="image" src="https://github.com/user-attachments/assets/9d167758-0a08-405a-9d31-172c82bc6f75" />

5. to avoid memory leaks you need to clear useEffect timers or subscribiers.

2. ### useEffect-infinite-loops
An effect updates state → state causes re-render → effect runs again → updates state again → repeat forever.

Missing depend array:
<img width="606" height="176" alt="image" src="https://github.com/user-attachments/assets/d517c93b-a552-47ee-8623-897a15174e0b" />
1. Fix add empty dependency:
```javascript
  useEffect(() => {
    setCount(count + 1);
  }, []);
```
2. If effect changes smth that is also a dependency. It keeps retrigerring:
```javascript
  useEffect(() => {
    setCount(count + 1);
  }, [count]); // ❌ loop
```
3.
```javascript
  const obj = { value: 1 };

  useEffect(() => {
    console.log("runs every render");
  }, [obj]); // ❌ new reference each render
```
Fix you can use useMemo to prevent that.
