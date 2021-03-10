const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');

router.post('/add', (req, res) => {
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		productName: req.body.productName,
		productPrice: req.body.productPrice,
		productDiscription: req.body.productDiscription,
		rating: req.body.rating,
		smallImage: req.body.smallImage,
		largeImage: req.body.largeImage,
	});
	product
		.save()
		.then(() => {
			res.send(product);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;

// app.get('/', (req, res) => {
// 	res.send('Hello World!');
// });

// app.get('/products', (req, res) => {
// 	res.send(JSON.stringify(data));
// });

// app.get('/product/:productID', (req, res) => {
// 	const productId = req.params.productID;
// 	const product = data.products.filter((product) => product.id === productId);
// 	res.send(product);
// });
