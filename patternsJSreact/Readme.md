# REACT PATTERNS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is render prop pattern in React?](#render-prop)                                                                                                |

1. ### render-prop

// Simple renderCompoent function for rendering different version of header:
```javascript
   <Header renderComponent={() => <p>test</p>} />
   <Header
     renderComponent={() => (
       <>
         <p>test</p>
         <span>coool</span>
       </>
     )}
   />
   
   export function Header({ renderComponent }) {
     return renderComponent();
   }
```

// You can also pass logic (in this case it's state ) this way:
```javascript
   function Toggle({ render }) {
     const [on, setOn] = React.useState(false);
     const toggle = () => setOn((prev) => !prev);
     return render({ on, toggle });
   }
   
   <Toggle render={({ on, toggle }) => (
     <button onClick={toggle}>{on ? 'ON' : 'OFF'}</button>
   )} />
   
   <Toggle render={({ on, toggle }) => (
     <button onClick={toggle}>{on ? 'INWE' : 'WE INWE'}</button>
   )} />
```

NOTE: Nowwadays in most cases is better to use hooks. This way code can be more readable. Also inside hooks you can use life cycle react methods/hooks. You can't do it with help of render props.
