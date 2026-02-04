# BROWSWER API
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is domain?](#domain-explanation)                               |
| 2   | [What happens when you type a URL and press Enter?](#page-loading)                               |
| 3   | [When we say the browser parses HTML in a streaming way - what we mean?](#streaming-parsing)                               |
| 4   | [What is CORS and how does it work simply speaking? Why CORS important, what can be without it, what is default mechanism? Why not to use * sign](#cors-explanation)                               |
| 5   | [How browser works when it parsing html to dom and see <script> tag?](#parsing-html-script)                               |
| 6   | [What if used async or defer?](#parsing-html-async-defer)                               |
| 7   | [Normal script, defer, async diff? What are best real  life cases for defer, best for async?](#script-async-defer-diff)                               |
| 8   | [What is intersection observer?](#intersection-observer)                               |
| 9   | [Service worker?](#service-worker)                               |

What is a Service Worker?

A Service Worker is a background JavaScript worker that sits between your web app and the network.

Think of it as a programmable network proxy inside the browser.

It can:

Intercept network requests

Decide where responses come from (network, cache, custom logic)

Work even when the page is closed (with limits)

1. ### domain-explanatio
A domain is basically a human-readable name for an IP address.
Instead of remembering numbers like:
142.250.74.206
we use a domain like:
google.com

2. ### page-loading
When a URL is entered, the browser resolves DNS, establishes a TCP/TLS connection, sends an HTTP request, receives HTML, parses it into the DOM, downloads and parses CSS to build the CSSOM, executes JavaScript,
builds the render tree, performs layout and paint, and finally displays the page.

3. ### streaming-parsing
The browser does not wait for the entire HTML file to download before it starts working on it

4. ### cors-explanation
CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls whether a web page from one origin is allowed to make requests to another origin.
Without CORS:
Any website could read responses from another website
This would be a huge security risk
So browsers block cross-origin responses by default.
* sign means u generally speaking allow everything.

5. ### parsing-html-script
Default behavior:
HTML parsing stops
JS is downloaded
JS is executed
Parsing resumes

6. ### parsing-html-async-defe
defer → run after HTML parsing
async → run ASAP, unordered

7. ### script-async-defer-diff
<img width="222" height="42" alt="image" src="https://github.com/user-attachments/assets/7aa36db3-809e-406c-a261-b35814e45d19" />

Normally this blocks rendering html.

<img width="257" height="62" alt="image" src="https://github.com/user-attachments/assets/ed76c293-df36-4f22-9028-6a7b8e2a9147" />
<img width="287" height="137" alt="image" src="https://github.com/user-attachments/assets/609c5d74-2e54-4311-819a-a19156d3e4d9" />

HTML parsing is not blocked.

<img width="367" height="292" alt="image" src="https://github.com/user-attachments/assets/aa4a7687-5d97-4c90-a136-adb9f881efec" />

HTML parsing is not blocked while downloading, but parsing pauses briefly during execution.

Both async and defer avoid blocking HTML parsing. defer preserves order and runs after DOM parsing, while async runs as soon as the script is ready, without order guarantees

<img width="677" height="462" alt="image" src="https://github.com/user-attachments/assets/7e8530ca-0ac5-444a-817c-5607c19a2cdf" />
                           
8. ### intersection-observer
Intersection Observer is a browser API that lets you know when an element enters or leaves the viewport (or another container) — without constantly listening to scroll events.

9. ### service-worker
A Service Worker is a background JavaScript worker that sits between your web app and the network.
Think of it as a programmable network proxy inside the browser.
It can:
Intercept network requests
Decide where responses come from (network, cache, custom logic)
Work even when the page is closed (with limits) 
