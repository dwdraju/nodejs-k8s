'use strict';

const express = require('express');
var http = require('http');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Awesome !! \n');
});

app.get('/:id', (req,res) => {
  res.send('This is ' + req.params.id);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
