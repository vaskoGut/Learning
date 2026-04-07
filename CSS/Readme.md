# CSS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is cumulative layout shift? and how to fix it?](#cumulative-layout-shift)                                                                                                |
| 2   | [What are mixins and functions in sass? Examples](#Sass-mixins-functions)                                                                                                |
| 3   | [How to use variables in sass?](#sass-variables)                                                                                                |

1. ### cumulative-layout-shift
CLS most often occurs when dynamically loaded elements don’t have a predefined size.  

    1. Reserve space for the component (height, width )
    2. Mind-width, min-height - korzystaj
    3. 4️⃣ Flexbox / Grid with predictable layout
    If components move left or right due to dynamic changes:
    use flex: 0 0 auto; or grid-template-columns with defined widths,
    4. Lazy loading and placeholders. use a placeholder of the same size,
    5. Debugging CLS In Chrome DevTools: Performance → Web Vitals. In Lighthouse: check Cumulative Layout Shift

2. ### Sass-mixins-functions
***Mixin*** → generates CSS
***Function*** → generates a value to use inside CSS

***Mixin*** → generates CSS
    ```javascript
    @mixin flex-center($direction: row) {
      display: flex;
      flex-direction: $direction;
      justify-content: center;
      align-items: center;
    }
    ```
    
***Function*** → generates a value to use inside CSS
```javascript
    @function px-to-rem($px) {
      @return $px / 16 * 1rem;
    }
    
    body {
      font-size: px-to-rem(18); // returns 1.125rem
    }
```

3. ### sass-variables
Variables can store almost any type of value:
Colors
Fonts
Sizes (px, em, rem)
Spacing
URLs


