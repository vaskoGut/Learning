# BROWSWER API
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is domain?](#domain-explanation)                               |
| 2   | [What happens when you type a URL and press Enter?](#page-loading)                               |
| 3   | [When we say the browser parses HTML in a streaming way - what we mean?](#streaming-parsing)                               |

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

