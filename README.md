eact-context
# JAVASCRIPT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Difference let const var](#what-is-difference-between-let-const-var)                                     |
| 2   | [Difference between arrow function and function declaration, expressions](#arrow-function-explanation)                                                                             |
| 3   | [What is generator ](#generator-function)                                                                             |
| 4   | [Types Enums Interface. What for are used types? What are tuples? What is union, intersection? What is intersection types? What is record type - provide example](#types-enums-interfaces)                                                                             |
| 5   | [Difference between map, filter and forEach. Does filter, slice methods create new array or mutating source? ](#map-foreach-difference)                                                                             |
| 6   | [What is this in js? Can you change value of this? What is this alone, inside object, inside event handler, inside function? What is for are used call,apply methods? If yout type this in console - what will you get?](#this-meaning)                                                                             |
| 7  | [Is setTimeOut async?](#settimeout-async)                                                                             |
| 8  | [What is Promise? Example of promise? What status promis returns? Is promise aycnronious? Name wayss of handling promises. What is promise all? Make a simple example of promise and promise.all](#example-promise)                                                                             |
| 9  | [What is Closure? Please provide examples. If variable is declared without keyword, is it global?](#closure-explanation)                                                                             |
| 10  | [What is differene between sppread and rest operator - name practical examples?](#rest-spread-operator-difference)                                                                             |
| 11  | [What are sets? How to convert Set type to the array? Example.](#set-object)                                                                             |
| 12  | [Why using try catch wrapper  instead just async await?](#try-catch)                                                                             |
| 13  | [types and interfaces diff? Can you shape type of object with types not interface?](#type-interface-diff)                                                                             |
| 14   | [How to make array from collections js? What is js collection?](#collection-js-array)                                     |
| 15   | [what is 3rd stringify parameter?](#stringify-3rd-parameter)                                     |
| 16   | [what is difference between try block - catch/finally? Please provide an example](#try-catch-finally)                                     |
| 17   | [what will be result of displaying this inside arrow function ?](#arrow-function)                                     |
| 18   | [what is object assign ?](#object-assign)                                     |
| 19   | [How does work object create? ?](#object-create)                                     |
| 20   | [Name difference between copying primitive and object ( reference ) ? explain why let a = {};let b = {} not equal objects](#object-primitive-reference)                                     |
| 21   | [Does nested function have an access to the outer function in JavaScript? And vice versa ( opposite) ](#inner-outer-function-scope)                                     |
| 22   | [What is IIFE (immidietly invoked function expression](#immidietly-invoked-function-expression)                                     |
| 23   | [What are module exports in js? What is module in js?](#module-exports)                                     |
| 24   | [Why code .then(someFunction) works same as .then((data)=>someFunction(data)) ? What are functions in JS - and what can you do with function in JS?](#calling-function-reference)                                     |
| 25   | [When you want to send json data to the server in what format should it be sent ?](#json-data-to-server)                                     |
| 26   | [What is anonymous function in JS ?](#anonymous-function)                                     |
| 27   | [What is nullish coalescing operator?](#nullish-coalescing)                                     |
| 28   | [What is script diff, async difference?](#script-async-deffer)                                     |
| 29   | [What is for used script tag?](#script-tag)                                     |
| 30   | [Difference between inline and external js? What is an advantage of external js loading?](#inline-external-js)                                     |
| 31   | [how can you test if a script has loaded successfully??](#loading-script-successfully)                                     |
| 32   | [How can you prevent the browser from caching a JavaScript file?](#prevent-caching)                                     |
| 33   | [What tools ( script loaders ) can you use for script loading?](#script-loaders)                                     |
| 34   | [What are inferrede types in ts?](#inferred-types)                                     |


# Exercises Javascript Typescript
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What will be result of the next code?](#for-each-result-exercise)                                     |
| 2  | [Split string by some string?](#split-string-exercise)                                     |
| 3  | [Previoius state exampe?](#previous-state-example)                                     |
| 4  | [Spread object with new key value?](#spread-object-kay-value)                                     |
| 5  | [How to  fix this infinite rendering problem in provided example?](#infinite-rendering)                                     |
| 6  | [How recursion works in javascript?](#recursion-javascript)                                     |
| 7  | [How to check if value is undefuined or null, if yes return other value ( some operator )?](#nullish coalescing)                                     |
| 8  | [How can be used useRef to fix rerender ( multipla calling code inside useEffect f.e.) of compnent?](#useRef rerendering explanation)                                     |


let result = value ?? "default"; 
// If `value` is null or undefined, `result` will be "default"

# React
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is react](#what-is-react)                                     |
| 2   | [What is unindirectional data flow](#what-is-unindirectional-data-flow)                                     | 
| 3   | [What is state in react?](#what-is-state-in-react)                                     | 
| 4   | [Can browser read JSX?](#can-browser-read-jsx)                                     |
| 5   | [What is DOM, Virtual DOM?](#what-is-dom)                                     |
| 6   | [What is difference between es5 and es6?](#difference-between-es5-es6)                                     |
| 7   | [How to create basic React app?](#basic-react-app)                                     |
| 8   | [what is event in React? What is synthetic event?](#what-is-event-in-react)                                     |
| 9   | [Explain how lists work in React?](#lists-in-react)                                     |
| 10   | [Why key should be added to the list elements? Why index shouldn't be added as index?](#keys-in-react-lists)                                     |
| 11   | [What are the components in React?](#commponents-in-react)                                     |
| 12   | [How to declare state in React?](#state-in-react)                                     |
| 13   | [What are props in React?Are props mutable?](#props-in-react)                                     |
| 14   | [What is state and props difference?](#state-props-difference)                                     |
| 15   | [What is high ordered comopnent?](#high-ordered-component)                                     |
| 16   | [UseEffect with lifeCycle methods. Useeffect and useState difference](#use-effect-lifecycle-methods)                                     |
| 17   | [what is useMemo?](#use-memo)                                     |
| 18   | [what are controlled and uncontrolled components?](#controlled-uncontrolled-componenent)                                     |
| 19   | [what are react hooks? what is bad practices using hooks?](#react-hooks)                                     |
| 20   | [what is useEffect and when we use it? what is difference in comparison to useLayouteffect? When useEffect is called?](#use-effect-hook)                                     |
| 21   | [when do you need to use useCallback?](#use-callback)                                     |
| 22   | [what is useRef hook? Example of use. Is value that useRef returns is mutable?](#use-ref)                                     |     
| 23   | [what is useRef useState difference?](#use-state-use-ref-diff)                                     |
| 24   | [what is react context? when do we need it? Please list example of data stored in context](#react-context)                                     |
| 25   | [what is the recommended way to structure your React code?](#react-structuring-code)                                     |
| 26   | [what is good way to test your reactapplications?what is end-2-end testing? what is unit testing? What yuu use for unit  testse](#react-test-how-work)                                     |
| 27   | [what is react dev tools? When do you need it as rule?](#react-dev-tools)                                     |
| 28   | [what is create portal? Provide some example of using it. What are downsides of useing portals?](#react-portals)                                     |
| 29   | [what is lazy loading? Explain when you need it. What is difference between lazy loading and dynamic imports ](#lazy-loading-dynamic-imports)                                     |
| 30   | [what is code splitting? What is lazy and suspense in react? Provide some example. What is Suspense built-int ](#code-splitting)                                     |
| 31   | [what is SSR and CSR?  Does Gatsby.js, NExt.js supports CSR or SSR? When pages are built in ssr in gatsby.js and when page are built in csr? What is advantage of using SSR? Provide some practical example of using SSR](#ssr-csr)                                     |
| 32   | [what is fragment?](#fragment-explanation)                                     |
| 33   | [what does mean useEffect with emtpy array?](#use-effect-empty-array)                                     |
| 34   | [asd some example of hook?](#example-hook)                                     |
| 35   | [Provide example of using event listener in react?](#event-listener)                                     |
| 36   | [What is wrong with too many useEffect?](#too-many-useeffect-explain)                                     |
| 37   | [JS design patterns used in React?](#design-patterns-react)                                     |
| 38   | [How can you improve performance of  react application with caching?](#caching-react)                                     |
| 39   | [Is it good practice to assign state value directly to the input inside form?](#form-input-react-handling)                                     |
| 40   | [Difference react hook and service](#react-hook-service-difference)                                     |
| 41   | [virtual-dom-shadow-dom-difference](#virtual-dom-shadow-dom-difference)                                     |
| 42   | [If we created element with react.createElement and want to render it in React 16. How to do it? Why it's deperecated and what is used now to render elment?](#react-create-element-react-dom)                                     |
| 43   | [Why we don't use react proptypes in projects What is alternative??](#react-proptypes-question)                                     |
| 44   | [What is event handler in React?](#react-event-handler)                                     |
| 45   | [When to use forwardRef?](#forward-ref)                                     |


# Redux
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is redux?](#what-is-redux)                                     |
| 2   | [What is redux action, store, reducer, dispatch?](#redux-action-store-reducer)                                     |
| 3   | [Difference between redux, redux tools, react-redux library?](#redux-redux-tools-react-redux)                                     |
| 4   | [Redux mobx difference?](#redux-mobx-difference)                                     |
| 5   | [Why is it better to have few reducers sometimes??](#redux-reducers)                                     |
| 6   | [Which library can be used to handle state immutability in redux, to improve work with redux state?](#redux-state-immutability)                                     |
| 7   | [Is redux state immutable?](#redux-state-immutability-more)                                     |
| 8   | [Immer library with redux state - why it's usefull?](#redux-immer-library)                                     |
| 9   | [What is store subscribe?](#store-subscribe)                                     |
| 10   | [What is middleware?](#what-is-middleware)                                     |
| 11   | [What is redux thunk?](#what-is-redux-thunk)                                     |
| 12   | [What is redux saga?](#what-is-redux-saga)                                     |
| 13   | [Why do we use redux toolkit?](#redux-toolkit)                                     |
| 14   | [Why do you need redux extra reducer?](#redux-extrareducer)                                     |
| 15   | [What is for redux toolkit asynch thunks?](#redux-toolkit-async-thunk)                                     |
| 16   | [What is for redux toolkit useSelector?](#redux-toolkit-use-selector)                                     |

# React-native
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is react native](#what-is-react-native)                                     |
| 2   | [How create class names, styles in react native?](#react-native-styling)                                     |

# GATSBY.JS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is gatsby.js?](#gatsby-framework)                                     |

# REACT-QUERY
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is advantages of react-query? when do we use stale:infinity? so if i don't set staleTime what does it mean? will be my query cached? ](#react-query))      |

# Other
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Monorepo and polyrepo (microservices) difference, advantages, disadvantages](#monorepo-and-polyrepo-difference)                                     |
| 2   | [What is webhooks? Name some real example. ](#what-is-webhooks)                                     | 
| 3   | [What is babel?](#what-is-babel)                                     |
| 4   | [What is time complexity? Please provide examples](#time-complexity-space-complexity)                                     |  
| 5   | [Please name some frameworks](#name-some-front-end-frameworks)                                     |
| 6   | [What is continues integration?](#continues-integration)                                     |
| 7   | [Functional and OOP programming difference?](#functional-oop-programming)                                     |
| 8   | [what is dependencies and devdependencies difference?](#dependencies-devdependencies-difference)                                     |
| 9   | [what does it mean in package.json (scripts-typecheck)?](#package-json-scripts-typecheck)                                     |
| 10   | [what does mean extensinos word in your paackage.json?](#extensions-word-package-json)                                     |
| 11   | [Explain this line ("transpile:clean": "rimraf ./gatsby-*.js ./src/**/*.js") of packages.json scripots configuration?](#transiple-clean-explanation)      |
| 12   | [What is markdown?](#markdown-explanation)      |
| 13   | [What is web component? Key features. What is difference between iframe and web compnents](#web-components)      |
| 14   | [what is lit library](#lit-library)      |
| 15   | [what is lit library](#web-api)      |
| 16   | [What is ways to improve performance of front-end application? What is prefetching? Code splitting?](#improving-performance)      |
| 17   | [1. Ways to improve front-end security? 2. how can be done XSS (cross site scripting ) attack on your page? ](#front-end-security)      |
| 18   | [How to improve WCAG standarts in your front-end app](#wcag-standarts))      |
| 19   | [Best practices for front-end](#best-practices-frontend))      |
| 20   | [SPA-PWA difference](#spa-pwa-difference))      |
| 21   | [Difference betwen SPA and gatsby.js, next.js pages](#spa-gatsby-next-difference)      |
| 22   | [What is cookies? What is localstorage? What does have bigger size, bigger capacity? What do we store in localStorage nad what as rule do we store in cookies?](#localstorage-cookies)                                     |
| 23   | [1. What is webpack? 2. Name difference between dev and prod webpack configuration. 3. Where is webpack configuration in gatsby.js, next.js frameworks? 4. "build": "webpack --mode production" - what will be result of this command?](#webpack-explanation)                                     |
| 24   | [How to create ( generate ) packages.json file?](#creating-package-json))      |
| 25   | [Does react testing library work on rendered react components or on dom?](#react-testing-library))      |
| 26   | [What for are used render, screen methods imported from react testing library?](#render-screen-testing-react-library))      |
| 27   | [What is advantages of react-query? when do we use stale:infinity? so if i don't set staleTime what does it mean? will be my query cached? ](#react-query))      |
| 28   | [What is UTC time?](#utc-time-explanation))      |
| 29   | [If we want to run express server, that serves react-app - how to do it in short?](#express-server-react))      |
| 30   | [what is middleware function?](#middleware-function))      |
| 31   | [what is fs module in node.js?](#fs-module))      |
| 32   | [what is an advantage or react hook form?](#react-hook-form)      |
| 33   | [what will do next axios header ''Content-Type': 'application/json'' in axios??](#axios-json-header)      |


SPA:
Works by loading a single HTML page and dynamically updating the content as the user interacts with the app.
Uses AJAX calls to interact with the server, fetching and rendering data without reloading the entire page.


PWA:
Extends the functionality of traditional web apps with features like offline access, background sync, and push notifications, thanks to Service Workers.
Can be installed on a user's home screen like a native app and can run independently of the browser.

# CSS STYLING
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is box model ( what are parts of box model)? ](#box-model)                                     |
| 2   | [What for wee need picture and sources ](#picture-sources)                                     |
| 3   | [What is viewport? ](#viewport-what)                                     |
| 4   | [What are possible values of position property? ](#position-property)                                     |
| 5   | [What are types of selectors in css? ](#selectors-css)                                     |
| 6   | [What is rem in css? ](#rem-css)                                     |
| 7   | [What is benefit of styled components in comparison to normal css, style styling? ](#styled-components)                                     |
| 8   | [Styled components and extending styles. how does it work (how can you create basic component and extended or just  different version of component)? ](#styled-components-extending-styles)                                     |
| 9   | [Difference betweein relative, absoulte, fixed, sticky? ](#relative-absolute-fixed-sticky)                                     |

# HTML
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is HTML? Why we use it? ](#html-explanation)                                     |

# GIT, DEPLOYMENT, PIPELINES
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is continuos deployment  ( what is continues deployment)? ](#continuos-deployment)                                     |
| 2   | [Git merge rebase difference? ](#merge-rebase-difference)                                     |
| 3   | [What is cherry pick? ](#cherry-pick)                                     |

# REDUX, REACT CONTEXT, REACT QUERY, STATE MANAGEMENT
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Difference beteen react context and redux ](#react-context-redux)                                     |



1. ### what is difference between let const var
   **Var** - scope is global or function ( if var's used inside function ).
   Let, const - they have block scope.

    ```javascript
     if(true) {
       let test = 'test'; // test variable is available only inside if block
     }
    ```
   **Let** - can be reasigned.
   **Const** - can't be reasigned.
   
1. ### arrow function explanation
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

    ```javascript
      function print() {
        console.log(arguments)
      }

      print(1,2,3,4);

      /*
        result below:
        {
          "0": 1,
          "1": 2,
          "2": 3,
          "3": 4
        } 
      */
    ```
   Remember arrow function don't have acces to the arguments.

    ```javascript
      const obj = {
      name: 'deeecode',
      print: function() {
        console.log(this)
      }
     }
     obj.print() // {name: 'deeecode', print: ƒ}
    ```
   You can't do smth like above with arrow function.
      
   **Arrow function** - don't have binding to this ( in inherits this from outside look code example below), arguments, super and shouldn't be used as methods.
   They can't be used as a constructors - we can't call them with new keyword. Cannot be used as generator functions.

   Explain next examples:
   ```javascript
      function Person() {
        this.age = 0;
    
        setInterval(() => {
            this.age++; // `this` refers to the `Person` instance
            console.log(this.age); // Correctly logs the incremented age
        }, 1000);
      }
  
     let p = new Person();
    ```

    ```javascript
      function Person() {
        this.age = 0;
    
        setInterval(function() {
            this.age++; // `this` refers to the global object or `undefined` in strict mode
            console.log(this.age); // NaN or throws error in strict mode
        }, 1000);
      }
      let p = new Person();
    ```

    So arrow functions do not have their own this. Instead, they inherit the value of this from the surrounding (lexical) context, which means the value of this is determined by where the arrow function is defined, not by how it is called.

    1 more example:
     normal function:
    ```javascript
     const obj = {
        name: "Alice",
        greet: function() {
          console.log(this.name); // `this` refers to `obj`
        }
      };
    ```
    arrorw function:
      ```javascript
        const obj = {
          name: "Alice",
          greet: () => {
            console.log(this.name); // `this` does NOT refer to `obj`, but to the surrounding context (possibly `window` in non-strict mode or `undefined` in strict mode)
          }
      };

obj.greet(); // Output: undefined or global object, because `this` is inherited from the lexical scope
      ```

obj.greet(); // Output: Alice

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
       **Types** are definitions of data type. Both're used to define type of data. Typescript compiler use it to  detect errors.
      2. What are **Tuples**? 
          ```javascript
            let ourTuple: [number, boolean, string];
          ``
      Tuples are typed arrays
      4. What are **Unions**?
         A union type describes a value that can be one of several types.
          ```javascript
           function printStatusCode(code: string | number) {
              console.log(`My status code is ${code}.`)
            }
          ```
      5. An **intersection type** is a type that merges several kinds into one.
         ```javascript   
          interface Student { 
            student_id: number; 
            name: string; 
          } 
            
          interface Teacher { 
            Teacher_Id: number; 
            teacher_name: string; 
          } 
            
          type intersected_type = Student & Teacher; 
            
          let obj1: intersected_type = { 
            student_id: 3232, 
            name: "rita", 
            Teacher_Id: 7873, 
            teacher_name: "seema", 
          }; 
            
          console.log(obj1.Teacher_Id); 
          console.log(obj1.name)
         ```
      6. What are  enums? When to use?
         **Enums** are collection of constants
      7. Types is used to type your values, to avoid errors and bugs.
      Here more:  https://blog.logrocket.com/typescript-enums-vs-types
      8. Enums example:

      ```javascript
       enum Names {
          Vasyl,
          Yaroslav,
          Igor
        }
        var test = Names.Yaroslav;// 1
      ```

      9. Interface: An interface is used to define a structure for an object.
      10. Record is a utility type in TypeScript that constructs an object type with keys of type K and values of type T. An example:
          Record<string, any> is a mapped type that creates an object type where the keys are strings, and the values can be of any type.
          So, generally speaking, Record is type that helps to define an object with specific keys and values.
          


  5. ### map-foreach-difference
      **Map** return NEW array. It doesn't modify initial array.
      **ForEach** doesn't return array. But runs function for each element of array. Foreach returns original array.
      **Filter, slice** returns new array. They dont mutate initial array.

  6. ### this-meaning

       1. This is keyword. It refers to different objects depending on how and where it used. The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run.
       2. You can't change this value.
       3. ALone **this** refers to the global object.  INside function - this refers to the global object also. In event handlers this refers to the hTML object.
        ```javascript
          function dotest() {
              console.log(this); // here we'll get Windows object
          }
        ``` 
       4. Call and apply methods are used to call 1 object method on another object as argument
       6. If yout type this in console, you will get Window object.
    
  7. ### settimeout-async
        Yes setTimeout is async

  8. ### example-promise
        Promise object represents eventual completion or failure of asynchronous function. Whenever tasks should be executed asynchronouslo. Promisess are used.
        Example login function:
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/e627bed4-169b-4366-9de8-2fa87aabbd8c)
        Promise returns fullfilled or rejected status.
        Promise is asyncchronous function.
        Promises can be handled with:

        **then catch**:
        ```javascript
          const doPromise = () => {
              new Promise((resolve, reject) => {
                  resolve({result: 5 });
              }).then((data) => console.log(data))
              .catch((error) => {
                console.error('Promise rejected with error: ' + error);
              });;
          }
          
          doPromise();
        ```

        ```javascript
          Promise.then(() => datafetch).then(result => result).catch(()=>'error fetching data')
        ```

        
        **asyn await try catch**
       ```javascript
        async function main() {
          try {
            const doc = await db.doc("user/" + uid).get()
        
            if (doc.exists) {
              console.log("User data:", doc.data());
              // use fetched data, for example in setState()
            } else {
              console.warn("No user data.");
            }
          }
          catch(error) {
            console.log("Error getting user data:", error);
          }
        }
        ```
       Promise all (method) takes an array of promises and returns a single promise. The returned promise fullfills if all promises are executed, and noone fails.
      ```javascript
        const promise1 = Promise.resolve(3);
        const promise2 = 42;
        const promise3 = new Promise((resolve, reject) => {
          setTimeout(resolve, 100, 'foo');
        });
        
        Promise.all([promise1, promise2, promise3]).then((values) => {
          console.log(values);
        });
       ```

  9. ### closure-explanation
        1. If we speak about closure , we need to mention **local** and **global** scope. Functions have its local, private scope. Variables can be global or private - depending where they'are declared.
        2. if variable is declared without keyword, it is global. Even if it's declared inside the function.

        ```javascript
          function doTest() {
            test = 5;
          }
          doTest();
          console.log(test); // 5
        ```

        Examples of global scope: window does have global scope. Variable declared with var outside of the fnction has global scop.e
    
 10. ### rest-spread-operator-difference
      1. ***Spread*** operator is mostly used with arrays. It's used to efficientl merge, cop arrays, pass elements to functions.
         
       You can use spread operator to merge 2 objects,or 2 arrays. In React you can use spread operator to pass properties to the component:
        ```javascript
          const props = {firstName: 'John', lastName: 'Doe'};
          const component = <UserComponent {...props} />;
        ```
       Example of copying array with spread operator:
       ```javascript
         const arr = [1,2,3];
         const copyArr = [...arr]
       ```
       Example of merging 2 objects:
       ```javascript
         const nameObject = { name: 'John' };
         const surnameObject = { surname: 'Cool' };
         const mergedObject = { ...nameObject, ...surnameObject };
        ```
        Example passing arguments to functions:
         ```javascript
           function sum(a, b, c) {
             return a + b + c;
           }
        
           const nums = [1, 2, 3];
           const result = sum(...nums);
           console.log("Result of sum:", result); //6

        **rest** operator can be used to extract the remaining properties. WHile spread operator used to exapand elements, rest operator used to condense elements into a single enti
        ```javascript
          const {a, ...rest} = {a: 1, b: 2, c: 3};
          console.log(rest); // {b: 2, c: 3}
        ```

     It helps to get all arguments into an one array named numbers:

        ```javascript
          function sum(...numbers) {
            return numbers.reduce((total, num) => total + num, 0);
          }

          function printNumbers(...numbers) {
            console.log(numbers); //
          }
          printNumbers(1,2,3,4,5); // [1,2,3,4,5] 
        ```

   11. ### set-object
        Set are collections of unique values:

        ```javascript
          const testArr = [1, 2, 1, 1];
          const newSet = new Set(testArr);
          console.log(testArr); // { 0:1, 1:2 }
        ```
        if you want to convert it to the arr:
        ```javascript
          console.log([...setValue]);
        ```

        Set Object provides:
        A  **size** property that contains a number.
        A  **has()** method that takes an element and returns a boolean.
        A  **keys()** method that returns an iterator of the elements in the set.
          
  12. ### try-catch
      Wraps code that can fail and pass error to the catch instead of crashing the app.
      So generally speaking we need it to handle errors.
  
  13. ### type-interface-diff
        Types in TypeScript are more flexible and can define primitive, intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object
      Yes you can use types to define typf of object.
         ```javascript
            // With interface
            interface Base {
              id: number;
            }
            interface User extends Base {
              name: string;
            }
            
            // With type
            type Base = { id: number };
            type User = Base & { name: string };
        ```
  15. ### collection-js-array
      Eather
       ```javascript
      const arrray = [...yourObjectCollection];
      // Or make it with Array.from
       Array.from(yourObjectCollection)
       ```

       In JavaScript, collections refer to data structures that store multiple elements or values. Examples include arrays, objects, maps, and sets

  16. ### stringify-3rd-parameter
       it adds additional spacing

  17. ### try-catch-finally
      Eather
       ```javascript
      openMyFile();
      try {
        // tie up a resource
        writeMyFile(theData);
      } finally {
        closeMyFile(); // always close the resource
      }
       ```
      or
       ```javascript
       try {
           // try_statements
       } catch(error) {
          // catch_statements  
       }
       finally() {
          // codes that gets executed anyway
       }
       ```

   18. ### arrow-function
       This inside arrow function is referenced, pointed to the global object. We normal function declaration - it points to the inner scope.

        ```javascript
          function RegularFunction() {
          this.value = 10;
            setTimeout(function () {
              console.log(this.value); // undefined, because `this` refers to the global object or is undefined in strict mode. It should be remembered that for example in chrome, it can console 10 instead of undefined ( it's connected with specific chrome console aspects ).
            }, 100);
          }
          
          function ArrowFunction() {
            this.value = 20;
            setTimeout(() => {
              console.log(this.value); // 20, because `this` is inherited from ArrowFunction's scope
            }, 100);
          }
      
          new RegularFunction(); // Logs: undefined
          new ArrowFunction();   // Logs: 20
        ```

  18. ### object-assign

      Object assign method is used to clone or copy proeperties from 1 object to another.

        ```javascript
            const obj = { a: 1 };
            const copy = Object.assign({}, obj);
            console.log(copy); // { a: 1 }
        
            You can add 1 target object, and 2 source objects like that:
            
            Object.assign({}, product, {
              votes: product.votes + 1,
            });
        ```

   19. ### object-create
       
      With help of Object.create we can create an new object from a given prototype object. It retrns a new object with the prototype set to given object. 

      ```javascript
        const myPrototype = {
          size: 'large',
          getSize() {
            return this.size;
          }
        };


        const myObject = Object.create(myPrototype);
        console.log(myObject.getSize()); // 'large'
      ```

      It can also be used Object.create to create subobject, which inherits properties and methods from their parent objects.

       ```javascript
            const mySubObject = Object.create(myObject, { 
            color: { value: 'red' } 
        });
      ```
      console.log(mySubObject.getSize()); // 'large' 
      console.log(mySubObject.color); // 'red'

  20. ### object-primitive-reference
    Object is stored and copied "by reference", whereas primitive values strings, numbers, booleans copied as a whole value.
     ```javascript
      let message = "Hello!";
      let phrase = message;
    ```
    In the end we have 2 independent variables.
    A variable assigned to an object = stores not object itslef, but its address in memory, in other words - a reference to it.
    ```javascript
      let user = { name: "John" };
      let admin = user;
    ```
    ![image](https://github.com/user-attachments/assets/b687fb14-9572-4f85-bdc9-5ca86afb1a21)

    When objects are equal?
    ![image](https://github.com/user-attachments/assets/9f1bf005-6efc-4d44-8125-c56089341c29)
    Two independent objects are not equal:
    let a = {};
    let b = {}; // two independent objects
    
    alert( a == b ); // false

  21. ### inner-outer-function-scope
      Outer function doesn't have an access to the inner functions. But inner functions have an access to the outer functions. It's how lexical scope does work.

  22. ### immidietly-invoked-function-expression
      Function runs as soon as it's defined.

        ```javascript
           (function () {
             // …
           })();
    
           (() => {
            // …
          })();
        ```
      When to Use IIFEs:
      Creating private scope for variables.
      Avoiding global namespace pollution in scripts.
      Simulating modules or public/private APIs in legacy code.
      Executing setup or initialization code immediately.

  23. ### module-exports
      Module exports - is a way to expose  functions, objects and primitives from module, so they can be used later in your code.
      An example:
      ![image](https://github.com/user-attachments/assets/a3c13743-8d3f-46f7-ac68-3329555350fc)
      And if we need to import it, we do it that way:
      ![image](https://github.com/user-attachments/assets/d3a5b924-7903-45e2-a11b-ba2f1a28090f)
      Module has different properties, one of them is exports, if you will do console.log(module).
  
      Remember also yuo have 2 other options ( its expecially often is used in React.jss) export default and export.
      ![image](https://github.com/user-attachments/assets/d2e368e5-b53f-4c18-9892-1cf61d6f16ed)

      A module is a chunk of code in an external file that performs a specific task or function. It is a separate entity within a program, allowing for modularity and code reusability.
      By encapsulating related code into modules, developers can organize their programs more efficiently and make them easier to maintain


  24. ### calling-function-reference
      IN js when we pass a function by reference it is automatically called with the argument that the previous 'then' resolves to.
      JavaScript functions are first-class objects, meaning:

      Functions can be assigned to variables or properties.
      Functions can be passed as arguments to other functions.
      Functions can be returned from other functions.

      What is ***"Reference"***? A reference is essentially a pointer to the actual location of the function in memory. When you pass a function to another variable or as an argument, you're providing access to the same function, not creating a copy.

  25. ### json-data-to-server
      Yes, before sending json to the server. You should convert it to the string.

  26. ### anonymous-function
      Anonymous function - is function declared without function name.There is 2 different ways of using it.
      ![image](https://github.com/user-attachments/assets/8a13a700-5395-400f-b75e-4d2c8a93cec0)

  27. ### #nullish-coalescing
      The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
      ![image](https://github.com/user-attachments/assets/54977902-f564-4a58-a264-bf122ae07267)

  28. ### #script-async-deffer
      ![image](https://github.com/user-attachments/assets/a62346cd-23e2-4110-8a90-c4056095af25)
      ***Defer*** attribute is useful when script is using for DOM manipulations. Means script will apply on document html.
      ***Async*** attribute is useful when script is not using for DOM manipulation. Some time you need script only for server side operations or for handling cache or cookie but not for DOM manipulations

  29. ### #script-tag
      Script tag is used to load some javascript code into your page.

  30. ### #inline-external-js
      Inline javascript is used directly in your html. External JS is contained as a sepearate file.
      External scripts is preferred - cause  it can be cached by the browser and reused across multiple pages.

  31. ### #loading-script-successfully
      We can test if a scripthas loadded successfully by checking  if a global variable or function defined in the script ia available.

  32. ### #prevent-caching
      WE can prevent the browser from caching a js file by providing some unique query string to the URL of the file.
      An example:
      ```javascript
        <script src="hellojs.js?v=1"></script>
      ```

  33. ### #script-loaders
      It can be used Require.js or webPack for example.It provides advanced functionality for loading and managing Javascript files such as lazyLoading, dependency management, error handling.

  34. ### #inferred-types
      
   ![image](https://github.com/user-attachments/assets/49fb5f79-3432-41b9-b8b7-eb86c8e59083)
   ![image](https://github.com/user-attachments/assets/fa71ab01-962d-47a3-b672-8b28bbb08131)


   
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
3. ### previous-state-example
    Count example (to get previous state we need to put callback function):
    ![image](https://github.com/vaskoGut/Learning/assets/7413864/5d05d3e0-9ac9-4032-a425-940e49c9b27d)

4. ### spread-object-kay-value
    ```javascript
    const test = { test: 'test '};
    {...test, name: 'pame'}
     ``
5. ### infinite-rendering
    ![image](https://github.com/vaskoGut/Learning/assets/7413864/b5fd215f-ac97-422d-9f8e-0dc9b8a19805)
    Answer -setCounter should be used out of useEffect here to prevent infinite rendering problem.

6. ### recursion-javascript
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/8111159a-b481-405b-8613-fa1bfd39761f)
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/9e6b69bf-da64-4603-8ff6-955c0c4c3881)

7. ### nullish coalescing
   let result = value ?? "default"; 
   // If `value` is null or undefined, `result` will be "default"
   // Otherwise, `result` will be the value of `value`

8. ### useRef rerendering explanation
     const isInitialRender = useRef(true);

      useEffect(() => {
        if (isInitialRender.current) {
          isInitialRender.current = false;
          fetchData(pagination.current, pagination.pageSize);
        }
      }, []);

   Explanation: Component renders for the first time. UseRef created reference object.
   useEffect runs:
   isInitialRender.current is true, fetches data.
   Sets isInitialRender.current to false.
   On subsequent renders, useEffect does not run again (due to the empty dependency array), and fetchData is not called.
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
   Remember not to mutate directly React's state, cause it can lead to different problems, bugs.
   When state's updated, react calls render() method and component's updated.

   Generally speaking, any time a component needs to hold a dnynamic piece of data - you need a state to use it.
   ______________

5. ### Can browser read jsx
   Nope, it's used babel to transpile jsx code to regular JS.
   ______________
   
6. ### what is dom
   **Document Object Model** - is interface that treats HTML as a tree structure, in which each node is object representing a part of the document. DOM defines a way nodes are accessed and manipulated.
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/6c69442b-2d90-40a8-898d-f3e9d695c19a)
   **Virtual DOM** - it's virtual copy of DOM, with help of it preformance is improved. With help of that we update only necessary things in DOM, not rebuilding all DOM tree.  
   React **Reconciliation** process of updating DOM. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.
   ______________
7. ### difference between es5 es6
   - es6 ins newest version of js
   - es6 has additional type Symbol
   - es6 has 2 new ways of declaring variables: let and const
   - es6 has arrow function
   - little bit difference while importing, exporting components, declaring classes
   ______________
 8. ### basic react app
    Install node, instal crea-react-app. It's ready to use.
    ______________
 9. ###  what is event in react
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
     1. Key is a unique identifier and it is used to identify whhich element of list was updated, deleted or added. Keys also help to improve performance of rendering lists.
     2. Index should be added as index cause, if you for example filter  your list - elements of list will get new indexes - other than you initialized  at first.

 11. ###  commponents in react
     React application consists of react component. Component is a reausable piece of code. Component can be stateless or statefull.

 12. ###  state in react
     You needed constructor and set value to the this.state. Now you can just use useState hook.

 13. ###  props in react
     Props are short for properties. In React it's object, storing value of attributes, smth. like html attributes. We need it to pass data from component to the component.
     Inside component we have an access to props in similar way as we have an access to the function parameters.
     Props aren't mutable in React.

 14. ###  state props difference
     State is muttable. Props are unmutable. State refers to internal data of component. Props are date transfered from parent component to the child.

 15. ###  high-ordered-component
     High ordered component is wrapper for other components. They allow to reuse some logic across different components. 
     F.e. you want to add logger HOC, which will be loging information about mounting, demounting component. 
      export default withLogger(SomeComponent);

 16. ###  use-effect-lifecycle-methods
    What are standart lifecycle React methods?
    **getInitialState()**, **componentDidMount()**, **shouldComponentUpdate()**, **componentDidUpdate()**, **componentWillUnmount()**.
    UseEffect is used for handling sideEffects - like getting some data, or handling some event.

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
      **Usecallback** memoizes a function definition and returns momoized function during rerenders, it improves performance in that way.
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
       4. Yes value returned by useRef hook is mutable. With help of 'current' property you can modify ref data. UseRed doesn't cause component rerender.
          
       UseRef example:
       ![image](https://github.com/vaskoGut/Learning/assets/7413864/51454d23-3adb-4503-aabd-a5fdd38c19af)

  23. ###    use-state-use-ref-diff
      With help of both you can save some value.
      Whatever you store in useRef is not reactive, it means it will not cause component rerender.

  24. ###  react-context
      React context is alternative to the 'prop drilling' ( passing data from parent to children ). Context is often consideredas  lighter, simpler solution to using Redux for state management.
      With context API we have 1 store where all data is passed to and from all data is extracted from.
      Example of data stored in context: template language, user authentificated data. ANother good example is dark mode - if you want an access to it from each component.

      ```javascript
        export const LevelContext = createContext(1); // now context has default value 1
      ```

      If you don't provide provider with specific value, all your components will get  thi 1 default value.

      Context also lets you read info from components above. For example let's imagine you have structure like that:
      ![image](https://github.com/user-attachments/assets/da6b4d53-12bc-42ce-a806-7e272fbe0694)

      It can be provided context like that. So in that way you don't need to provide context info for each specific section component.
      ![image](https://github.com/user-attachments/assets/ce333824-9911-49ba-909e-1f112662fb9b)

      Real life cases: 1) if you need to keep info about theme (f.e. dark/light). 2) Keeping info about logined/authorised user 3) With help of context  are handled routing - active route in most cases.
      4) it can be used to pass state to distance children.
      5) Global data requirement: When multiple components need access to the same data (for example: user authentication status, theme preferences, and so on), using context makes it accessible without redundant prop passing
      6) When prop drilling becomes complicated

  
  26. ###  react-structuring-code
       You need specific folder for your components ( it can be also seperate folder for your common components ), for hooks, constants. 
       It's good to have proper structure - it's easier to find what you need, it's easier to make onboarding for new team members.
       It's god to use absoolute imports.

  27. ###  react-test-how-work
        1. YOu can use e2e tests ( when you test your whole applications ( all components connected 1 to another) on real scenarious, data ). You can also make unit tests ( when you testing behaviour of each component)
        2. We use ***react-test-library*** and **react-test-renderer** ( to render yoru components to js objects ). You operate on real DOM, while using this library. You can  find element by role or by data-testid. It can be also simulated events with help of that library.

  28. ###  react-dev-tools   
      React dev tools is extension, it can be installed for any browser. As rule we use it if we have some problem with performance ( for example component is rendered too many times ).

  29. ###  react-portals

      1. React portals let you render some component outside your normal react component structure.
      2. Example: you can use it for creating modals.
      3. portal will not inherit parent css styles. Remember using stopPropagation() - event emmited from a portal component - will propagate to the Reactt tree and trigger event on  ancestor component.
      Example createPortal:
  ![image](https://github.com/vaskoGut/Learning/assets/7413864/a4673b20-a45a-45cc-84be-ced9a5c92691)

   30. ###  lazy-loading-dynamic-imports
         1. Imagine you have component, that appears afoter in some scenarios. It's allways displayed in your app. But it still exists in your bundle. To fix it you can use lazy loading or dynamic imports.
         2. Below you can see lazy loading of component.
            ![image](https://github.com/user-attachments/assets/692a44c2-b19b-4ad7-a973-879c6e3d3299)
            Now inside our component we can use it with react suspense.
         3. Example of dynamic import: if some condition is met, then we import our component:
            ![image](https://github.com/user-attachments/assets/772da3e6-c332-4090-a5ef-1dd589dd6200)
            Here you will have error, cause you can't render Promise with appropriate handling of it. Acually its why is better to use lazy loading - it handles Promise issue of importing components.

   31. ###  code-splitting
         1. Splitting code is technique which allows to optimize the performance of React application.  With help of it you can split your code into smaller chunks and loading the on-deman.
         You can reduce load time. React provides built-in tools. Like lazy, suspend.
  
         ```javascript
           const SomeComponent = React.lazy(() => import('~/components/SomeComponnent')
          ```
         2. SUspense let you load fallback, while yoru children components are loading.
         3. One more way - is using dynamic imports ( for example for functions ).

   32. ###  ssr-csr
         1. **SSR** -  Server side rendering. **CSR** - CLient side rendering.
         2. Gatsby.js and Next.js supports both CSR and SSR.
         3. Static Pages are built during build time. SSR allow to render a page during run-time. You can deal with data  that is fetched when a user visits the page.
         4. 1 of the most importa benefits oF SSR can be improving performance of your website. You can reduce the amount of work the users's browser needs to do.
         5. Practical example: you need to call some script and add smth to the header only after some behaviour user on page.  In gatsby.js pages are rendered statically during build, to do smth like that you need SSR.


   33. ###  fragment-explanation
          **Fragment** alows you to return group ofchildren elments without need of extra DOM component.

   34. ###  use-effect-empty-array
          Your effect will run only after initial render.

   35. ###  example-hook
        **Hooks** are reusable functions. Example: hook for fetching data, or another example hook for recognition screen size.
       ![image](https://github.com/vaskoGut/Learning/assets/7413864/c895a2bf-3b3d-4ac1-9922-589c079f583a)

   36. ###  event-listener
        **Hooks** are reusable functions. Example: hook for fetching data, or another example hook for recognition screen size.
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/6a2f472f-eb8f-4c6a-8237-0ed27deb947b)

   
   37. ### #too-many-useeffect-explain
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/b2924d25-2088-4928-b941-4c79820fa729)
        solution: it's better to drop it in 1 useEffect and handle different cases. Or you can drop it in distinct function.

   38. ### #design-patterns-react
        ***Observer patterns*** - it's actually using state in React. When state data changed, component ( dependent properties ) are updated. 
         ***Singleton Pattern*** - singleton pattern, when global state is shared across the application.Singleton can only have 1 instance.
         ***Proxy pattern*** - For example handling lazy loading of images. Example: when you have RealImage class, but access to it provides ProxyImage class.
        ```javascript
            class RealImage {
              display() {
                console.log("Displaying the real image.");
              }
            }
            
            class ProxyImage {
              constructor() {
                this.realImage = new RealImage();
              }
            
              display() {
                console.log("Loading the image...");
                this.realImage.display();
              }
            }
            
            const image = new ProxyImage();
            image.display();
        ```

  39. ### #caching-react
      1 of possible solutions: You can set some flag with help of localstorage f.e. after you fetch data. And the you check if this flag is true, if it's you aren't fetching data 2nd time.

  40. ### #form-input-react-handling
      It's better use controlled components - assign some 'handleChange' function, and control state of input inside it. It's better approach for testing, debugging approaches.

  41. ### #react-hook-service-difference
      Reeact custom hook used to work with reused stateful logic. While service is used when you need something independent from react. Service can be used in next cases: Managing API requests and responses.
Storing business logic that can be shared across the application (not just in React components).

  42. ### #virtual-dom-shadow-dom-difference
      Virtual dom - The Virtual DOM is a tree of JavaScript objects that represent the real DOM elements
      Shadow dom-is a form of encapsulation on our element. In simple words, Shadow DOM is a way to create a "mini DOM" inside a web component that is hidden and separated from the rest of the page.
      This means that the styles and elements inside the shadow DOM are encapsulated (protected or isolated) so they don’t get affected by, or affect, anything outside of it

  43. ### #react-create-element-react-dom
      At first we creating elment with React.createElement() then we render it with ReactDOM.render(ourElmenet, mountElemnent). Now is used jsx. Youjust render elment in that way:
      function renderElement() { return <div><p>test<p></div> }. Main reason why it's better- it's syntax. You can create element a lot easier.

  44. ### #react-proptypes-question
      We dont use react proptypes ( which were running during runtime ). Cause in new projects we can use typescript and static types in development process.

  
  44. ### #react-event-handler
      Event handler - is function which is called on some action inside our component. F.e. onclick or onchange

  45. ### #forward-ref
      When to Use forwardRef
      You need direct access to a DOM element in a child functional component.
      Your component serves as a wrapper for other components, and you want to ensure the ref reaches the underlying DOM node.
      You are working with third-party libraries or animations that require direct DOM access.
      You are building reusable, customizable components where consumers might need ref access.


 ________________________________________________________________________________________________________________________________
  1. ### #what-is-redux
      Redux is library for managing global application state.

  2. ### #redux-action-store-reducer
      ***Actions*** are plain objects with a type field, and describe "what happened" in the app
      ***Reducers*** are functions that calculate a new state value based on previous state + an action
      ***store*** runs the root reducer whenever an action is dispatched
      ***dispatch*** is a function to update the state. Dispatching is smth like calling, triggering an event. In another words "something happened and we want store konw about it".

      Simple illlustration (cake shop scenario) to show what are core redux concepts ( action, store, reducer ):
      ![image](https://github.com/user-attachments/assets/dcaa55ad-7a57-44f8-9439-0069953fc0d9)


      Redux uses 1 way data flow through app structure.

      When something happens in the app:
      The UI dispatches an action
      The store runs the reducers, and the state is updated based on what occurred
      The store notifies the UI that the state has changedv
      Graph describing redux technology:
      ![image](https://github.com/user-attachments/assets/801c71d4-f642-4128-8780-cda138f64f95)

   3. ### #redux-redux-tools-react-redux
        ***Redux*** - library for managing global state. It's main source library. We should use redux if we have large application state that is needed in many paces of app.
        ***Redux-toolkit*** - its abstraction ( set of tools ) over redux, it simplifes redux develpment by reducing some code. It provides utilities like createSlice, configureStore, creatAsyncThunk for easier state management.
      It helps also to reduce boilerplate code.
        ***React-Redux*** - it's additional library. It helps to connect Redux to React components, allows to access Redux state and dispatch actions within React app using hooks like ***useSelector*** and ***useDispatch***.

        You can combine Redux-toolkit with React-redux it's common pattern for React applications.
      As you can see we have react library and redux library. Ract-redux is smth like bridge between that 2 library. It's binding library for React and Redux.
      ![image](https://github.com/user-attachments/assets/a1c81255-6f23-4a3f-bf08-44e7a44d3ac8)

      3 core react principles:
        1. We have global state of app that is stored as an object inside a single store. We have cake shop with number of cakes: 10.
        2. The only way to to change the state is to dispatch an action ( we should define type ). Make an order, our action will be CAKE_ORDERED.
        3. How should state be updated? - with help of reducer. Reducer is shopkeeper, will take cake, reduce one and print invoice.
           Illutstratiopn to above principles:
          ![image](https://github.com/user-attachments/assets/fc0164bf-8ed7-4efe-8ea4-759433ca7071)

      Below you can see simple example of Redux action, store,reducer, dispatch:
      ![image](https://github.com/user-attachments/assets/76359509-96b4-43c2-8a89-db875336afba)

   4. ### #store-subscribe
      We need store subscribe to follow all store changes. When you doing some dispatch action with store.subscribe you can follow all state changes.

  5. ### #redux-mobx-difference
     In redux you can have only 1 store, 1 single source of truth. In larger app it can become little bit messy.
     In mobx you can have few stores. You can split yoru state into multiple store, each represeinting different slice of your app logic. Mobx store can also communicate if needed.
     So for bigger applications Mob'x is more modular and scalable.

  6. ### #redux-reducers
     ![image](https://github.com/user-attachments/assets/4e2a68ec-1a3f-4b91-af59-01ebc6fb86ab)
     In short reasons for using reducers are: ***maintability***, ***performance***, ***scalability***.

  7. ### #redux-state-immutability
     You can use immer library. Example of use:
     ![ImmerLibrary](https://github.com/user-attachments/assets/d757bcad-9825-4721-be15-9af53b800147)
     Illustration which shows how immer works:
     ![image](https://github.com/user-attachments/assets/34a730dc-a13f-45bb-b282-b817d6e400da)

     Reducers in Redux must return a new state object rather than modifying the existing state.State in Redux is not mutable.

  9. ### #redux-state-immutability-more
     Yes redux state is immutable. We don't make changes to Redux state, instead of it we're providing new state object whenever there is redux state change.

  10. ### #redux-immer-library
     Immer library helps to work, edit, mutate redux state directly. Below you can find reducer created with immer and without it:
     ![image](https://github.com/user-attachments/assets/37bd6b95-5a4c-45e0-bb8b-d75ac282e412)

  11. ### #what-is-middleware
     Middleware - is some extendsion between dispatching an action and reaching it to the reducer. Often middleware is used for logging,
     cach reporting, performance asynch tasks.

  11. ### #what-is-redux-thunk
      **Redux thunk** - Redux Thunk middleware allows you to write action creators that return a function instead of an action.
      The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met We use redux thunk to fetch some data for example
      @reduxjs/toolkit includes redux thunk by befault.

  12. ### #what-is-redux-saga
      **Redux saga** - is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures

  13. ### #redux-toolkit
      **Redux toolkit**. Main reason is boilderlating, it's a problem while using redux.
      ![image](https://github.com/user-attachments/assets/a8c48bf0-2b94-4d7b-b88d-58a055f88987)

      What is cool with redux-toolkit we can directly mutate state. We don't need to copy it as it we should do with normal redux.
      ![image](https://github.com/user-attachments/assets/babcbc48-82c8-4092-ba4a-822a0976e391)
      We just create reducer and mutate here ordererd state directly.
      What does createSlice:
      ![image](https://github.com/user-attachments/assets/fa716136-309d-4989-b60c-d6d6e7e47835)

      Redux toolkit createSlice - is reducer version, you define your reducer actions and initial state
      ![image](https://github.com/user-attachments/assets/49ca4cdf-591d-49d1-9589-2af40743174d)

  14. ### #redux-toolkit
      ***redux-extrareducer***. We need it if for example you have to 2 different reducers, and you need to respond on some action from another reducer.
      ![image](https://github.com/user-attachments/assets/9e727ee9-5dbf-44c5-8483-3ffd00455ef4)
      Here in icecreamReducer we respond on cakeOrdered type of action.

  15. ### #redux-toolkit-async-thunk
      It's used for handling asynch requests.
      ![image](https://github.com/user-attachments/assets/b89cee88-227a-438c-aa85-742ef65a2656)

  16. ### #redux-toolkit-use-selector
      Imagine your Redux store is like a library, and it has a catalog of books (the state). If you want to find out how many books are in the library, you can use useSelector to "select" and read that specific piece of information.




________________________________________________________________________________________________________________________________
   2. ### #react-native-styling
      We create style classses with help of react-native api stylesheet. Check next example:
      ```javascript
        const styles = StyleSheet.create({
          container: {
            backgroundColor: 'green'
          }
        });
      ```

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
    - if each team works only on 1 repo, code can be repeated etc; its easier to standartize work of teams.
    - if we have some share repo, library and you need to make change, it should be tested change for reach repo.
    - each repo can have different settings tools
    - it can be problem to use projects like that.
    4.What are advantages of **monorepo**? 
    - easy to create new project;
    - it's easy to test your change for different packages or applications.
    - it's better developer mobility and performance while working on monorepoy
    - all projects inside monorepo using same versions of thirls party libraries;
    - atomic commits - you dont need different projects, apps dependency after each commit, change

    Advantages of microfrontends ( polyrepo ):
    ![MicroServicesIamge](https://github.com/user-attachments/assets/e5049a98-d0cb-4fdd-a965-48f63f4456fe)
    1. Independence and autonomy - teams can work on different parts of the frontend without interfering each other. Each team can use its own stack, library, deployment pipelines.
    2. Technology diversity - freedom to choose any technology.
    3. Resilience and fault isolation - if one micro fails, it doesn't bring down the entire application.
    4. Its easeier to maintain test and refactor distinct micro frontend.
   
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


   
______________
 5. ###  name some front end frameworks
Next.js, Gatsby.js.
______________

 6. ###  continues-integration
    **Continuous integration** refers to the build and unit testing stages of the software release process ( you can implement it with jenkins for example in your project)

______________

 7. ###  functional-oop-programming
  In OOP, the fundamental basis is classes, instances of which can be stored in variables. In functional programming, however, there are no variables; there are functions and functions only.

______________

 8. ###  dependencies-devdependencies-difference
  Dependencies are crucial for your production build. While Devdependencies are needed only while dev work, but we don't need in production build.

______________

 9. ###  package-json-scripts-typecheck
  When you run npm run typecheck or yarn typecheck, the TypeScript compiler will analyze your TypeScript code and perform type checking based on your type annotations and configuration

______________

 10. ###  extensions-word-package-json
   This option specifies the file extensions that Babel should consider for transpilation
  ![image](https://github.com/vaskoGut/Learning/assets/7413864/256915d9-4291-4530-a875-9327c57cbc74)

______________

 11. ###  transiple-clean-explanation
   This line cleans all transpile files inside chooden folders, to make sure project runs properly and without transpilesd files leftovers.

______________

 12. ###  markdown-explanation
  Markdown - markup language used to add formatting for your text ( healdlines, lists etc. )

______________

 13. ###  web-components
   ***Web components*** - it helps to create reusable, encapsulated HTML elements.
     Key features: creating custom element, shadow dom ( scoped style, eventy ), html template. You have alss lifeceycle methods, you can cahange attributes etc.

______________

 14. ###  lit-library
    ***Lit library*** - is library for building web components. It's fast and provides reactive compnent ( components are automatically updated after data change ).
    It has shado dom suppoort, lifecycle managements, typescript support etc.
     ![litComponentExplain](https://github.com/user-attachments/assets/8cd45ee5-13ce-46da-84b4-a3d4f894aaf3)
      1. Property - iit's like external prop
      2. state - it's something like react state
      3. Callback - it's lifecycle method.

______________

 15. ### web-api
     ***Forms Api*** - helps validate forms.
     ```javascript
       const inpObj = document.getElementById("id1");
       if (!inpObj.checkValidity()) {
     ```
     ***History API*** - accessing windows.history object.
     ```javascript
       window.history.back();
     ```
     ***Web Storage API*** - geting, setting storage.
     ```javascript
      localStorage.setItem("name", "John Doe");
      localStorage.getItem("name");
     ```
      ***Fetch api***
     ```javascript
      fetch(file)
      .then(x => x.text())
      .then(y => myDisplay(y));
     ```
     ***Geolocation api***
      ```javascript
          ...
         navigator.geolocation.getCurrentPosition
          ...
       ```
     Other examples: window.location, window open etc.

______________

 16. ###  improving-performance
     1. Clean html - check if app has appropriate html5 tags
     2. Reduce number of server calls if possible - lazy loading for example
     3. Css - prefetch fonts for example, check if there is no leftovers in css, simplify selectors. Splitting css modules - css that we don't need on page loading. Can be loaded later.
     4. Optimize videos, images - compress size, resize for different viewports, lazy loading.
     5. Prefetching in front-end development is a performance optimization technique that involves loading resources (like data, images, scripts, or other assets) in advance, before they are actually needed by the user.
     6. Caching - in next.js, gatsby.js it's is configured by the default.
     7. Code splitting - is the practice of splitting your codebase into multiple bundles or chunks that can be loaded on demand, rather than loading the entire codebase at once.

______________

 17. ###  front-end-security
     1. Question answer:
       1. CSP -  setting csp data in meta tag, header.It helps against  Cross-Site Scripting and data-injection attacks.
       2. Keep authorization data in env variables.
       3. Most commont types of attacks: Malware, cross-site scripting, data-injections, DOS ataki ( it depends alot what is your server capable of ).
     2. question naswer:
        IT can be posted some content, script, maleware to the form if it's not sanitized.
    
______________

 18. ###   wcag-standarts
     1. semantic html
     2. keyboard navigatoin (  tabindex)
     3. color contrast, focus contrast
     4. text alternatives for images , aria-labels for buttons forms
     5. responsive images
     6. aria links, CEO settings

______________

 19. ###   best-practices-frontend
     1. SOLID
            1. Component or function should have oneresponsibility, purpose
            2. Open for extension
            3. Subsitituion Principe - input should work with all types of input.
            4. Interface Segratgateion Principle - dont pass something, you dont need to component.
            5. Dependency inversion - high level modules should  not depend on low-level modules directly.
            here more Info: https://chatgpt.com/c/66d99613-6570-800c-8416-bd259966b6a3
     2. Clead readable code
     3. Component designs - sepearate login, view in different files. Dont-write to larga components
     4. Avoid rerenders, implement lazy loading.
     5. Accessibility
     6. Testing debugging
     7. Avoid  inline javascript and css
 ________________________________________________________________________________________________________________________________

  20. ###   spa-pwa-difference 
   **SPA** Works by loading a single HTML page ( file) and dynamically updating the content as the user interacts with the app.
     Key parts:
      - onlly parts of application are updating, refreshing not the whole application
      - less loading - better user experience
      - SPA: gamil, google maps, twitter
      - there is probles with SEO - cause it's all 1 file and dynamic reloading of content. IT's why sometimes google has problem with crawling such site.

   **PWA** Extends the functionality of traditional web apps with features like offline access, background sync, and push notifications, thanks to Service Workers.
    Can be installed on a user's home screen like a native app and can run independently of the browser.
    Examples: spotify, uber, telegram, PWA 
 ________________________________________________________________________________________________________________________________
  
  21. ###  spa-gatsby-next-difference
   ***SPA*** renders pages on client side. Content is updated without reloading pages. Single html file. Problems withs SEO. 
   Best suited for dynamic, highly interactive applications like dashboards, social networks, or apps that need frequent, real-time updates.
   ***GATSBY, NEXT*** are SSG ( static site geeneration ) - pages are served as statisc files, it's super SEO friendly, provides benefits of both spa and server-rendered pages. Good SEO.
   Ideal for content-heavy sites, blogs, marketing pages, or e-commerce sites where performance, SEO, and fast initial loads are crucial.

________________________________________________________________________________________________________________________________
  
  22. ###  localstorage-cookies
  The most important difference is - __localstorage__ has bigger capacity ( 5mb), while **cookies** have only 4kb.
  In cookie we can save some small data, like info about user session durability.
  In localstorage we can store bigger chungs of data.
________________________________________________________________________________________________________________________________

  23. ###  webpack-explanation  
      1. Webpack is a tool for configuration your project environment, it helps to bundle your project modules.\
      2. In **dev** we want features like:
         1. strong source mapping - allows developers to see the original source code (e.g., TypeScript, SCSS, or ES6+) in the browser’s developer tools instead of the compiled or minified code that is actually running in the browse.
            Frameworks like gatsby.js, next.js have it by default.
         2. Localhost, live reloading, hot moudle replacement - monitoring chamges, updating modules, replacing moudules, callback execution.
         3. Envrionment variables.
            So dev is about dubugging,efficient workflow.

         In **prod** we focus on:
         1. minifiying and optimizing sources, files, assests.
         2. code splitting - create smaller chunks, and load them if only you need it.
         3. Tree shaking - removes unused code.
         4. Ensure that any debug or tet code is stripped out and not included in production mode.
      3. Frameworks like gatsby.js, next.js have its own webpack.config. But both that framework allow to add your own additional webpack configurations.
      4.  "build": "webpack --mode production" - result will be file main.js in your dist folder. In the end you will get main.js file with minified, optimized code.  process.env.NODE_ENV - in that file will be set to the 'production' mode.
     
________________________________________________________________________________________________________________________________
   24. ###  creating-package-json
   You can create it manually or you can use npm init command.

________________________________________________________________________________________________________________________________
   25. ###  react-testing-library
   React testing library works on real DOM. 
   You can find form elements by their label text, finding links and buttons from their text. You can use also datatest-id in places, where you can't use other methods.
   
________________________________________________________________________________________________________________________________
   26. ###  render-screen-testing-react-library
   Render method is used to render component, screen method is used to find element, what you need by role, label or testid.

 ________________________________________________________________________________________________________________________________
   27. ###  react-query
   Advantages of react query:   
    1. simplified data fetching
    2. caching
    3. updating data in background
    
     
   ***stale:infinity:***
   Static or rarely-changing data: Content like country lists, configuration settings, or other data that is unlikely to change frequently.
   Optimized performance: Avoids unnecessary refetches when data changes infrequently and does not require constant validation.

   is reqact query mutations smth like redux state handling?
   ***React query*** Designed to handle server-side data updates such as creating, updating, or deleting resources
   Mutations trigger side effects like API calls to modify data on a server and manage the status of these operations (loading, success, error).
   Example: useMutation for a form submission that saves data to a backend.

   ***Redux state*** Manages application state on the client-side, including UI states and data persistence within the app.

   Yes, even if you do not set a staleTime in React Query, your query will still be cached by default

   queryKey - it serves as a unique identifier for a specific query.  It allows React Query to manage caching, refetching, and updating data efficiently

________________________________________________________________________________________________________________________________
   28. ###  utc-time-explanation
     This termin stands for Coordinated Universal Time. An example - New York City is in the UTC-5 time zone, which means the time in NYC is five hours behind UTC.

________________________________________________________________________________________________________________________________
   29. ###  express-server-react
     To run an Express server that serves a React app, the typical approach is to first build the React app into static assets (HTML, CSS, JS), and then use Express to serve those assets.

________________________________________________________________________________________________________________________________
   30. ###  middleware-function
       ![image](https://github.com/user-attachments/assets/d69ae5d0-955a-4756-8f18-97288d0c2913)
       So as it can be seen. Middleware it's something between request and response. Middleware is also accessible to change the requests and response objects, and can also terminate the response cycle, if necessary.

________________________________________________________________________________________________________________________________
   31. ###  fs-module
       Fs moudule - the built-in Node.js file system module helps us store, access, and manage data

________________________________________________________________________________________________________________________________
   32. ###  react-hook-form
       Main advantage of react-hook-form its performance is very well improved. It stands out for its performance and minimal re-rendering, which is achieved using uncontrolled components.
       This means that form inputs are not directly managed by the React component state, reducing the re-renders required when users type in data

________________________________________________________________________________________________________________________________
   33. ###  axios-json-header
        headers: { 'Content-Type': 'application/json' } = it will automatically convert your data to json. When you make post request for example

  
________________________________________________________________________________________________________________________________
   1. ### box-model
  **box model** - it's box which wraps every HTML element. Box model consists of content, padding, bordery, margin.
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/dbfb2b61-3e0f-41fe-8657-c82a3e8f9885)

______________

   2. ### picture-sources
      Picture and source are used if we want to add alternative versions of image depending on size of screen for example.

______________
   
   3. ### viewport-what
       The viewport is the user's visible area of a web page. The viewport varies with the device.
       <meta name="viewport" content="width=device-width, initial-scale=1.0"> - we  set width of peage  to follow screen-width of the device.
       Initial-scale=1.0 defines zoom defult level.

______________

  4. ### position-property
     Relative, absoulte, static, fixed, sticky.

______________

  5. ### selectors-css
     Id, Classs, Element, * - all. We have also Descender, children sibling selectors.

______________

  6. ### rem-css
     ***Rem*** - dictate an element's font size relative to the size of the root element. In most cases 16px is default.
     1 of the most valuable advantages of rem is scalability and consistency.
______________

  7. ### styled-components
     ***styled components**
     Difference between simple styling and styled components:
        1. **Automatic critic css** - when you page is loaded. Styled components keeps tracking of which components are rendered. ANd injectes only necessary styles.
        2. **No class names bugys** - library generates unique clssanames for components. You don't have to worry about dublication, misspeling and similar problems.
        3. **Scoping**. **Regular CSS files** are global by default. You need to be careful with naming conventions and avoid classnamecollisions. **Styled components** generate unique class names 
        for each component ensuring that styles are always scoped to the component they belong to. Every styled component is scoped by default.
        4. **Dynamic styling** - with playin CSS, you can't access JavaScript variables and states to create dynamic states. Styled components allows you to use JS directly in your styles.
        5. **Component based styling**. Styles apre placed along with js code of component.
        6. **Theming** - with css variables you can create basic theming. Styled components has built-in them suporting using themProvider.
        7. **Performance**.  Regular css files - style loading is separated from JavaScript, which can be better for performance in certain cases Styled components - Styled components injects
            styles as javaScript executes. It can be beneficial for dynamic styles but may cause slight performance problems.

______________
  8. ### relative-absolute-fixed-sticky
     ***static*** - default element position. The element will flow winto the page as it normally would.
     ***Relative*** - the element is positioned relatively to its normal position. It really means 'relative to yourself'. You can use now top. left, bottom. right properties to set position of that element.
      When you set relative positioning - we can you z-index on that element. Other thing - it limits the scope of absolutely positioned child elements. Any element that is a child ot the relatively positioned elmemnt, can be be absolutely positioned.
     ***Absolute*** - when we want to place any page element exactly where we want it. An element with this type of positioning is not affected by other elements and it dones'nt affect other element.
     ***Fixed*** - positioned realteve to the viewport. The viewport doesn't change when the window is scrolled, so element stays right where it is when the page is scrolled.
     ***Sticky*** - a sticky element will stick like a static elemen until some scrolling position. Then it will behave like fixed element.


        Summary:
         ![image](https://github.com/user-attachments/assets/7df32de5-0b04-49a5-b19a-2258f7af3df4)

        Examples of using. How to use props wity styled component:
        ![image](https://github.com/user-attachments/assets/c6f9e696-e693-45a3-bc5e-0e671e5461d5)
        And inside styled:
        ![image](https://github.com/user-attachments/assets/bf9bff96-4bf4-450d-819c-359b7e473f20)
        Add color with help of theme:
        ![image](https://github.com/user-attachments/assets/79486119-8c20-40e5-a2b8-3938eed25038)
        You can add also optional styles like that:
        ![image](https://github.com/user-attachments/assets/faf307b8-fe93-4999-98f5-3b43e01b6f08)



______________

  8. ### styled-components-extending-styles
        ![image](https://github.com/user-attachments/assets/d13b5115-9ce4-437a-b13b-0b662f38c0b0)

        Also check example of setting css attribute:
        ![image](https://github.com/user-attachments/assets/c72564da-9848-47fa-96fa-4428a1e29bb3)



______________ ______________ ______________ ______________ __________________________________________
______________ ______________ ______________ ______________ __________________________________________
HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTMLHTML HTML HTML HTML HTML HTML HTML
HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTML HTMLHTML HTML HTML HTML HTML HTML HTML
______________ ______________ ______________ ______________ __________________________________________
______________ ______________ ______________ ______________ __________________________________________

  1. ### html-explanation
        We use HTML ( HYPERTEXT MARKUP LANGUAGE ) to define structure and content of our page.

______________

REACT REDUX STATE MANAGEMENT LIBRARIES
  1. ### react-context-redux
     Context react is more useful when you work with simple application.
     Redux is used when more complicated cases, applications.
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



/////////////
react exercises :

// create a simple react app that display a list of countris and their capitals
// requiremeites:
// the list of countries and capitsls should be fetched from the API
// the list should be displayed in the CountiriesPage
// each country should be displayed in a seperate component
// the user should be able to filter the list by capital

const BASE_URL = "https://restcountries.com/v3.1/all";

/**
 * To filter by capital city, use the '/capital/{capital}' endpoint
 */
const FILTERABLE_CAPITALS = [
  "Talinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenthagen",
  "Reykjavik",
];

//////////////


//////
How to pass data from child to parent:

![image](https://github.com/vaskoGut/Learning/assets/7413864/ab1fb73e-d2b6-4396-a542-38fa3299f136)

//////

 # GATSBY.JS
________________________________________________________________________________________________________________________________

 1. ### gatsby-framework
 
 Gatsby.js is framework - used to generate static pages during build. Main feautres of gatsby.js: - it's based on React.js - it used Graphql to plull data nad structure it.


 # REACT-QUERY

 # GIT, DEPLOYMENT, PIPELINES
 1. ### continuos-deployment
 Continuos deployment - software development practice where code changes are automatically deployed to a production envrionment after passing predefined testing and qualisty assurance stages. It helps to reduce manual intervention and to ensure new code (feats, fixes etc) are delivered to users as quickly as possible. You can configure it in netlify for example.

___________

________________________________________________________________________________________________________________________________

# GIT, DEPLOYMENT, PIPELINES
 1. ### continuos-deployment
 Continuos deployment - software development practice where code changes are automatically deployed to a production envrionment after passing predefined testing and qualisty assurance stages. It helps to reduce manual intervention and to ensure new code (feats, fixes etc) are delivered to users as quickly as possible. You can configure it in netlify for example.

___________

 2. ### merge-rebase-difference
    **merge** - combining changes from one ( source branch) into another branch ( target branch). It combines history of 2 branches.
     Git merge pulls in the latest changes from main into the feature branch creating a new "merge commit" in the process.
     Use merge if you need to keep, save history of both branches. Whe fewe people collaborates on same branch. See example below:
    ![image](https://github.com/user-attachments/assets/5c131938-14b0-47b8-af15-a5705ecd5961)

    **rebase** - is moving the changes from one branch onto another branch. It puts commits from one branch to another in linear way. See below:
    ![image](https://github.com/user-attachments/assets/56f95e9e-6da1-4c5a-95e9-93011a2e4ba9)


    Use merge if you need to keep, save history of both branches. Whe fewe people collaborates on same branch.
    Use rebase if you you want clean, linear project history. Use it to update branch with the lst changes from min branch before merging.
    
    Below you can see difference between git merge and git rebase. Main difference is while you doing rebase, you keep consisten commit history.
    ![image](https://github.com/user-attachments/assets/56610431-4d51-4d1f-8ab6-eba83c5fa0a4)

___________
  
  3. ### cherry-pick
  In simple terms, git **cherry-pick** picks a specific commit from one branch and apply it to another branch without merging the entire branch.
  
___________
