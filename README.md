# README

This is a little node.js script that will compress all images in a given directory using the TinyPNG API.

## Using the thing

1. Make sure you have node and npm installed. Open a terminal and run "npm install" in the root directory of this project.
2. Put your TinyPNG key into the 'Special' variable in the key.js file. Get one from tinypng.com.
3. In main.js, make sure that the path names in the code match your actual folder structure and that you have images (either png or jpg or both) in the source ('/src') folder.
4. Run "node main.js" from the terminal.
5. Wait for your images to be uploaded, compressed and returned by the TinyPNG service.