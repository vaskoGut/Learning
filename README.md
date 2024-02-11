# JavaScript
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Difference let const var](#what-is-difference-between-let-const-var)                                     |
| 2   | [Difference between arrow function and function declaration, expressions](#arrow-function-explanation)                                                                             |
| 3   | [What is generator ](#generator-function)                                                                             |

# React
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is react](#what-is-react)                                     |
| 2   | [What is unindirectional data flow](#what-is-unindirectional-data-flow) 
| 3   | [What is state in react?](#what-is-state-in-react) 
| 4   | [Can browser read JSX?](#can-browser-read-jsx)
| 5   | [What is DOM, Virtual DOM?](#what-is-dom)
| 6   | [What is difference between es5 and es6?](#difference-between-es6-es6)
| 7   | [How to create basic React app?](#basic-react-app)
| 8   | [what is event in React? What is synthetic event?](#what-is-event-in-react)
| 9   | [Explain how lists work in React?](#lists-in-react)
| 10   | [Why key should be added to the list elements?](#keys-in-react-lists)
| 11   | [What are the components in React?](#commponents-in-react)

# Other
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Monorepo and polyrepo difference](#monorepo-and-polyrepo-difference)                                     |
| 2   | [What is webhooks?](#what-is-webhooks) 
| 3   | [What is babel?](#what-is-babel)
| 4   | [What is time complexity? Please provide examples](#time-complexity-space-complexity)  

1. ### what is difference between let const var
   **Var** - scope is globar or function ( if var's used inside function ).
   Let, const - they have block scope.
   
   if(true) {
     let test = 'test'; // test variable is available only inside if block
   }
 
   **Let** - can be reasigned.
   **Const** - can't be reasigned.
   
2. ### arrow function explanation
   **Functional expression** - function defined inside an expression. Example:

    ```javascript
       const getRectArea = function (width, height) {
        return width * height;
       };
       console.log(getRectArea(3, 4));
   ```
   **Functional declaration** - function declared with function keyword. Functional declaration creates binding of new function to a given name.

    ```javascript
       function calcRectArea(width, height) {
          return width * height;
       }
       console.log(calcRectArea(5, 6)););
   ```
   **Arrow function** - don't have binding to this, arguments, super and shouldn't be used as methods.
   They can't be used as a constructors - we can't call them with new keyword. Cannot be used as generator functions.

 3. ### Generator function
    **Generator**  is a process that can be paused and resumed and can yield multiple values. Generator returns iterable Geneartor object.
       ```javascript
         function* generator(i) {
            yield i;
            yield i + 10;
            yield i + 20;
          }
          
          const gen = generator(10);
          
          console.log(gen.next().value);
          // Expected output: 10
          
          console.log(gen.next().value);
          // Expected output: 20
          
          console.log(gen.next().value);
          // Expected output: 30

          console.log(gen.next().value);
          // Expected output: undefined
       ```
       Calling .next() returns an object in form:
       ```javascript
         { 
           value // current value of the iterator, 
           done  // boolean indicating if iteration is finished 
         }
       ```
     
      ______________



1. ### What is react
   **React** - is library. Main React features:
   1. JSX - js extension. We can write HTML structures inside JS.
   2. Components - we create reusable, independent components.
   3. Virtual DOM - it's virtual copy of DOM, with help of it preformance is improved. With help of that we update only necessary things in DOM, not rebuilding all DOM tree.
   4. One way data-binding.
   5. high performance - while updating components - we don't refresh, update all application.
      
   ______________

2. ### What is unindirectional data flow
   Children component're placed inside parent component. Data's transfered from parent component to child component. Benefits unindirectional data-flow:
       1. Easy to debug - cause we know how and frome where data is coming.
       2. Less errors - more control on data.
   ______________

3. ### What is state in react
   State in React - is object containing component an information. It can be changed. When state's changed, component is rerendered.
   ______________

4. ### Can browser read jsx
   Nope, it's used babel to transpile jsx code to regular JS.
   ______________
   
5. ### what is dom
   **Document Object Model** - is interface that treats HTML as a tree structure, in which each node is object representing a part of the document. DOM defines a way nodes are accessed and manipulated.
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/6c69442b-2d90-40a8-898d-f3e9d695c19a)
   **Virtual DOM** - it's virtual copy of DOM, with help of it preformance is improved. With help of that we update only necessary things in DOM, not rebuilding all DOM tree.  
   React **Reconciliation** process of updating DOM. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.
   ______________
6. ### difference between es6 es6
   - es6 ins newest version of js
   - es6 has additional type Symbol
   - es6 has 2 new ways of declaring variables: let and const
   - es6 has arrow function
   - little bit difference while importing, exporting components, declaring classes
   ______________
 7. ### basic react app
    Install node, instal crea-react-app. It's ready to use.
    ______________
 8. ###  what is event in react
     Event in React is action triggered on some change in the user interface. It can be click or key pressing for example.
     **Synthetic event** - synthetic event is object we get after triggering some event. An example:

   ```javascript
      <button onClick={e => {
        console.log(e); // React event object
      }} />
   ```
 9. ###  lists-in-react
     List is created with help of map method.
     ![image](https://github.com/vaskoGut/Learning/assets/7413864/9b735b91-5d29-48cd-80b0-ec723397786f)

 10. ###  keys in react lists
     Key is a unique identifier and it is used to identify whhich element of list was updated, deleted or added. Keys also help to improve performance of rendering lists.

     _____________

 11. ###  commponents in react
     React application consists of react component. Component is a reausable piece of code. Component can be stateless or statefull.

     _____________

 
  1. ### Monorepo and polyrepo difference
  **Monorepo** - its one repo, containing multiple applications, projects with well defined, structured relationships.
  
   **Polyrepo** - a repo for each team, application, project. It's often has a single build artifact, and simple build pipeline.
   Build artifact - files produced by build ( different logs, reports, distribution pacakgs ).

    1. Is **Monolith** same as monorepo? No, monolith itj just repository containing a application, but there is no well prepared dependencies, it's not wel structured and encapsulated.
    2. What is advantage of **polyrepo**? With help of it we can keep team autonomy. You can decide what you do with your repo, who can have access for it, when to deploy it etc.
    3. What is disadvantages of **polyrepo**? 
    - problem when you want to share code betweend different repos;
    - problems with compability of third party libraries;
    - time consuming configuration of each repo and synchronizing it.
    - if each team works only on 1 repo, code can be repeated etc;
    - if we have some share repo, library and you need to make change, it should be tested change for reach repo.
    - each repo can have different settings tools
    - it can be problem to use projects like that.
    4.What are advantages of **monorepo**? 
    - easy to create new project;
    - it's easy to test your change for different packages or applications.
    - it's better developer mobility and performance while working on monorepoy
    - all projects inside monorepo using same versions of thirls party libraries;
    - atomic commits - you dont need different projects, apps dependency after each commit, change
  
   
![image](https://github.com/vaskoGut/Learning/assets/7413864/877fa3c9-bce1-48ef-9b1a-7c0db0cece9d)

______________
 2. ### what is webhooks
  **Webhooks** - automated messages sent from apps when something (event) happens. Example payPal sends you notification, when some of clients payed you some money. OR when some ecomerce shops notify you when you have some new order.
  It's a way one app push automatically notifications to other app.
  - what is difference between webhook and API? To put it simply - API does stuff when you ask it to. Webhooks does it when some situation, event is triggered. We can say it works on its own.
 ______________
 3. ### what is babel


    1. Babel is transpiler, with help of it developers can use newest features of language.
    2. Babel configuration. You need node.js, npm. Later create configuration file, babelrc. NExt install plugins, presets. And finally creating build script.
    3. Source target difference. Source - code written in a way Babel can understand it, target - code that should be in the end as output.
    4. How to configure babel for a specific framework? Each framework like react or angular has its own preset. Preset-react, preset-angular etc.
    5. @babel/runtime - helpers for optimisinig babel work. It helps for example to exclude repeatable code.
______________

 4. ### time complexity space complexity

     **Time complexity**. It calculates amount of time it takes to run an algorithm.
      - **O(1)** - constant. Run time is independent - we don't worry about the input size.
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/b88820ea-d150-4fcf-89a4-8c4f89b62001)
        Examples: accessing an Array Element, REtrieving a Value from object. Retrieving element of array or object takes constant times.
      - **O(n)** - linear time algorithm - execution is proportional to the input size.
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/ff988dc4-2fdc-470c-a4bb-043047811af2)
      -  **O(n²)**  - quadratic algorithm - number of steps is square root of input size. For example if we have for loop inside another for loop, and these loops're manipuating on the same input.
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/ea41b11f-1dd6-462f-aa80-2f02267c0baf)

     **Space complexity** - amount of memory space required to solve some problem/algorithm. Examples:
      - **O(1)** - constant. Run time is independent - we don't worry about the input size.
       ```javascript
          function add(n1, n2) {
            const sum = n1 + n2
            return sum
          }
       ```

      Space complexity is constant. Cause input is constant. We'll always get 2 parameters.


    - **O(n)** - Linear. Space complexity is increasing depending on parameter length.

       
     ```javascript
        function sum(arr) {
          const sum = 0
          for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
          }
          return sum
        }
     ```
      
      It can be also logarithmic O(log n) time complexity or quadratic O(n^2) f.e. 
______________

What is cookies, sessiens, tokens 
what is turborepo in few words

What is Encapsulation
https://www.linkedin.com/pulse/what-encapsulation-javascript-amit-kumar/
https://dev.to/kozlovzxc/js-interview-in-2-minutes-encapsulation-oop-2ico

arrow function with normal functino difference:
https://bootcamp.uxdesign.cc/arrow-functions-vs-regular-functions-in-javascript-29db7928d696


preventDefault(): Prevents the default browser action for the event.
stopPropagation() - difference
