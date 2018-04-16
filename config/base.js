const path = require('path');

const packageJSON = require('../package.json');

const port = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';

const root = path.resolve(__dirname, '../');
const src = path.resolve(root, './src/app');
const output = path.resolve(root, './build');

const options = {
    paths: {
        root: root,
        src: src,
        output: output,
        entry: './app.js',
        htmlPath: 'app.html',
        outputHtml: 'index.html',
        img: './assets/img'
    },
    port: port,
    package: packageJSON,
    isDevelop: NODE_ENV === 'development',
    isProd: NODE_ENV === 'production'
};

module.exports = options;