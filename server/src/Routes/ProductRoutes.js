const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');

// GET all products
router.get('/', (req, res) => {
	Product.find()
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in get route of product' + err.message);
			res.status(500).json({ error: err });
		});
});

// POST a product
router.post('/', (req, res) => {
	// Get details about product from body of request
	const product = new Product({
		_id: new mongoose.Types.ObjectId(),
		productName: req.body.productName,
		productPrice: req.body.productPrice,
		productDiscription: req.body.productDiscription,
		rating: req.body.rating,
		smallImage: req.body.smallImage,
		largeImage: req.body.largeImage,
	});
	// .save() returns a promise
	product
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			console.log('Error in post route of product' + err.message);
			res.status(500).json({ error: err });
		});
});

// GET a product by ID
router.get('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findById(productID)
		.exec()
		.then((result) => {
			if (result) {
				res.status(200).json(result);
			} else {
				res.status(404).json({ message: 'No valid product for given ID' });
			}
		})
		.catch((err) => {
			console.log('Error in get route of product' + err.message);
			res.status(500).json({ error: err });
		});
});

// PATCH(Update) a product by ID
router.patch('/:productID', (req, res) => {
	const productID = req.params.productID;
	const product = {
		productName: req.body.productName,
		productPrice: req.body.productPrice,
		productDiscription: req.body.productDiscription,
		rating: req.body.rating,
		smallImage: req.body.smallImage,
		largeImage: req.body.largeImage,
	};
	// model.findByIdAndUpdate(filter, update, option, callback)
	// {new: true} returns an updated object otherwise,
	// default functionality is to return object as it was before update
	Product.findByIdAndUpdate(
		{ _id: productID },
		{
			$set: {
				productName: product.productName,
				productPrice: product.productPrice,
				productDiscription: product.productDiscription,
				rating: product.rating,
				smallImage: product.smallImage,
				largeImage: product.largeImage,
			},
		},
		{ new: true },
		(err, result) => {
			if (err) {
				console.log('Error in patch route of product' + err);
				res.status(500).json({ error: err });
			} else {
				res.status(500).json(result);
			}
		}
	);
});

// DELETE a product by ID
router.delete('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findByIdAndDelete(productID, (err, result) => {
		if (err) {
			console.log('Error in delete route of product' + err);
			res.send(500).json({ error: err });
		} else {
			res.send(200).json(result);
		}
	});
});

module.exports = router;
