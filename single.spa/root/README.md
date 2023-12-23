
### Notes
- Main app: single.spa\root\src\index.ejs
    ```js
    return merge(defaultConfig, {
        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.ejs",
            }),
        ],
    });
  ```
- 