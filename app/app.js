const express = require('express')
const app = express()

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, function () {
  console.log('Blazt is now listening on port 3000!')
})
