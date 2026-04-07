# CSS
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is cumulative layout shift? and how to fix it?](#cumulative-layout-shift)                                                                                                |

1. ### cumulative-layout-shift
CLS most often occurs when dynamically loaded elements don’t have a predefined size.  

    1. Reserve space for the component (height, width )
    2. Mind-width, min-height - korzystaj
    3. 4️⃣ Flexbox / Grid with predictable layout
    If components move left or right due to dynamic changes:
    use flex: 0 0 auto; or grid-template-columns with defined widths,
    4. Lazy loading and placeholders. use a placeholder of the same size,
    5. Debugging CLS In Chrome DevTools: Performance → Web Vitals. In Lighthouse: check Cumulative Layout Shift
