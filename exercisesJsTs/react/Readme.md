# REACT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is better way to toggle state in React?](#state-toggle)                               |
| 2   | [Why in react strict mode useState works twice?](#strict-mode-twice)                               |
| 3   | [Why example with prev is betther than without it?](#counter-prev)                               |

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
