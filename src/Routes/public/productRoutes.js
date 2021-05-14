const router = require('express').Router();
const Product = require('../../Models/ProductModel');

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
			res.status(500).json({ error: { message: err.message } });
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
			res.status(500).json({ error: { message: err.message } });
		});
});

// GET multiple product by id
// *{
// *  "productIDs": [
// *      "604d8a4ef5a3e7197c1ecaea",
// *      "604d8ae4f5a3e7197c1ecaeb",
// *   ]
// *}
router.patch('/multiple', (req, res) => {
	const productIDs = req.body.productIDs;
	// find() function finds multiple product using productIDs
	Product.find()
		.where('_id')
		.in(productIDs)
		.select('-ownerID -rating -dateAdded -reviews -__v')
		.exec()
		.then((result) => {
			// result => array of objects
			const response = {
				count: result.length,
				products: [...result],
			};
			res.status(200).json(response);
		})
		.catch((err) => {
			res.status(500).json({ error: { message: err.message } });
		});
});
module.exports = router;
