var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.listen(8000, () => {
	console.log('app is listning at http://localhost:8000');
});
