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
| 4   | [Can browser read JSX?](#can-browser-read-jsx) 
| 5   | [What is babel?](#what-is-babel) 

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
   ______________

4. ### can browser read jsx
   Nope, it's used babel to transpile jsx code to regular JS.
   ______________

5. ### what is babel
   1. Babel is transpiler, with help of it developers can use newest features of language.
   2. Babel configuration. You need node.js, npm. Later create configuration file, babelrc. NExt install plugins, presets. And finally creating build script.
   3. Source target difference. Source - code written in a way Babel can understand it, target - code that should be in the end as output.
   4. How to configure babel for a specific framework? Each framework like react or angular has its own preset. Preset-react, preset-angular etc.
   5. @babel/runtime - helpers for optimisinig babel work. It helps for example to exclude repeatable code.
   

