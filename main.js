var tinify = require('tinify');
var fs = require('fs');
var Key = require('./key');

tinify.key = Key.password;

fs.readdir('src/', function (err, files) {
  'use strict';
  
  if (err) {
    console.error(err);
  }

  files.forEach(function (file) {
    
    console.log(file);
    
    if (file.charAt(0) !== '.') {
      var source = tinify.fromFile('src/' + file);
      source.toFile('output/' + file);
    } else {
      console.error("Not a valid image!");
    }
    
  });
});
