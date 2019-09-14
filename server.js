// server.js

// init project
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

const app = express();

// Middleware
// app.use('/css', express.static('public/css'));
app.use(express.static('public_html'));
app.use(bodyParser.urlencoded({ extended: false }));
console.log(__dirname)
app.use('/', express.static(__dirname + '/../public_html'));

// Routes
app.get('/', (request, response) => {
  response.sendFile(path.resolve('../public_html/index.html'));
});

app.listen(process.env.PORT || 3000);
