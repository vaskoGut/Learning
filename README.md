# JavaScript
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Difference let const var](#what-is-difference-between-let-const-var)                                     |
| 2   | [What is what](#what-is-what)                                                                             |


1. ### what is difference between let const var
  **Var** - scope is globar of function ( if var's used inside function ).
  Let, const - they have block scope.
  
  if(true) {
    let test = 'test'; // test variable is available only inside if block
  }

  **Let** - can be reasigned.
  **Const** - can't be reasigned.
   
2. ### what is what

# React
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is react](#what-is-react)                                     |
| 2   | [What is unindirectional data flow](#what-is-unindirectional-data-flow) 
| 3   | [What is state in react?](#what-is-state-in-react) 

1. ### what is react
  **React** - is library. Main React features:
   1. JSX - js extension. We can write HTML structures inside JS.
   2. Components - we create reusable, independent components.
   3. Virtual DOM - it's virtual copy of DOM, with help of it preformance is improved. With help of that we update only necessary things in DOM, not rebuilding all DOM tree.
   4. One way data-binding.
   5. high performance - while updating components - we don't refresh, update all application.
      
______________

2. ### what is unindirectional data flow
   Children component're placed inside parent component. Data's transfered from parent component to child component. Benefits unindirectional data-flow:
       1. Easy to debug - cause we know how and frome where data is coming.
       2. Less errors - more control on data.
______________

3. ### what is state in react
   State in React - is object containing component an information. It can be changed. When state's changed, component is rerendered.
