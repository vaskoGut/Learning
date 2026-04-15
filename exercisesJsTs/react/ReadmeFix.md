

# React Fix
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Check state update problem. WHy isn't this increasing to 2?](#state-update-ex)                               |


1. ### state-update-ex
```javascript
  export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    ssetCount(count + 1);
     setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

// answer: Both lines use the same count value from the current render.
```
