# CSS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is cumulative layout shift? and how to fix it?](#cumulative-layout-shift)                                                                                                |
| 2   | [What are mixins and functions in sass? Examples](#Sass-mixins-functions)                                                                                                |
| 3   | [How to use variables in sass?](#sass-variables)                                                                                                |
| 4   | [What are pros of nesting in sass?](#pros-nesting)                                                                                                |
| 5   | [What is BEM CSS naming approach?](#bem-naming)                                                                                                |
| 6   | [What is focal point?](#focal-point)                                                                                                |

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

4. ### pros-nesting
***Pros of Nesting***
Better readability: Nesting reflects the HTML structure, so it’s easier to see the relationships between elements.
Reduced repetition: Avoid repeating parent selectors multiple times.
Organized styles: Group related styles together, making your SCSS cleaner.
Easy pseudo-class management: Use & for :hover, :focus, :active without repeating the full selector.
***Cons of nesting***
Hard to override styles: Very specific selectors make overriding in other CSS tricky.
Reduced reusability: Styles tied to a specific hierarchy are harder to reuse in different contexts.
Performance concern (minor): Extremely deep nesting may slightly affect rendering, though modern browsers handle it well.

5. ### bem-naming

***Block*** – the main component, like header, button, or card.
***Element*** – a part of the block, like title or icon inside a card.
***Modifier*** – a variant or state of a block or element, like card--large or button--active.

Example:
```javascript
<div class="card card--large">
  <h2 class="card__title">Hello</h2>
  <p class="card__text">Some text</p>
</div>
card → Block
card__title → Element of the block
card--large → Modifier of the block
```

6. ### focal-point

Web layouts are responsive, meaning images often get:
cropped (different screen sizes)
resized (mobile vs desktop)
repositioned (flex/grid layouts)

Without a focal point, you might accidentally cut off something important—like a face, product, or subject.
A ***focal point*** tells the browser or design system:
“This is the part of the image you should prioritize keeping visible.”
