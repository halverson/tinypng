var tinify = require('tinify');
var fs = require('fs');
var Key = require('./key');

tinify.key = Key.password;

fs.readdir('src/', function (err, files) {
  'use strict';
  if (err) {
    return console.error(err);
  }

  files.forEach(function (file) {
    var source = tinify.fromFile('src/' + file);
    source.toFile('output/' + file);
  });
});
