export default html => `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>React SSR Boilerplate</title>
            <link rel="stylesheet" type="text/css" href="/assets/server.css">
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
        </body>
    </html>
`;
