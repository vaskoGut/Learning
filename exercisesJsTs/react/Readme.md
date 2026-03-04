# REACT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is better way to toggle state in React?](#state-toggle)                               |
| 2   | [Why in react strict mode useState works twice?](#strict-mode-twice)                               |
| 3   | [Why example with prev is betther than without it?](#counter-prev)                               |
| 4   | [Searchbar component with 'loading text' disappearing after some time. Remember to clear timer on unmount?](#searchbar-react-component)                               |
| 5   | [What is wrong with code below? Why setLoading is used not properly?](#searchbar-react-component)                               |
<img width="431" height="180" alt="image" src="https://github.com/user-attachments/assets/adda7c20-3dd4-4ce4-884a-2137d1ab2c47" />

| 6   | [Write search input with fetch and debounce effectinside. Handle isLoading, isActive to prevent unnecessary data rewritting?](#searchbar-fetch-component)                               |

| 7   | [Write useToggle hook](#useToggle-hook)                               |

| 8   | [Write debounce hook](#debounce-hook)                               |
Implement a reusable useDebounce React hook that delays updating a value until a specified amount of time has passed without further changes.
The hook should prevent rapid state updates (e.g., during user typing) and help reduce unnecessary side effects such as API calls.

| 9   | [When is useMemo useless? provide simple example of good useMemo example](#useMemo-useless)                               |

| 10  | [Review code below](#usetoggle-debug)                               |
```javascript
export default function App() {
  const useToggle = () => {
    const [isToggle, setToggle] = useState(false);
    const switchToggle = setToggle((prev) => !prev);

    return [isToggle, switchToggle];
  };

  const [isToggle, switchToggle] = useToggle();

  return (
    <>
      <button aria-label="toggle-button" onClick={switchToggle}>
        toggle
      </button>
      {isToggle ? "on" : "off"}
    </>
  );
}
```

| 11  | [Explain why code below doesnt update input](#input-explain)                               |
```javascript
  import { useState, ChangeEvent } from "react";
  
  export function ToDoInput() {
    const [task, setTask] = useState<string>(""); // initialize as empty string
  
    const handleTask = (e: ChangeEvent<HTMLInputElement>) => {
      setTimeout(() => setTask(e.target.value), 200);
    };
  
    return (
      <>
        <input value={task} onChange={handleTask} type="text" />
        <button onClick={() => console.log("add task", task)}>add task</button>
      </>
    );
  }
```

| 12  | [Why code below doesnt work?](#fix-handle-task)                               |
```javascript
  const handleTask = (e: ChangeEvent<HTMLInputElement>) => { () => setTask(e.target.value); };
  <input value={task} onChange={handleTask} type="text" />
```

| 13  | [Fix type error? Dhy did it happen?](#fix-red-type-error)                               |
<img width="363" height="92" alt="image" src="https://github.com/user-attachments/assets/6ba8bb27-b4fe-41f8-94b2-93389897cb18" />


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

6. ### searchbar-fetch-component
```javascript
  import { useState, useEffect } from 'react';
  
  export default function App() { 
      const [isLoading, setLoading] = useState(false);
      const [searchString, setSearchString] = useState('');
      const [results, setResults] = useState([]);
      
      const handleChange = (value: React.ChangeEvent<HTMLInputElement>) => {
          setSearchString(value.target.value);
      }
      
      useEffect(() => {
           if(!searchString) return;
  
           let isActive = true;
          
          const timer =  setTimeout(() => {
              setLoading(true);
              fetch('https://dummyjson.com/users').then(data => data.json()).then((data) => {
                  if(isActive)  { 
                      setResults(data);  
                       setLoading(false); 
                   }
              }).catch(error => console.error(error).finally(() => {
                  if(isActive) setLoading(false);
              })
              );}, 400)
  
          return () => {
              clearTimeout(timer);
              isActive = false;
          }
      }, [searchString]);
      
    return (
      <div>
          <input onChange={handleChange} type="search" />
          {isLoading && <span>loading...</span>}
      </div>
    );
  }
```

7. ### useToggle-hook
```javascript
  const useToggle = (initialValue = false) => {
    const [isToggle, setToggle] = useState(initialValue);

    const toggle = () => setToggle((prev) => !prev);

    return [isToggle, toggle];
  };
```

8. ### debounce-hook
```javascript
const useDebounce = (searchValue, delay = 500) => {
  const [debounceValue, setValue] = useState(searchValue);

  useEffect(() => {
    setTimeout(() => {
      setValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  return debounceValue;
};

useEffect(() => {
  if (!debouncedSearch) return;

  fetchData(debouncedSearch);
}, [debouncedSearch]);
```

9. ### useMemo-useless
useMemo is useless when the computation is cheap or when the memoized value doesn’t prevent any real re-render or performance issue. Since useMemo itself has overhead, using it unnecessarily can actually make performance worse instead of better.

<img width="645" height="554" alt="image" src="https://github.com/user-attachments/assets/932688e9-4976-4048-9580-2cae048a7d46" />

10. ### usetoggle-debug
    1. useUseToggle outside of your component
    2. const switchToggle = setToggle((prev) => !prev); You are calling setToggle immediately instead of creating a function

So correct version:
```javascript
import { useState } from "react";

const useToggle = () => {
  const [isToggle, setToggle] = useState(false);

  const switchToggle = () => {
    setToggle(prev => !prev);
  };

  return [isToggle, switchToggle];
};

export default function App() {
  const [isToggle, switchToggle] = useToggle();

  return (
    <>
      <button aria-label="toggle-button" onClick={switchToggle}>
        toggle
      </button>
      {isToggle ? "on" : "off"}
    </>
  );
}
```

11. ### input-explain
In React (especially in versions before React 17+), SyntheticEvents are recycled for performance. That means the e object is cleared after the event handler finishes.

12. ### fix-handle-task
```javascript
const handleTask = (e: ChangeEvent<HTMLInputElement>) => {
  () => setTask(e.target.value);
};
// () => setTask(e.target.value); function is created but not called. so it should be just setTask(e.target.value);
```

13. ### fix-red-type-error
```javascript
import { useState } from "react";
import { ToDoInput } from "./TodoInput";

export function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const handleSetTasks = (task: string) => {
    setTasks([...tasks, task]);
  };

  console.log("tasks", tasks);

  return (
    <>
      <p>List of tasks</p>
      <div>
        {tasks.map((elem) => (
          <p>{elem}</p>
        ))}
      </div>
      <ToDoInput addTaskToList={handleSetTasks} />
    </>
  );
}
```

