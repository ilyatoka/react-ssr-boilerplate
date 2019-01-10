export default (html, loadableState) => `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>React SSR Boilerplate</title>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
            ${loadableState.getScriptTag()}
        </body>
    </html>
`;
