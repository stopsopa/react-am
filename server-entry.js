
const path              = require('path');

const express           = require('express');

const app               = express();

const serverEntry      = require('http').Server(app);

const bodyParser        = require('body-parser');

const host              = '0.0.0.0';

const port              = 8080;

const web               = path.resolve(__dirname, '.');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

import routes from './routes';

(function (list) {
    app.use((req, res, next) => {

        if (list.indexOf(req.url.split('?')[0]) > -1) {

            req.url = '/start.html';
        }

        next()
    });
}(['/'].concat(Object.keys(routes))));

app.use(express.static(web, { // http://expressjs.com/en/resources/middleware/serve-static.html
    // maxAge: 60 * 60 * 24 * 1000 // in milliseconds
    maxAge: '356 days', // in milliseconds max-age=30758400
    setHeaders: (res, path) => {

        if (/\.bmp$/i.test(path)) { // for some reason by default express.static sets here Content-Type: image/x-ms-bmp

            res.setHeader('Content-type', 'image/bmp')
        }

        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control
        // res.setHeader('Cache-Control', 'public, no-cache, max-age=30758400')
        // res.setHeader('Cache-Control', 'public, only-if-cached')
    }
}));

serverEntry.listen(port, host, undefined, () => {

    console.log(`\n 🌎  Server is running ` + `${host}:${port}\n`)
});