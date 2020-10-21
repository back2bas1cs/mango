const path = require('path');

module.exports = {
 entry: './src/index.js',
 output: {
   filename: 'bundle.js',
   pathname: path.resolve(__dirname, 'public')
 }
};