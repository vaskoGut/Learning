# JAVASCRIPT TYPESCRIPT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is render prop pattern in React?](#render-prop)                                                                                                |

***REACT***
1. ### render-prop

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
