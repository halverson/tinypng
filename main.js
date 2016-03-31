var tinify = require('tinify');
var fs = require('fs');

tinify.key = 'qW4HaKZhjU-8DgPLWXQW00IlKdVtJV1d';

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
