Emirp Node/Express intro
---

[] set up folders

root folder
server/public/
server/public/scripts
server/public/vendors
server/public/styles

[] init git
[] add .gitignore (in root folder, add .DS_Store & node_modules)
[] add index.html to public folder
[] add client.js to server/public/scripts
[] add JQuery to server/public/vendors
[] create server.js file in the server folder
[] npm install express (should have a node_modules folder in root)
[] edit server.js (required express setup , setup express static)
[] npm init -- y (this will initialize the npm project will use default names)
[] update server.js

```
//require express to make server
const express = require('express');
//our app
const app = express(); 
//this sets the root folder as server/public. Look here for the content of the webpage
app.use(static('server/public') );
// tell our app to spin up and listen to a specific port
app.listen(5000, ()=> {// uses arrow function "()=> {}"
    console.log('server is up')

}) 
```