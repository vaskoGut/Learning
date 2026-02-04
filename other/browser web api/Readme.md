# BROWSWER API
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is domain?](#domain-explanation)                               |
| 2   | [What happens when you type a URL and press Enter?](#page-loading)                               |
| 3   | [When we say the browser parses HTML in a streaming way - what we mean?](#streaming-parsing)                               |
| 4   | [What is CORS and how does it work simply speaking? Why CORS important, what can be without it, what is default mechanism? Why not to use * sign](#cors-explanation)                               |

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
