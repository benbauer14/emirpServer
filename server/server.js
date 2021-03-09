//require express to make server
const express = require('express');
//our app
const app = express(); 
//this sets the root folder as server/public. Look here for the content of the webpage
app.use(express.static('server/public') );

// globals
const port = 5000;
let devices = [ 'android', 'fire tablet']
// tell our app to spin up and listen to a specific port
app.listen(port, ()=> {// uses arrow function "()=> {}"
    console.log('server is up')

}) 

// our first GET route. if user navigates to http://10.0.0.79:5000/devices it will get the devices array returned.
app.get('/devices', ( req, res) => { //req MUST come before res no error will occur. In alphabetical order.
    console.log( '/devices GET')
    res.send( devices ) // sends devices array
})
