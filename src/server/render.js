export default (html, css) => `
    <!doctype html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Title</title>
            <link rel="stylesheet" href="/assets/client.css">
        </head>
        <body>
            <div id="root">${html}</div>
            <style id="jss-server-side">${css}</style>
            <script src="/assets/vendor.js"></script>
            <script src="/assets/client.js"></script>
        </body>
    </html>
`;
