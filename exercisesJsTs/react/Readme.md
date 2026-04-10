# useReducer
https://github.com/vaskoGut/Learning/blob/main/exercisesJsTs/react/useReducer/Readme.md

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

| 14  | [Imagine you have array of objects. And want to change 1 of the object in array. How to do it?](#mutate-objects-react)                               |

| 15  | [Why filter below is ok? No need to reasign tasks?](#react-filter-method-thing)                               |
```javascript 
const filteredTasks = tasks.filter((elem) => elem.id !== id);
setTasks(filteredTasks);
```

| 16 | [Is it ok saving filters like that? or better to do it outside of useEffect? ](#use-effect-calculating-smth)                               |
<img width="547" height="205" alt="image" src="https://github.com/user-attachments/assets/942fb2fb-0ea7-4f10-b503-220c82960616" />

| 17 | [Create array in react with any value. Save it to localStorage and then read from localstorage and save value to some state variable](#localStorage-exercise)                               |
Remember to handle edge case. If no value saved to Localstorage

| 18 | [you want to tye setState action in react. And sent that from parent to child. How to do it?](#typin-setstate-action-react)                               |

| 19 | [1. Type e event in React.2. type onKeyDown button event ](#typing-event-react)                               |

| 20 |  [What is wrong here with all case?](#filter-method-fix-wrong)                               |
```javascript
  const filteredTasks = tasks.filter((task) => {
    if (filter === TASKS_STATUS.completed) return task.completed === true;
    if (filter === TASKS_STATUS.all) return task;
    if (filter === TASKS_STATUS.toDo) return task.completed !== true;
  });
```

| 21 |  [Why code below is bad? How to do it in better way?](#correct-localstorage-file)                               |
```javascript
  const tasksFromStore = JSON.parse(
    localStorage.getItem(LOCAL_STOR_KEY) || "[]"
  );
```

| 22 | [ Why using useReducer like that is bad? ](#correct-localstorage-file)                               |
<img width="646" height="283" alt="image" src="https://github.com/user-attachments/assets/7fb9da42-8c54-4f3b-8d2a-0847fdcf86cb" />

| 23 | [ If your hook returns array, how to type it? ](#type-array-in-hook)                               |
```javascript
  return [todos, setTodos]
```

| 24 | [ This code increases value for 10 after each click. How can it be refactored with help of Math object?](#state-update-math-obj)                               |
```javascript
   const increase = () => {
        setProgress((prev) => {
            if (prev === 100) return 100;
            return prev + 10;
        })
    };
```
| 25 | [Write caceling request with abrotController inside fetch?](#cancel-fetch-request-abort)                               |

| 26 | [How do you decide whether a piece of UI should be a separate React component?](#react-seperate-component)                               |

| 27 | [Imagine you have search input with add button, and want to handle adding new item to list - how to handle empty value??](#react-handling-empty-value)                               |

| 28 | [Why code below doesn't work? What 1 of the most important react rules does it break?](#changing-react-object-state)                               |
```javascript
  const handleClick = (id:string) => {
    setActiveIds(prev  => {
      console.log('prev', prev);
      if(prev[id]) {
        prev[id] = null
      } else prev[id] = id;
      return prev;
    });
  }
```

| 29 | [How to type initial object state with string properties and boolean values?](#typing-initial-react-state)                               |
| 30 | [Why state isnt updated her ecorrectly?](#state-update-correctly)                               |
<img width="352" height="208" alt="image" src="https://github.com/user-attachments/assets/d4497aac-5f87-46d5-9cb1-abebdfa9ffde" />
| 31 | [Why asumc awaot dpesn't work with setState?](#async-await-setState)                               |
| 32 | [Explain what is batching in React?](#batching-react)                               |

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

14. ### mutate-objects-react
```javascript
  setUsers(prev =>
    prev.map(user =>
      user.id === 2
        ? { ...user, age: 30 }
        : user
    )
  );
```

15. ### react-filter-method-thing
we just use filter method - cause it's creating new array. Now need to do smth lik [...filteredTasks]

16. ### use-effect-calculating-smth
✅ Best practice: leave it as a derived variable outside of useEffect. Only use useEffect for side effects (API calls, localStorage sync, subscriptions, etc.), not for calculating values for rendering.

17. ### localStorage-exercise
<img width="583" height="164" alt="image" src="https://github.com/user-attachments/assets/cc80a822-14ad-4df4-b7ba-341ae4c8dce4" />

18. ### typin-setstate-action-react
```javascript
// task type is just default start state value
React.Dispatch<React.SetState.Action<TaskType[]>
```

19. ### typing-event-react
```javascript
// input value={currentTask} onChange={handleTask} type="text" />
// import { ChangeEvent } from "react";
e: ChangeEvent<HTMLInputElement>
```
```javascript
  onKeyDown={(e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "enter") handleAddTaskToList();
  }}
```

20. ### filter-method-fix-wrong
```javascript
  const filteredTasks = tasks.filter((task) => {
    if (filter === TASKS_STATUS.completed) return task.completed === true;
    if (filter === TASKS_STATUS.all) return task; // here should be returned true/false not a task
    if (filter === TASKS_STATUS.toDo) return task.completed !== true;
  });
```

21. ### correct-localstorage-file
```javascript
const tasksFromStore = JSON.parse(
  localStorage.getItem(LOCAL_STOR_KEY) || "[]"
);

// so localstorage can crash, if json data are corrupted in some way
// better approach:

```javascript
  try {
    const tasksFromStore = JSON.parse(
      localStorage.getItem(LOCAL_STOR_KEY)
    );
    if (tasksFromStore) setTodos(JSON.parse(data));
  } catch {
  ssetTodos("[]");
}
```

22. #correct-localstorage-file
<img width="646" height="283" alt="image" src="https://github.com/user-attachments/assets/9ea5f8a7-d62d-442c-a215-547c75de9512" />
```javascript
  cause we directly mutating state
```
// correct way:
<img width="541" height="403" alt="image" src="https://github.com/user-attachments/assets/75c4b495-e66b-4e7a-97fd-5f6c40847461" />

23. ### type-array-in-hook
```javascript
  return [todos, setTodos] as const;
```
without it typescript expects smth array[0], array[1], not a tupled array

24. ### state-update-math-obj
```javascript
   // exercise
   const increase = () => {
        setProgress((prev) => {
            if (prev === 100) return 100;
            return prev + 10;
        })
    };
```

```javascript
   // solution
   setProgress((prev) => {
      return Math.min(prev + 10, 100);
   })
   // if prev value is bigger than 100, Math.min will set it to 100. So we dont need additional comparison.
```

25. ### cancel-fetch-request-abort
```javascript
  useEffect(() => {
    const abort = new AbortController();
    setLoading(true);

    fetch(URL, { signal: abort.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`error while fetching data" ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });

    return () => {
      abort.abort();
    };
  }, []);
```


```javascript
  // example wit use Ref. but in most Cases example above is good
  useEffect(() => {
  controllerRef.current = new AbortController();

  fetch(`url/${postId}`, { signal: controllerRef.current.signal })
    .then((res) => res.json())
    .then(setData);

  return () => controllerRef.current.abort();
}, [postId]);
```

```javascript
  useEffect(() => {
  const abortController = new AbortController();

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await fetch(URL, {
        signal: abortController.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  fetchData();

  return () => {
    abortController.abort();
  };
}, [URL]);
```

27. ### react-handling-empty-value
```javascript
   const addItem = () => {
    if (inputValue.trim() === "") return;

    setItems((prevItems) => [...prevItems, inputValue]);
    setInputValue("");
  };
```

28. ### changing-react-object-state
It breaks rule - don't mutate react state directly!

```javascript
const handleClick = (id: string) => {
  setActiveIds(prev => {
    return {
      ...prev,
      [id]: prev[id] ? null : id
    };
  });
};
```

29. ### typing-initial-react-state
const [activeIds, setActiveIds] = useState<Record<string, boolean>>({});

30. ### state-update-correctly
In React, state updates are asynchronous. When you call setInputCount(e.target.value), the inputCount variable does not immediately change.
Fix:
```javascript
   <input
        type="number"
        value={inputCount}
        onChange={(e) => {
          setInputCount(e.target.value);
          setCounter(inputCount);
        }}
      />
```

31. ### async-await-setState
Key point:
React state updates (via setState or setInputCount) are not asynchronous in the sense of returning a promise. They are batched and scheduled by React, but setState doesn’t return a Promise, so await has no effect.

Example that won’t work:
```javascript
  onChange={async (e) => {
    await setInputCount(e.target.value); // ❌ This does nothing
    setCounter(inputCount); // still gets old inputCount
  }}
```

32. ### batching-react

Batching is when React groups multiple state updates together and then processes them all at once, instead of updating the DOM immediately for each setState call.

Think of it like this:

Without batching:
```javascript
  setInputCount(1) → DOM updates
  setCounter(1)    → DOM updates again
```

Two separate updates → two DOM renders.

With batching:
```javascript
  setInputCount(1)
  setCounter(1)
```

React combines them into a single update → only one DOM render happens.


✅ This is much faster and avoids unnecessary re-renders.
| 1 | [How do you decide whether a piece of UI should be a separate React component?](#react-seperate-component)                               |
| 2 | [How do you decide where to store state in a React app?](#react-store-state)                               |

1. ### react-seperate-component
I usually evaluate based on reusability, complexity, and separation of concerns. If a UI element is used in multiple places, has its own state or behavior, or could become too complex if embedded in a parent, I create a separate component. For example, in a dashboard project, I created a Card component that handled both layout and dynamic content; this allowed other pages to reuse it with different data. I also make sure the component is configurable via props without tightly coupling it to a specific page."
✅ Key points: reusability, maintainability, prop-driven, separation of concerns.

2. ### react-store-state
I distinguish between local state, shared state, and server state. Local UI state, like toggles and form inputs, stays in the component. Shared state, like user authentication or theme settings, goes into a global store, e.g., Context API or Redux/Zustand. Server state fetched from APIs usually stays in React Query or SWR. For example, in our wellness app, the ‘user workouts’ data is fetched via REST API and stored in React Query, while form inputs for creating a new workout are local to the form component. This approach prevents unnecessary re-renders and keeps state predictable."
