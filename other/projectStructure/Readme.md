# Architecture design questions
| Nm | #Question   |
| :---:   | :---: |
| 1   | [Practical example: you need to call some script and add smth to the header only after some behaviour user on page. In gatsby.js pages are rendered statically during build, to do smth like that you need SSR.What better option here, what to use?](#script-interaction-load)                               |
| 2   | [You open the browser console and see this:❌ Access to XMLHttpRequest blocked by CORS policy. Front-end is on 1 localhost, and back-end on another.](#cors-localhost-problem)                               |


# PROJECT STRUCTURE
| Nm | #Question   |
| :---:   | :---: |
| 1   | [What is packages json? what does it include?](#package-json)                               |
| 2   | [What is package.lock file? what does it include?](#package-lock)                               |
| 3   | [Npm and yarn diff?](#npm-yarn-diff)                               |

1. ### script-interaction-load
```javascript
  export default function Page() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!loaded) {
        const script = document.createElement("script")
        script.src = "https://example.com/script.js"
        script.async = true
        document.head.appendChild(script)

        setLoaded(true)
        window.removeEventListener("scroll", handleScroll)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [loaded])

  return <div>My page</div>
}
```

If you want this ***globally***:
export const onClientEntry = () => {
  window.addEventListener("scroll", function handler() {
    const script = document.createElement("script")
    script.src = "https://example.com/script.js"
    document.head.appendChild(script)

    window.removeEventListener("scroll", handler)
  })
}

You need ***SSR*** (gatsby-ssr.js) only if:
•	The script/meta must be present in the initial HTML
•	It depends on request-time data (cookies, auth, geo, etc.)
•	It must be visible to SEO crawlers immediately

2. ### cors-localhost-problem
  1. If you use vite, you can fix it in config by adding proxy: server: { proxy: { '/api': 'http://localhost:8000' }}
  2. Backend CORS middleware — the proper fix app.use(cors({ origin: 'http://localhost:3000' }))
  3. Manual headers - you can change it on back-end side. res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')


1. ### package-json
Package.json files includes metadata of your project, also list of project dependencies.

2. ### package-lock
Package lock file includes version of npm packages

3. ### npm-yarn-diff
npm – the default package manager that comes with Node.js.
yarn – an alternative package manager created by Facebook (Meta) to fix early npm issues.
