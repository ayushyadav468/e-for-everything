var express = require('express');
var cors = require('cors');
const data = require('./data/data');

var app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/data', (req, res) => {
	res.send(JSON.stringify(data));
});

app.listen(8000, () => {
	console.log('app is listning at http://localhost:8000');
});
