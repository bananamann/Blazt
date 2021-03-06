const express = require('express')
const app = express()

var path = require('path');

app.use('/static', express.static(path.join(__dirname, 'css')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
