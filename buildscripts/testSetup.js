//This file isn't transpiled so use CommonJS and ES5 only

//Register babel to transpile before tests run

require('babel-register')();

//Disable webpack features Mochas won't understand, like CSS

require.extensions['.css'] = function() {};
