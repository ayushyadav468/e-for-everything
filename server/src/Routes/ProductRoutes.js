const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');
const User = require('../Models/UserModel');

// GET all products
router.get('/', (req, res) => {
	Product.find()
		.exec()
		.then((result) => {
			if (result && result.length > 0) {
				res.status(200).json(result);
			} else {
				res.status(404).json({ error: { message: 'No product avaliable' } });
			}
		})
		.catch((err) => {
			console.log('Error in get route of product ' + err.message);
			res.status(500).json(err);
		});
});

// POST a product
router.post('/', (req, res) => {
	// Get details about product from body of request
	const ownerID = req.body.userID;
	User.findById(ownerID, (err, user) => {
		if (err) {
			console.log('Error in finding user ' + err.message);
			res.status(500).json(err);
		} else {
			if (user) {
				if (user.seller === true) {
					const product = new Product({
						_id: new mongoose.Types.ObjectId(),
						ownerID: ownerID,
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
							console.log('Error in post route of product ' + err.message);
							res.status(500).json(err);
						});
				} else {
					res.status(403).json({
						error: {
							message: 'user is not a seller',
						},
					});
				}
			} else {
				res
					.status(404)
					.json({ error: { message: 'No valid entry found for provided ID' } });
			}
		}
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
				res
					.status(404)
					.json({ error: { message: 'No valid product for provided ID' } });
			}
		})
		.catch((err) => {
			console.log('Error in get route of product ' + err.message);
			res.status(500).json(err);
		});
});

// PATCH(Update) a product by ID
router.patch('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findById(productID, (err, product) => {
		if (error) {
			console.log(
				'Error in finding product in patch route of products ' + err.message
			);
			res.status(500).json(err);
		} else {
			const ownerID = req.params.userID;
			// check if the owner of the product is same as the user updating the product
			if (ownerID == product.ownerID) {
				// Send patch request as
				// [{'propName': name of the prop as mention in model schema, 'value': value of the prop }]
				// If you want to send multiple props add more object to the array
				const updateProps = {};
				for (const ops of req.body) {
					updateProps[ops.propName] = ops.value;
				}
				// const product = {
				// 	productName: req.body.productName,
				// 	productPrice: req.body.productPrice,
				// 	productDiscription: req.body.productDiscription,
				// 	rating: req.body.rating,
				// 	smallImage: req.body.smallImage,
				// 	largeImage: req.body.largeImage,
				// };

				// model.findByIdAndUpdate(filter, update, option, callback)
				// {new: true} returns an updated object otherwise,
				// default functionality is to return object as it was before update
				Product.findByIdAndUpdate(
					productID,
					updateProps,
					{ new: true },
					(err, result) => {
						if (err) {
							console.log('Error in patch route of product ' + err.message);
							res.status(500).json(err);
						} else {
							res.status(200).json(result);
						}
					}
				);
			} else {
				res.status(403).json({
					error: {
						message: 'user is not the owner of this product',
					},
				});
			}
		}
	});
});

// DELETE a product by ID
router.delete('/:productID/:userID', (req, res) => {
	const productID = req.params.productID;
	Product.findById(productID, (err, product) => {
		if (error) {
			console.log(
				'Error in finding product in patch route of products ' + err.message
			);
			res.status(500).json(err);
		} else {
			const ownerID = req.params.userID;
			// check if the owner of the product is same as the user updating the product
			if (ownerID == product.ownerID) {
				Product.findByIdAndDelete(productID, (err, result) => {
					if (err) {
						console.log('Error in delete route of product ' + err.message);
						res.send(500).json(err);
					} else {
						res.send(200).json(result);
					}
				});
			} else {
				res.status(403).json({
					error: {
						message: 'user is not the owner of this product',
					},
				});
			}
		}
	});
});

module.exports = router;
