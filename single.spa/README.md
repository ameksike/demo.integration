
## STEP 1: Create Root app 
- npm install --global create-single-spa
- npx create-single-spa --moduleType root-config
```
? Directory for new project ./root
? Which package manager do you want to use? npm
? Will this project use Typescript? No
? Would you like to use single-spa Layout Engine Yes
? Organization name (can use letters, numbers, dash or underscore) demo
```
For further information, go to: [create-single-spa docs](https://single-spa.js.org/docs/create-single-spa), and [¿Cómo hacer una app con Angular y React al mismo tiempo? ](https://www.youtube.com/watch?v=zKWz41B_ECw).

## STEP 2: Create App 1 - React
- npx create-single-spa --moduleType app-parcel
```
? Directory for new project ./list
? Which framework do you want to use? react
? Which package manager do you want to use? npm
? Will this project use Typescript? Yes
? Organization name (can use letters, numbers, dash or underscore) demo
? Project name (can use letters, numbers, dash or underscore) list
```
- cd ./list/
- npm run start
The @demo/list microfrontend is running in "integrated" mode, since standalone-single-spa-webpack-plugin is disabled. This means that it does not work as a standalone application without changing configuration. 

To develop this microfrontend, try the following steps: 
 
1. Copy the following URL to your clipboard: http://localhost:4100/demo-list.js
2. In a new browser tab, go to the your single-spa web app. This is where your "root config" is running. You do not have to run the root config locally if it is already running on a deployed environment - go to the deployed environment directly.
3. In the browser console, run localStorage.setItem('devtools', true); Refresh the page.
4. A yellowish rectangle should appear at the bottom right of your screen. Click on it. Find the name @demo/list and click on it. If it is not present, click on Add New Module.
5. Paste the URL above into the input that appears. Refresh the page.
6. [Add SCSS support](https://webpack.js.org/loaders/sass-loader/#root).
    - ``` npm install sass-loader sass webpack --save-dev ```
    - single.spa\list\webpack.config.js
    - ```
        module: {
          rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
          ],
        }
    ```
7. Congrats, your local code is now being used!
8. Add support for [Tailwindcss](https://tailwindcss.com/) based on this [styleguide](https://github.com/react-microfrontends/styleguide/tree/master)
  - npm install tailwindcss
  - npm install -D postcss autoprefixer sass-loader
  - create files: ``` single.spa\list\postcss.config.js ``` and ``` single.spa\list\tailwind.config.js ```
  - update the ``` single.spa\list\webpack.config.js ```
      ```js
        return merge(defaultConfig, {
            module: {
              rules: [
                {
                  test: /\.s[ac]ss$/i,
                  use: [
                    require.resolve("style-loader", {
                      paths: [require.resolve("webpack-config-single-spa")],
                    }),
                    require.resolve("css-loader", {
                      paths: [require.resolve("webpack-config-single-spa")],
                    }),
                    "postcss-loader",
                    "sass-loader",
                  ],
                },
              ],
            },
          });
      ```

For further information about "integrated" mode, see the following links: 
* [Local Development Overview](https://single-spa.js.org/docs/recommended-setup#local-development)
* [Import Map Overrides Documentation](https://github.com/joeldenning/import-map-overrides)

To run this microfrontend in "standalone" mode, the standalone-single-spa-webpack-plugin must not be disabled. In some cases, this is done by running npm run start:standalone. Alternatively, you can add --env standalone to your package.json start script if you are using webpack-config-single-sp
a.  If neither of those work for you, see more details about enabling standalone mode at [Standalone Plugin Documentation](https://github.com/single-spa/standalone-single-spa-webpack-plugin). 


### Next 
1. Add shared dependencies
* Locate the import map in src/index.ejs
* Add an entry for modules that will be shared across your dependencies. For example, a React application generated with create-single-spa will need to add React and ReactDOM to the import map.
```
"react": "https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.production.min.js",
"react-dom": "https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.production.min.js"
```

Refer to the corresponding [single-spa framework helpers](https://single-spa.js.org/docs/ecosystem/#help-for-frameworks) for more specific information.

2. Create your next single-spa application
* Generate a single-spa application with create-single-spa and follow the prompts until it is running locally
* Return to the root-config and update the import map in src/index.ejs with your project's name. It's recommended to use the application's package.json name field.
* Open src/root-config.js and remove the code for registering this application
* Uncomment the registerApplication code and update it with your new application's name

After this, you should no longer see this welcome page but should instead see your new application!
* [Shared dependencies documentation on single-spa.js.org](Shared dependencies documentation on single-spa.js.org)
* [SystemJS](https://github.com/systemjs/systemjs/) and [Import Maps](https://github.com/systemjs/systemjs/blob/master/docs/import-maps.md)
* [Single-spa ecosystem](https://single-spa.js.org/docs/ecosystem/)

## Main Layout
```js
    <single-spa-router>
    <main>
        <route default>
        <application name="@single-spa/welcome"></application>
        </route>
    </main>
    </single-spa-router>

    <script type="systemjs-importmap">
      {
        "imports": {
            "single-spa": "https://cdn.jsdelivr.net/npm/single-spa@5.9.0/lib/system/single-spa.min.js"
        }
      }
    </script>

    <% if (isLocal) { %>
    <script type="systemjs-importmap">
      {
        "imports": {
            "@single-spa/welcome": "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js",
            "@demo/root-config": "//localhost:9000/demo-root-config.js"
        }
      }
    </script>
    <% } %>
  ```

## STEP 3: Create App 2 - Angular
- npx create-single-spa --moduleType app-parcel
```
? Directory for new project ./form
? Which framework do you want to use? angular
? Project name (can use letters, numbers, dash or underscore) form
? Would you like to add Angular routing? No
? Which stylesheet format would you like to use? SCSS   [ https://sass-lang.com/documentation/syntax#scss                ]
```
- cd ./form/
- npm run serve:single-spa:form
- http://localhost:4200/main.js
- Importing the Angular app into the root: 
```
ERROR:
application '@demo/form' died in status SKIP_BECAUSE_BROKEN: NG0908: In this configuration Angular requires Zone.js
RuntimeError@http://localhost:4200/main.js:10758:5
```
```
SOLVE:
<script src="https://cdn.jsdelivr.net/npm/zone.js@0.11.3/dist/zone.min.js"></script>
```

## STEP 4: Create App 3 - State Management
- npx create-single-spa --moduleType util-module
```
? Directory for new project ./store
? Select type to generate in-browser utility module (styleguide, api cache, etc)
? Which framework do you want to use? none
? Which package manager do you want to use? npm
? Will this project use Typescript? Yes
? Organization name (can use letters, numbers, dash or underscore) demo
? Project name (can use letters, numbers, dash or underscore) store
```
- npm run build 
- http://localhost:4300/demo-store.js
- Publish the service through: 
    - ``` single.spa\root\src\microfrontend-layout.html``` >> ``` <route default> ```
    - ``` single.spa\root\src\index.ejs ``` >> ``` <script type="systemjs-importmap">  ```
- Import the store into Angular app 
    - single.spa\form\extra-webpack.config.js
    - ```js
        module.exports = (config, options) => {
        const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);
        singleSpaWebpackConfig.externals = ["single-spa", /^@demo\/store$/];
        return singleSpaWebpackConfig;
      };
      ```
    - Import the types ``` single.spa\form\src\types\demo-store.d.ts ```
    - Include the types into ``` single.spa\form\tsconfig.json ```
    - ```json 
      {
          "compilerOptions": {
            "typeRoots": ["./src/types", "./node_modules/@types"]
          }
      }
      ```
- Import the store into React app 
    - Import the types ``` single.spa\list\src\types\demo-store.d.ts ```
    - Include the types into ``` single.spa\list\tsconfig.json ```
    - ```json 
      {
          "compilerOptions": {
            "typeRoots": ["./src/types", "./node_modules/@types"]
          }
      }
      ```