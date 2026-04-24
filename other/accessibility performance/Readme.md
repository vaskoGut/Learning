
# ARCHITECTURE Questions
| Nm | #Question   |
| :---:   | :---: |
| 1   | [How does work CSR? How does work SSR? how does work SSG? What about performance? What about SEO?  What about Interactivity? What about development complexity?which type of project/app/website is better for each type of rendering?](#ssr-ssg-isr-difference)                                     |

 1. ###  ssr-ssg-isr-difference
     ***CSR*** (Client-Side Rendering): The browser downloads a minimal HTML file and uses JavaScript to build and render the page.
     
     ***SSR*** (Server-Side Rendering): The server renders the HTML page and sends it to the browser, which then displays it. #

     ***SSG*** (Static Site Generation): All HTML pages are created during the build/deployment phase, resulting in static HTML files that are served directly

     ****Performance****: SSG and SSR generally lead to faster initial page loads compared to CSR, as the browser receives a fully rendered page

     ****SEO****: SSR and SSG are generally better for SEO because search engines can easily crawl and index the content. CSR can present challenges for SEO as search engines may not be able to render the page fully. 

     ****Interactivity****: CSR is best for highly interactive applications, while SSG is best for static content and SSR is a good compromise

     ****Development Complexity****: SSG is the simplest to implement, followed by SSR, and CSR can be the most complex.

     ****SSG****: Blogs, documentation, static landing pages. 

     ****SSR****: News websites, e-commerce sites where SEO is critical and content updates frequently. 

     ****CSR****: Single-page applications (SPAs), dashboards, and applications with a lot of dynamic content and user interaction. 

     Static Site Generation (SSG) pre-renders all pages at build time for fast loads, while Incremental Static Regeneration (ISR) updates static content dynamically without rebuilding the entire site.
     ****How ISR Works****
    Initial Build: The page is statically generated at build time.
    User Request: When a user requests the page, they receive the cached version if it's still valid.
    Revalidation in the Background: If the page is stale (based on a set revalidation time), a new version is generated in the background while users still see the old page.
      Cache Update: Once the new page is generated, the cache updates, and the next request gets the fresh version.
      ***Example ISR***:
      ![image](https://github.com/user-attachments/assets/2a9ed844-d5f9-47ca-94ca-53cc62ce5fdd)
