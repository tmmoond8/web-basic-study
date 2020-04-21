import express from 'express';
import fs from 'fs';
import path from 'path';
import url from 'url';
import { renderPage, prerenderPages } from './common';

const app = express();

const prerenderHtml = {};
for (const page of prerenderPages) {
  const pageHtml = fs.readFileSync(
    path.resolve(__dirname, `../dist/${page}.html`),
    'utf8',
  );
  prerenderHtml[page] = pageHtml;
}

app.use('/dist', express.static('dist'));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', (req, res) => {
  const parseURL = url.parse(req.url, true);
  const page = parseURL.pathname ? parseURL.pathname.substr(1) : 'home';
  const initialData = { page };

  const pageHtml = prerenderPages.includes(page)
    ? prerenderHtml[page]
    : renderPage(page);

  const result = pageHtml
    .replace('__DATA_FROM_SERVER__', JSON.stringify(initialData))
  res.send(result);
});


app.listen(3000);