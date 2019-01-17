export default (html, preloadedState) => `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>React SSR Boilerplate</title>
            <link rel="stylesheet" type="text/css" href="/assets/server.css">
        </head>
        <body>
            <div id="root">${html}</div>
            <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(
              preloadedState
            ).replace(/</g, "\\u003c")}
            </script>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
        </body>
    </html>
`;
