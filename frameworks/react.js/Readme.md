# REACT JS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [1. What for is used useEffect? When useEffectIsCalled? 3. Diff between useEffect and useLayoutEffect? ](#react-useEffect)                               |

1. ### react-useEffect
1.  **UseEffect** allows to perform you side effects in your application ( fetchingdata, diretly update dom, setting timers).
2. useEffect is called after first render, and every time component is updated.
3. Difference between useEffect and UseLayoutEffect ( Useeffect runs after browser finishing painting,useLayoutEffect runs synchronically with painting browser). 
UseEffect  has built-in error handling, so it doesn't crush entire application,whiel  useLayoutEffect
doesn't have it.
