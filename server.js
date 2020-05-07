const request = require('request');
const express = require('express');
const app = express();
const path = require('path');

//port 
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');



// add css and images
app.use(express.static('public'))



// routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/greennewdeal.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/greennewdeal.html'));
});
app.get('/donate.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/donate.html'));
});

app.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/carbonfootprint.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/carbonfootprint.html'));
});

app.get('/political.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/political.html'));
});



// port and server setup
const port = process.env.PORT || 5500;
app.listen(port, () => {

    console.log(`this server is running on ${port}`)
})


// api

