# React
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is react](#what-is-react)                                     |
| 2   | [What is unindirectional data flow](#what-is-unindirectional-data-flow)                                     | 
| 3   | [What is state in react?Can you update state directly?](#what-is-state-in-react)                                     | 
| 4   | [Can browser read JSX? What is used to browser be able read jsx?](#can-browser-read-jsx)                                     |
| 5   | [What is DOM, Virtual DOM?](#what-is-dom)                                     |
| 6   | [What is difference between es5 and es6?](#difference-between-es5-es6)                                     |
| 7   | [How to create basic React app?](#basic-react-app)                                     |
| 8   | [what is event in React? What is synthetic event?](#what-is-event-in-react)                                     |
| 9   | [Explain how lists work in React?](#lists-in-react)                                     |
| 10   | [Why key should be added to the list elements? Why index shouldn't be added as index?](#keys-in-react-lists)                                     |
| 11   | [What are the components in React?Which types of components are in react?](#commponents-in-react)                                     |
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
| 24   | [what is react context? when do we need it? Please list example of data stored in context. Is react context mutable?](#react-context)                                     |
| 25   | [what is the recommended way to structure your React code?](#react-structuring-code)                                     |
| 26   | [what is good way to test your reactapplications?what is end-2-end testing? what is unit testing? What yuu use for unit  tests. What are integration tests?](#react-test-how-work)                                     |
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
| 46   | [When is pure function in react?](#pure-function)                                     |
| 47   | [If i want to run something on component unmount. How to implement it in react??](#component-unmount)                                     |
| 48   | [FC and simple () => function component declaration difference?](#fc-function-difference)                                     |
| 49   | [How to use child state inside parent?](#parent-use-child-state)                                     |
| 50   | [Rules of using custom hooks React?](#rules-custom-hooks-react)                                     |
| 51   | [Unmount with React?](#handling-unmount-React)                                     |
| 52   | [How to detect path location change in React?](#handling-path-change-react)                                     |
| 53   | [What is react-router and what are advanteges of it? Does react have buit-in router functionality? What is hiostory api? How do you get url params in react?](#react-router)                                     |
| 54   | [What is advantage of react in comparison to javascript?](#react-plain-js)                                     |
| 55   | [What are HOC functions?](#hoc-functions)                                     |
| 56   | [What are advantages of using react over vanillajs ?](#react-vanilla-js)                                     |
| 57   | [Why do we say React is declarative rather than imperative?](#declarative-imperative-react)                                     |
| 58   | [Settimeout setinterval difference?](#setimeout-setinterval)                                     |
| 59   | [What is react hydration?](#react-hydration)                                     |
| 60   | [What causes component rerendering?](#component-rerendering)                                     |
| 61   | [Server client components difference?](#client-server-components)                                     |
| 62   | [When should we use useCallback?](#useCallback-react)                                     |
| 63   | [Two way data binding](#one-twh-way-databinding)                                     |                          |
| 64   | [What is process of transpilation in simply words?](#process-transpilation)                                     |
| 65   | [What we use instead of React.create element to make life easier??](#react-create-element-alternative)                                     |
| 66   | [What is a way to set default props in react 19?](#react-19-default-props)                                     |
| 67   | [Saving props inside state in react - is it anti pattern??](#react-props-state-antipattern)                                     |
| 68   | [When is update ref? in which moment](#ref-update-question)                                     |
<img width="813" height="663" alt="image" src="https://github.com/user-attachments/assets/553c5a85-f08c-4996-90a8-fe6b617d2e5c" />

| 69   | [Write your own force update function](#force-update-function)                                     |

| 70   | [Which 3 main categories of React lifecycle methods can you name](#life-cycle-methods-react)                                     |

| 71   | [How with react memo restrict rendering component if for example text length more than 3 ? (LT)](#react-memo)                                     |


1. ### What is react
   **React** - is library for building user interfaces, primarily using a component-based architecture. The main idea is that we describe what the ui should look based
   on the current state, rather than manipulating on real DOM.
   React using declarative programming model and reconciliation process to efficiently update the actual DOM when state or props  change. Components can encapsulate
   their own state and behaviour, which makes application easier to compose and maintain.
   
   Main React features:
   1. JSX - js extension. We can write HTML structures inside JS. For example use HTML structures inside if structure:
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/7c2ec527-a760-46bf-ae67-a8d2e10d6f4b)
   2. Components - we create reusable, independent components.
   3. Virtual DOM - it's virtual copy of DOM, with help of it preformance is improved. With help of that we update only necessary things in DOM, not rebuilding all DOM tree.
   4. One way data-binding. One-way data binding describes the direction of data binding between a data source and a UI/view. Example: State/Data  ───────>  UI/View
The UI receives data from the state, but changes in the UI do not automatically update the state.
   5. high performance - while updating components - we don't refresh, update all application.
      
   ______________

2. ### What is unindirectional data flow
   Children component're placed inside parent component. Data's transfered from parent component to child component. Benefits unindirectional data-flow:
       1. Easy to debug - cause we know how and frome where data is coming.
       2. Less errors - more control on data.
   Additional info: Angular traditionally supports two-way data binding (especially with forms) and also uses one-way binding in many places.Angular traditionally supports two-way data binding (especially with forms) and also uses one-way binding in many places.
   Data usually coming from parent to the child with help of props.
   ______________

3. ### What is state in react
   State in React - is object containing component an information. It can be changed. When state's changed, component is rerendered.
   Remember not to mutate directly React's state, cause it can lead to different problems, bugs.
   When state's updated, react calls render() method and component's updated.

   Generally speaking, any time a component needs to hold a dnynamic piece of data - you need a state to use it. Never mutate React state directly. Create a new value and pass it to the state updater.

   You can also have shared or global state in an application. Depending on the use case, you can use Context or a dedicated state-management solution (redux for example).
   ______________

5. ### Can browser read jsx
   Nope, it's used babel to transpile jsx code to regular JS.
   ______________
   
6. ### what is dom
   **Document Object Model** - is interface, representation that treats HTML as a tree structure, in which each node is object representing a part of the document. DOM defines a way nodes are accessed and manipulated.
   ![image](https://github.com/vaskoGut/Learning/assets/7413864/6c69442b-2d90-40a8-898d-f3e9d695c19a)
   **Virtual DOM** - it's virtual copy of DOM, with help of it preformance is improved. When state or props change, React creates new representation, compares it with previouse one, determines what actually needs to change in real DOM.
   React **Reconciliation** process of updating DOM. It updates the virtual DOM first and then uses the diffing algorithm to make efficient and optimized updates in the Real DOM.
   The main benefit is that React abstracts and optimizes DOM updates, rather than requiring developer to manually manipulate the DOM.
   
   ______________
8. ### difference between es5 es6
   - es6 ins newest version of js
   - es6 has additional type Symbol
   - es6 has 2 new ways of declaring variables: let and const
   - es6 has arrow function
   - es6- promises, async await. IN es5 it was handled with callbacks.
   - Modules - export, import.
   - It was introduced in es6 class syntax
   - spread operator
   - template operator
   ______________
 9. ### basic react app
    Install node, instal crea-react-app. It's ready to use.
    ______________
 10. ###  what is event in react
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
     2. If you use index ( 2nd param in map method ) as the key, then after filtering, the index values change, and React will treat items as new — breaking component identity.
      Key help React identify which items have changed, been added, or removed. So React can update the DOM efficiently, instead of re-rendering everything.

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

15. ### high ordered component
High-order components (HOCs) are wrappers for other components. They allow you to reuse logic across different components. 

For example, you might want to add a logger HOC, which logs information about mounting and unmounting of a component:

```javascript
export default withLogger(SomeComponent);
```

When a React component is created, it receives `props`:

```
You write:             React sees:
---------------------------------------------------
const LoggedHello =    const LoggedHello =
 withLogger(Hello) →    (props) => <Hello {...props} />;
```

Logger example:

```javascript
import { useEffect } from 'react';

export function withLogger(Component, name) {
  return function WithLogger(props) {
    useEffect(() => {
      console.log(`component ${name} mounted`);

      return () => {
        console.log(`component ${name} unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`[${name}] updated props`, props);
    });

    return <Component {...props} />;
  };
}

export function Hello(props) {
  return <div>{props.name}</div>;
}

const LoggedHello = withLogger(Hello, 'Hello');
```

It's worth to mention we use high order components with keyword with.

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
     
      React Context values can be technically mutable, but mutating them directly is ineffective because consumers do not re-render unless the context value’s reference changes.
      ```javascript
        function App() {
          const [user, setUser] = useState({ name: "John" });
        
          const contextValue = { user, setUser };
        
          return (
            <UserContext.Provider value={contextValue}>
              <Profile />
            </UserContext.Provider>
          );
        }
      ```
  
  26. ###  react-structuring-code
       You need specific folder for your components ( it can be also seperate folder for your common components ), for hooks, constants. 
       It's good to have proper structure - it's easier to find what you need, it's easier to make onboarding for new team members.
       It's god to use absoolute imports.
      

  28. ###  react-test-how-work
        1. YOu can use e2e tests ( when you test your whole applications ( all components connected 1 to another) on real scenarious, data ). You can also make unit tests ( when you testing behaviour of each component)
        2. We use ***react-test-library*** and **react-test-renderer** ( to render yoru components to js objects ). You operate on real DOM, while using this library. You can  find element by role or by data-testid. It can be also simulated events with help of that library.
        3.

      <img width="788" height="79" alt="image" src="https://github.com/user-attachments/assets/5e615baf-b712-4c59-b594-a3b5d2b89af8" />
      <img width="863" height="296" alt="image" src="https://github.com/user-attachments/assets/5c6eaa90-b0b4-4e88-a498-9ed163b00a63" />



  30. ###  react-dev-tools   
      React dev tools is extension, it can be installed for any browser. As rule we use it if we have some problem with performance ( for example component is rendered too many times ).

  31. ###  react-portals

      1. React portals let you render some component outside your normal react component structure.
      2. Example: you can use it for creating modals.
      3. portal will not inherit parent css styles. Remember using stopPropagation() - event emmited from a portal component - will propagate to the Reactt tree and trigger event on  ancestor component.
      Example createPortal:
  ![image](https://github.com/vaskoGut/Learning/assets/7413864/a4673b20-a45a-45cc-84be-ced9a5c92691)

   32. ###  lazy-loading-dynamic-imports
         1. Imagine you have component, that appears afoter in some scenarios. It's allways displayed in your app. But it still exists in your bundle. To fix it you can use lazy loading or dynamic imports.
         2. Below you can see lazy loading of component.
            ![image](https://github.com/user-attachments/assets/692a44c2-b19b-4ad7-a973-879c6e3d3299)
            Now inside our component we can use it with react suspense.
         3. Example of dynamic import: if some condition is met, then we import our component:
            ![image](https://github.com/user-attachments/assets/772da3e6-c332-4090-a5ef-1dd589dd6200)
            Here you will have error, cause you can't render Promise with appropriate handling of it. Acually its why is better to use lazy loading - it handles Promise issue of importing components.

   33. ###  code-splitting
         1. Splitting code is technique which allows to optimize the performance of React application.  With help of it you can split your code into smaller chunks and loading the on-deman.
         You can reduce load time. React provides built-in tools. Like lazy, suspend.
  
         ```javascript
           const SomeComponent = React.lazy(() => import('~/components/SomeComponnent')
          ```
         2. SUspense let you load fallback, while yoru children components are loading.
         3. One more way - is using dynamic imports ( for example for functions ).

   34. ###  ssr-csr
         1. **SSR** -  Server side rendering. **CSR** - CLient side rendering.
         2. Gatsby.js and Next.js supports both CSR and SSR.
         3. Static Pages are built during build time. SSR allow to render a page during run-time. You can deal with data  that is fetched when a user visits the page.
         4. 1 of the most importa benefits oF SSR can be improving performance of your website. You can reduce the amount of work the users's browser needs to do.


   35. ###  fragment-explanation
          **Fragment** alows you to return group ofchildren elments without need of extra DOM component.
          Advantages:
            1. Avoid Unnecessary DOM Nodes
            2. Better Performance

   36. ###  use-effect-empty-array
          Your effect will run only after initial render.

   37. ###  example-hook
        **Hooks** are reusable functions. Example: hook for fetching data, or another example hook for recognition screen size.
       ![image](https://github.com/vaskoGut/Learning/assets/7413864/c895a2bf-3b3d-4ac1-9922-589c079f583a)

   38. ###  event-listener
        **Hooks** are reusable functions. Example: hook for fetching data, or another example hook for recognition screen size.
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/6a2f472f-eb8f-4c6a-8237-0ed27deb947b)

   
   39. ### #too-many-useeffect-explain
        ![image](https://github.com/vaskoGut/Learning/assets/7413864/b2924d25-2088-4928-b941-4c79820fa729)
        solution: it's better to drop it in 1 useEffect and handle different cases. Or you can drop it in distinct function.

   40. ### #design-patterns-react
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

  41. ### #caching-react
      1 of possible solutions: You can set some flag with help of localstorage f.e. after you fetch data. And the you check if this flag is true, if it's you aren't fetching data 2nd time.

  42. ### #form-input-react-handling
      It's better use controlled components - assign some 'handleChange' function, and control state of input inside it. It's better approach for testing, debugging approaches.

  43. ### #react-hook-service-difference
      Reeact custom hook used to work with reused stateful logic. While service is used when you need something independent from react. Service can be used in next cases: Managing API requests and responses.
Storing business logic that can be shared across the application (not just in React components).

  44. ### #virtual-dom-shadow-dom-difference
      ***Virtual DOM*** is a JavaScript abstraction used by frameworks like React to efficiently update the real DOM by diffing changes.
      ***Shadow DOM*** is a browser feature used by Web Components to encapsulate markup and styles so they don’t leak or get affected by the outside page. They solve different problems and are often used independently

  46. ### #react-create-element-react-dom
      At first we creating elment with React.createElement() then we render it with ReactDOM.render(ourElmenet, mountElemnent). Now is used jsx. Youjust render elment in that way:
      function renderElement() { return <div><p>test<p></div> }. Main reason why it's better- it's syntax. You can create element a lot easier.

  47. ### #react-proptypes-question
      We dont use react proptypes ( which were running during runtime ). Cause in new projects we can use typescript and static types in development process.

  
  44. ### #react-event-handler
      Event handler - is function which is called on some action inside our component. F.e. onclick or onchange

  45. ### #forward-ref
      When to Use forwardRef
      You need direct access to a DOM element in a child functional component.
      Your component serves as a wrapper for other components, and you want to ensure the ref reaches the underlying DOM node.
      You are working with third-party libraries or animations that require direct DOM access.
      You are building reusable, customizable components where consumers might need ref access.
        ```javascript
         import React, { useRef, forwardRef } from 'react';
          // Child Component (receives ref)
          const InputComponent = forwardRef((props, ref) => {
            return <input ref={ref} {...props} />;
          });
          
          // Parent Component (passes ref)
          const Parent = () => {
            const inputRef = useRef();
          
            const focusInput = () => {
              inputRef.current.focus(); // Access child input
            };
          
            return (
              <div>
                <InputComponent ref={inputRef} placeholder="Type here..." />
                <button onClick={focusInput}>Focus Input</button>
              </div>
            );
          };
        
        export default Parent;
      ```

  47. ### #pure-function
      A pure functional component is a functional component that behaves like a pure function: it renders the same output for the same props and does not have side effects. If your functional component does something like data fetching or modifies state, it's not considered pure

  48. ### #component-unmount
         ```javascript
            useEffect(() => {
              return () => {
                clearFilters();
              };
            }, []);
         ```

 49. ### (#fc-function-difference
     Seo component name is just for example.

     ![image](https://github.com/user-attachments/assets/823f1c8d-f5a6-4870-9607-2db0d60b117e)

 49. ### #parent-use-child-state
     ![UsingChildstateInParent](https://github.com/user-attachments/assets/c04efb74-8dc2-492d-93a9-d057d242a57f)

 50. ### #rules-custom-hooks-react
     * Always Start Hook Names with "use"
     * Use Only Inside Functional Components or Other Hooks, don't use inside if constructions
     * Encapsulate reusable logic - create it in distinct file to not repeat same code in diffrent paces.
     * Use dependencies correctly in useEffect
    
     Worth to mention: 2 or more components using 1 hook dont share state. Hooks are way to reuse state logic.
 51. ### #handling-unmount-React
      ```javascript
         useEffect(() => {
          // Setup logic here (e.g. event listeners, subscriptions, timers)
        
          return () => {
            // Cleanup logic here (runs when component unmounts)
          };
        }, []); // Empty dependency array = run once on mount, cleanup on unmount
      ```

 52. ### #handling-path-change-react
      ```javascript
         const location = useLocation();

          useEffect(() => {
            // Reset filter whenever the path changes
            setFilter(defaultFilterValue);
          }, [location.pathname]); // Runs on route/pathname change
      ```

  53. ### #react-router
      a) React router - library that enables dynamic routing in react applications. It allows for navigation without refreshing the page ( spa behaviour ).
      React doesn'thave buit in router functionality.
      
      b) ***Link*** component is used to navigate without reloading page. ***a*** tag performs full page reload.
      
      c) Dynamic route parameters are variable parts of a URL that can chang. For example user id: /users/123, /users/abc, /users/john-doe. You can access it with help of useParams ( import { useParams } from 'react-router-dom' ).
      
      d) <Outlet/> used to render child route component or nothing, if child doesn't exist.
       ```javascript
         import { Outlet } from "react-router";
          export default function SomeParent() {
            return (
              <div>
                <h1>Parent Content</h1>
                <Outlet />
              </div>
            );
          }
      ```
       
      e) Nested routes - when 1 route is rendered inside another route.
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
      i) defer, await, suspense example:
      <img width="675" height="446" alt="image" src="https://github.com/user-attachments/assets/2b288455-2b81-4db7-a260-c570d06acc4e" />
      h) difference between useEffect and React Router Loader:
      <img width="562" height="620" alt="image" src="https://github.com/user-attachments/assets/9cb342f9-d35a-49a2-a86a-f79b918c0836" />
      k) The History API provides access to the browser's session histor. But in React project you should use just React Router library, it has bilt in hiostory functionality.
      l) import { useSearchParams } from 'react-router-dom'; And with help useSEarchParams you can get params.

  55. ### #react-plain-js
      1) Manual DOM Updates - You have to explicitly tell the browser what changed every time your app’s data changes. For example, if a user’s name updates, you might need to find the DOM node, clear old content, insert the new text, and handle edge cases (like event listeners disappearing).  As your UI grows more dynamic, this gets unmanageable. React uses a Virtual DOM that automatically figures out what changed and updates the real DOM efficiently. You just describe what the UI should look like for the current state, and React takes care of syncing it.
      2) State Management Is Messy - It’s hard to keep the UI consistent with plain js. React introduces component state (useState, useReducer) and a reactive render cycle — when state changes, React automatically re-renders the UI to match it
      3) Code Reuse and Structure Are Weak
      4) JSX - you can use in 1 file react and html.
      5) performance - updating the real DOM frequently is expensive — especially when you modify large trees.
      6) unidirectional data flow — data moves top-down from parent to child components.
This makes state changes predictable and easier to debug

  56. ### #hoc-functions
      ***A Higher-Order Function*** (HOF) is a function that does at least one of the following:
      Takes another function as an argument, or Returns a new function.
      Built in functions in js: map, filter, reduce.\

 56. ### #react-vanilla-js
      <img width="819" height="323" alt="image" src="https://github.com/user-attachments/assets/e29c70e3-570f-464f-930b-da2ed6c800a2" />

 57. ### #declarative-imperative-react
   React automatically manages DOM updates and re-rendering. So you generally speaking are describing what you want. Not doing it yourself.
   Vanila js - is more imperative approach. When you doing things 'by your hand'.


 59. ### #react-hydration
<img width="653" height="373" alt="image" src="https://github.com/user-attachments/assets/15992152-c638-4696-8b6f-9b5d5923ff00" />

 60. ### #component-rerendering
<img width="1536" height="1024" alt="ChatGPT Image Feb 23, 2026, 03_08_47 PM" src="https://github.com/user-attachments/assets/f6bdbd71-048a-436c-917d-8721826127a5" />
A component re-renders when its state changes, when it receives new props from a parent, when the context it consumes changes, or when a force update is triggered. Additionally, re-rendering can propagate from parent re-renders unless memoization is used.

 61. ### #client-server-components
***Server Components*** run on the server (Node.js or edge runtime) and send already-rendered HTML to the browser.

Key characteristics
Execute only on the server
No JavaScript sent to the client for that component
Can directly access databases, files, or backend APIs
Cannot use browser APIs like window or document
Cannot use React hooks like useState or useEffect

example - fetching users and rendering users list. Just simple example

Advantages
Smaller client-side bundle
Better performance
Faster initial page load
Secure access to backend resources

***Client Components*** run in the browser and allow interactivity.
Run in the browser
Support state and lifecycle hooks
Can use event handlers
Can access DOM and browser APIs

***SIMPLE RULE OF USING***:
If you need interactivity → Client Component
If you only need data rendering → Server Component

62. ### #useCallback-react
Use useCallback only if:
you're passing a function to memoized components
you're solving a real rerender problem

Example:
```javascript
 return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        rerender parent
      </button>

      <Child onIncrease={increase} />
    </div>
  );
```

```javascript
  // child is memoized:
const Child = ({ onIncrease }) => {
  console.log("Child render");

  return (
    <button onClick={onIncrease}>
      Increase
    </button>
  );
};

export default React.memo(Child);
```

***The problem***: Every time the parent renders, this function is recreated:
```javascript
const increase = () => {
  setCount(c => c + 1);
};
```
Since Child receives a different function reference, child component will be rerendered.
So in that case we need useCallback - with use of it you send all time same function to child. And component stopps to rerender.

63. ### one-twh-way-databinding
***One-way data binding:***
State/Data  ───────>  UI/View
The UI receives data from the state, but changes in the UI do not automatically update the state.

***Two-way data binding:***
Data flows in both directions:
Data/State  <──────>  UI
Changes in the data update the UI, and changes in the UI update the data automatically.
Example:
name = "John";
<input [(ngModel)]="name" />
If the user types "Mike":
Input updates → name becomes "Mike"
name changes → input updates

64. ### process-transpilation
The process of transpilation is a process of taking source code and rewriting it to
accomplish the same results but using syntax that’s understood by older browsers.

65. ### react-create-element-alternative
To not use reactcreateelement we use JSX.

***Two-way data binding:***
Data flows in both directions:
Data/State  <──────>  UI
Changes in the data update the UI, and changes in the UI update the data automatically.
Example:
name = "John";
<input [(ngModel)]="name" />
If the user types "Mike":
Input updates → name becomes "Mike"
name changes → input updates

66. ### react-19-default-props
<img width="462" height="137" alt="image" src="https://github.com/user-attachments/assets/7ff7099e-0cc8-4281-ba35-bcaa21a237ae" />
React 19 doesnt have default props. You can define it like above.

67. ### react-props-state-antipattern
<img width="834" height="493" alt="image" src="https://github.com/user-attachments/assets/4a4ef68b-4523-4319-956b-4c5004cfc93d" />

68. ### ref-update-question
useEffect updates ref after render. its why you can get old value

69. ### force-update-function
<img width="294" height="267" alt="image" src="https://github.com/user-attachments/assets/98f2152d-a61c-4604-b2d2-ef0abd4a037f" />

70. ### life-cycle-methods-react
- mounting; - unmounting; - updating;

71. ### react-memo
```javascript
  const MyComponent = React.memo(
    function MyComponent({ text }) {
      return <div>{text}</div>;
    },
    (prevProps, nextProps) => {
      return prevProps.text === nextProps.text;
    }
  );
```
