# REACT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is better way to toggle state in React?](#state-toggle)                               |
| 2   | [Why in react strict mode useState works twice?](#strict-mode-twice)                               |
| 3   | [Why example with prev is betther than without it?](#counter-prev)                               |
| 4   | [Searchbar component with 'loading text' disappearing after some time. Remember to clear timer on unmount?](#searchbar-react-component)                               |
| 5   | [What is wrong with code below? Why setLoading is used not properly?](#searchbar-react-component)                               |
<img width="431" height="180" alt="image" src="https://github.com/user-attachments/assets/adda7c20-3dd4-4ce4-884a-2137d1ab2c47" />


1. ### state-toggle
React state updates are asynchronous. If you ever have multiple state updates queued (or the component re-renders before your click is processed), using !good might read a stale value, causing unexpected behavior.
So better choice is:
```javascript
  <button onClick={() => setGood(prevGood => !prevGood)}>change good bad</button>
```

2. ### strict-mode-twice
In React 18+, StrictMode intentionally mounts components twice on purpose in development, to help catch:
Side effects inside components
Impure code in render or state updates
Unexpected behavior with effects

3. ### counter-prev

```javascript
  <div>
    <button onClick={() => setIncrValue(prevVal => prevVal+1)}>inc</button>
    <button onClick={() => setIncrValue(prevVal =>prevVal-1)}>decr</button>
    value: {incrValue}
  </div>
```

```javascript
<div>
  <button onClick={() => setIncrValue(() => incrValue+1)}>inc</button>
  <button onClick={() => setIncrValue(() =>incrValue)}>decr</button>
  value: {incrValue}
</div>
```
**answer**: React state updates are async and can be batched. If multiple updates happen before a re-render, incrValue might be stale.

4. ### searchbar-react-component

```javascript
import { useState, useEffect } from 'react';

export default function App() { 
   const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (!query) {
      setLoading(false); 
      return;
    }

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [query]);

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Type something..."
      />
      {loading && <div role="status">Loading...</div>}
    </div>
  );
}
```

5. ### searchbar-react-componen
answer: setLoading false finishes faster that fetch, it doesnt wait for fetch. You need to wait. That's is main problem.
