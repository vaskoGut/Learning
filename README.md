# JavaScript Typescript
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Difference let const var](#what-is-difference-between-let-const-var)                                     |
| 2   | [Difference between arrow function and function declaration, expressions](#arrow-function-explanation)                                                                             |
| 3   | [What is generator ](#generator-function)                                                                             |
| 4   | [Types Enums Interface ](#types-enums-interfaces)                                                                             |
| 5   | [Difference between map and forEach ](#map-foreach-difference)                                                                             |
| 6   | [What is this in js? Can you change value of this? What is this alone, inside object, inside event handler, inside function? What is for are used call,apply methods?](#this-meaning)                                                                             |

# Exercises Javascript Typescript
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What will be result of the next code?](#for-each-result-exercise)                                     |f
| 2  | [Split string by some string?](#split-string-exercise)                                     |

# React
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is react](#what-is-react)                                     |
| 2   | [What is unindirectional data flow](#what-is-unindirectional-data-flow)                                     | 
| 3   | [What is state in react?](#what-is-state-in-react)                                     | 
| 4   | [Can browser read JSX?](#can-browser-read-jsx)                                     |
| 5   | [What is DOM, Virtual DOM?](#what-is-dom)                                     |
| 6   | [What is difference between es5 and es6?](#difference-between-es6-es6)                                     |
| 7   | [How to create basic React app?](#basic-react-app)                                     |
| 8   | [what is event in React? What is synthetic event?](#what-is-event-in-react)                                     |
| 9   | [Explain how lists work in React?](#lists-in-react)                                     |
| 10   | [Why key should be added to the list elements?](#keys-in-react-lists)                                     |
| 11   | [What are the components in React?](#commponents-in-react)                                     |
| 12   | [How to declare state in React?](#state-in-react)                                     |
| 13   | [What are props in React?](#props-in-react)                                     |
| 14   | [What is state and props difference?](#state-props-difference)                                     |
| 15   | [What is high ordered comopnent?](#high-ordered-component)                                     |
| 16   | [UseEffect with lifeCycle methods](#use-effect-lifecycle-methods)                                     |
| 17   | [what is useMemo?](#use-memo)                                     |
| 18   | [what are controlled and uncontrolled components?](#controlled-uncontrolled-componenent)                                     |
| 19   | [what are react hooks? what is bad practices using hooks?](#react-hooks)                                     |
| 20   | [what is useEffect and when we use it? what is difference in comparison to useLayouteffect? When useEffect is called?](#use-effect-hook)                                     |
| 21   | [when do you need to use useCallback?](#use-callback)                                     |
| 22   | [what is useRef hook? Example of use. Is value that useRef returns is mutable?](#use-ref)                                     |     
| 23   | [what is useRef useState difference?](#use-state-use-ref-diff)                                     |
| 24   | [what is react context? when do we need it? Please list example of data stored in context](#react-context)                                     |

# Other
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Monorepo and polyrepo difference](#monorepo-and-polyrepo-difference)                                     |
| 2   | [What is webhooks?](#what-is-webhooks)                                     | 
| 3   | [What is babel?](#what-is-babel)                                     |
| 4   | [What is time complexity? Please provide examples](#time-complexity-space-complexity)                                     |  
| 5   | [Please name some frameworks](#name-some-front-end-frameworks)                                     |  

1. ### what is difference between let const var
   **Var** - scope is global or function ( if var's used inside function ).
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
   4. ### types enums interfaces
      1. What are types, when do we use it? 
       **Types** are definitions of data type. Typescript compiler use it to  detect errors.
      2. What are **Tuples**?  
      Tuples are typed arrays. 
      3. What are  enums? When to use?
         **Enums** are collection of constants
      5. 
      6. 
      Here more:  https://blog.logrocket.com/typescript-enums-vs-types/

  5. ### map-foreach-difference
      **Map** return array. But doesn't modify initial array.
      **ForEach** doesn't return array. But runs function for each element of array. Foreach returns original array.

  6. ### this-meaning

       1. This is keyword. It refers to different objects depending on how and where it used.
       2. You can't change this value.
       3. ALone **this** refers to the global object.  INside function - this refers to the global object also. In event handlers this refers to the hTML object.
       4. Call and apply methods are used to call 1 object method on another object as argument

__________________________________________________________________________________________________________________________________________

# Exercises Javascript Typescript
1. ### for-each-result-exercise

    ```javascript
       const names = ["Rohit","Aakash","Vinay","Ashish","Vasu"];
       const tes = names.forEach((item) => item + 'lolo');
    ```

    Answer: it will be undefined, cause forEach doesn't return any walue, it just runs function for each element of array

2. ### split-string-exercise
   ```javascript
     var s = 'john smith~123 Street~Apt 4~New York~NY~12345';
     s.split('~')
    ``
__________________________________________________________________________________________________________________________________________



1. ### What is react
   **React** - is library. Main React features:
   1. JSX - js extension. We can write HTML structures inside JS. For example use HTML structures inside if structure:
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/7c2ec527-a760-46bf-ae67-a8d2e10d6f4b)


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

 11. ###  commponents in react
     React application consists of react component. Component is a reausable piece of code. Component can be stateless or statefull.

 12. ###  state in react
     You needed constructor and set value to the this.state. Now you can just use useState hook.

 13. ###  props in react
     Props are short for properties. In React it's object, storing value of attributes, smth. like html attributes. We need it to pass data from component to the component.
     Inside component we have an access to props in similar way as we have an access to the function parameters.

 14. ###  state props difference
     State is muttable. Props are unmutable. State refers to internal data of component. Props are date transfered from parent component to the child.

 15. ###  high-ordered-component
     High ordered component is wrapper for other components. They allow to reuse some logic across different components. 
     F.e. you want to add logger HOC, which will be loging information about mounting, demounting component. 
      export default withLogger(SomeComponent);

 16. ###  use-effect-lifecycle-methods
    What are standart lifecycle React methods?
    **getInitialState()**, **componentDidMount()**, **shouldComponentUpdate()**, **componentDidUpdate()**, **componentWillUnmount()**

 17. ###  use-memo
    UseMemo() hook helps to cache, remember the result of calculations between rereners.

     // trivial example of using useMemo

      ```javascript
        const sortedNames = useMemo(() => {
         [...someValue].sort();
        }, [names]);
      ```
      
     ```

    // if we wanna have different value of method, depending on url value:
     ```javascript
        const method = useMemo(() => {
           method: "Post",
           url
        }, [url]);
      ```
  18. ###  controlled-uncontrolled-componenent
  We used **controlled** or **uncontrolled** components inside form ( while dealing with inputs ).
  If we have input connected to the state, and handle that value. It's controlled component. Displayed data is syncronized with the state of component.
  ![image](https://github.com/vaskoGut/Learning/assets/7413864/58c5e8a2-5102-4f45-a6c9-8b5ba7ce6ca7)

  **Uncontrolled** components hold their state internally. And you query DOM using a ref to find its current value when you need it.

  19. ###  react-hooks
  Hooks was added in React 16.8 to allow  function components to have access to state and other React features.
  Bad practices: - dont dynamically mutate a hook, dont dynamically use hook. Example: don't push hook as prop.

  20. ###   use-effect-hook
      1.  **UseEffect** allows to perform you side effects in your application ( fetchingdata, diretly update dom, setting timers).
      2. useEffect is called after first render, and every time component is updated.
      3. Difference between useEffect and UseLayoutEffect ( Useeffect runs after browser finishing painting,useLayoutEffect runs synchronically with painting browser). 
      UseEffect  has built-in error handling, so it doesn't crush entire application,whiel  useLayoutEffect
      doesn't have it.

  21. ###   use-callback
      If you need call function, but don't want it toretriggered in useEffect, then you will need useCallback.
      If we want to pass some function, to the component, and we don't want that component to be rerendered.
      Then can use useCallback. Example:
      ![image](https://github.com/vaskoGut/Learning/assets/7413864/b131c944-ff04-4800-8e52-c9e9fbde5161)

   22. ###   use-ref
       1. UseREf is hook, which we need if we want to operate directly with DOM.
       2. Example of use: if we need for example some input in form to be auto  focused. We need to find that element in DOM and autofocus.
       3. UseReff return object with current property.
          ```javascript
            const refValue = useRef(0); // this will return { current: 0 } object.
          ```
       UseRef example:
       ![image](https://github.com/vaskoGut/Learning/assets/7413864/51454d23-3adb-4503-aabd-a5fdd38c19af)

    23. ### use-state-use-ref-diff
       With help of both you can save some value.
       Whatever you store in useRef is not reactive, it means it will not cause component rerender.

    24. ### react-context
        React context is alternative to the 'prop drilling' ( passing data from parent to children ). Context is often consideredas  lighter, simpler solution to using Redux for state management.
        With context API we have 1 store where all data is passed to and from all data is extracted from.
        Example of data stored in context: template language, user authentificated data. ANother good example is dark mode - if you want an access to it from each component.

  ________________________________________________________________________________________________________________________________


 
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

 5. ###  name some front end frameworks
Next.js, Gatsby.js.
   
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
