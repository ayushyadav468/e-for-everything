var express = require('express');
var cors = require('cors');
const data = require('./src/data/productData');

var app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/products', (req, res) => {
	res.send(JSON.stringify(data));
});

app.get('/product/:productID', (req, res) => {
	const productId = req.params.productID;
	const product = data.products.filter((product) => product.id === productId);
	res.send(product);
});

app.listen(8000, () => {
	console.log('app is listning at http://localhost:8000');
});
