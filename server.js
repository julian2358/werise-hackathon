const request = require('request');
const express = require('express');
const app = express();
const path = require('path');

//port 
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');



// add css and images
app.use(express.static('public'))
app.use(express.static(__dirname + '/public'));

//test
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


const port = process.env.PORT || 3042;
app.listen(port, () => {
    console.log(`this server is running on ${port}`)
})