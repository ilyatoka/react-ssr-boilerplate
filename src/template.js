// html skeleton provider
export default function template(
  title,
  content = "",
  js,
  css,
  initialState = {}
) {
  let scripts = js.reduce(
    (previous, item) =>
      previous + `<script src="/build/bundle/${item}"></script>`,
    ""
  );
  const styles = css.reduce(
    (previous, item) =>
      previous +
      `<link href="build/bundle/${item}" rel="stylesheet" type="text/css">`,
    ""
  );
  if (content) {
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(initialState)}
                </script>
                ${scripts}
              `;
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <title>${title}</title>
                ${styles}
              </head>
              <body>
                <div id="root">${content}</div>
                ${scripts}
              </body>
              </html>
              `;

  return page;
}
