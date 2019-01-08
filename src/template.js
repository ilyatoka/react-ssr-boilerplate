// html skeleton provider
export default function template(title, content = "", initialState = {}) {
  let scripts = ""; // Dynamically ship scripts based on render type
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                <script src="build/main.js"></script>
                `;
  } else {
    scripts = ` <script src="build/main.js"> </script> `;
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title>${title}</title>
                <link href="build/main.css" rel="stylesheet" type="text/css">
              </head>
              <body>
                <div id="root">${content}</div>
                ${scripts}
              </body>
              </html>
              `;

  return page;
}
