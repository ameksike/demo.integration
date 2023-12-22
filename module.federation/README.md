## Steps
- npx create-mf-app
- appOne: http://localhost:4001/remoteEntry.js
- appTwo: http://localhost:4002/remoteEntry.js
- Publish components through: 
    - **ModuleFederationPlugin** from ```module.federation\appOne\webpack.config.js```
        ```json
            {
                name: "appOne",
                filename: "remoteEntry.js",
                remotes: {},
                exposes: {
                    "./Header": "./src/components/Header.jsx",
                    "./Footer": "./src/components/Footer.jsx",
                }
            }
        ```
- Consume components through: 
    - **ModuleFederationPlugin** from ```module.federation\appTwo\webpack.config.js```
        ```json
            {
                name: "appTwo",
                filename: "remoteEntry.js",
                remotes: {
                    "appOne": "appOne@http://localhost:4001/remoteEntry.js"
                },
                exposes: {},
            }
        ```
    - ```appTwo/src/App.jsx```
        ```js
            import Header from "appOne/Header";
            import Footer from "appOne/Footer";
            const App = () => (
                <div className="mt-10 text-3xl mx-auto max-w-6xl">
                    <Header />
                    <Footer />
                </div>
            );
        ```

## Docs
- [React Module Federation](https://www.youtube.com/watch?v=4lxR_mv8Sgs)
- [create-mf-app](https://www.npmjs.com/package/create-mf-app)