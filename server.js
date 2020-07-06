const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.port || 8082;



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);