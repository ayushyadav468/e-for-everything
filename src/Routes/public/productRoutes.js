const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../../Models/ProductModel');
const User = require('../../Models/UserModel');
const { productValidation } = require('../../Validation/ProductValidation');

// GET all products
router.get('/', (req, res) => {
	Product.find()
		.select('_id productName productPrice smallImage')
		.exec()
		.then((docs) => {
			if (docs && docs.length > 0) {
				const response = {
					count: docs.length,
					products: docs.map((doc) => {
						return {
							...doc._doc,
						};
					}),
				};
				res.status(200).json(response);
			} else {
				res.status(404).json({ error: { message: 'No product avaliable' } });
			}
		})
		.catch((err) => {
			console.log('Error in get route of product/all ' + err.message);
			res.status(500).json(err);
		});
});

// GET a product by ID
router.get('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findById(productID)
		.select('-__v -dateAdded')
		.exec()
		.then((docs) => {
			if (docs) {
				const response = {
					product: {
						ownerID: docs._doc.ownerID,
						productName: docs._doc.productName,
						productPrice: docs._doc.productPrice,
						productDiscription: docs._doc.productDiscription,
						smallImage: docs._doc.smallImage,
						largeImage: docs._doc.largeImage,
						rating: docs._doc.rating,
						reviews: docs._doc.reviews,
					},
				};
				res.status(200).json(response);
			} else {
				res
					.status(404)
					.json({ error: { message: 'No product found for the provided ID' } });
			}
		})
		.catch((err) => {
			console.log('Error in get route of product /:productID ' + err.message);
			res.status(500).json(err);
		});
});

module.exports = router;
