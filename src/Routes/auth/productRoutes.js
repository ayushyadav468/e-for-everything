const mongoose = require('mongoose');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const Product = require('../../Models/ProductModel');
const User = require('../../Models/UserModel');

// GET all products by a seller
router.get('/user', verifyToken, (req, res) => {
	const userID = req.user.userID;
	Product.find({ ownerID: userID })
		.select('-__v -dateAdded')
		.exec()
		.then((result) => {
			if (result) {
				const response = {
					count: result.length,
					products: [...result],
				};
				res.status(200).json(response);
			} else {
				res
					.status(404)
					.json({ error: { message: 'No product found for the provided ID' } });
			}
		})
		.catch((err) => {
			console.log('Error in get route of product/user ' + err.message);
			res.status(500).json({ error: { message: err.message } });
		});
});

// POST a product
router.post('/', verifyToken, (req, res) => {
	// Get details about product from body of request
	const ownerID = req.user.userID;
	User.find({ ownerID: ownerID }, (err, user) => {
		if (err) {
			console.log('Error in finding user ' + err.message);
			res.status(500).json({ error: { message: err.message } });
		} else {
			if (user) {
				if (user.seller === true) {
					// product validation
					const { error } = productValidation(req.body);
					if (error)
						return res
							.status(400)
							.json({ error: { message: error.details[0].message } });

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
						.then((savedProduct) => {
							const response = {
								product: {
									ownerID: savedProduct._doc.ownerID,
									productName: savedProduct._doc.productName,
									productPrice: savedProduct._doc.productPrice,
									productDiscription: savedProduct._doc.productDiscription,
									smallImage: savedProduct._doc.smallImage,
									largeImage: savedProduct._doc.largeImage,
									rating: savedProduct._doc.rating,
									reviews: savedProduct._doc.reviews,
								},
							};
							res.status(201).json(response);
						})
						.catch((err) => {
							console.log('Error in post route of product ' + err.message);
							res.status(500).json({ error: { message: err.message } });
						});
				} else {
					res.status(403).json({
						error: {
							message: 'Permission Denied User is not a seller',
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

// PATCH(Update) a product by ID
router.patch('/:productID', verifyToken, (req, res) => {
	const productID = req.params.productID;
	Product.find({ _id: productID }, (err, product) => {
		if (err) {
			console.log(
				'Error in finding product in patch route of products ' + err.message
			);
			res.status(500).json({ error: { message: err.message } });
		} else {
			const ownerID = req.user.userID;
			// check if the owner of the product is same as the user updating the product
			if (ownerID == product.ownerID) {
				// Send patch request as
				// {
				//		key1: value1,
				//		key2: value2,
				// }
				const updateProps = {};
				for (const [key, value] of Object.entries(req.body)) {
					updateProps[key] = value;
				}
				//* Add update product data validation
				// model.findByIdAndUpdate(filter, update, option, callback)
				// {new: true} returns an updated object otherwise,
				// default functionality is to return object as it was before update
				Product.findOneAndUpdate({ _id: productID }, updateProps, {
					new: true,
				})
					.select('-__v -dateAdded')
					.exec()
					.then((updatedProduct) => {
						const response = {
							count: updatedProduct.length,
							product: {
								...updatedProduct._doc,
							},
						};
						res.status(200).json(response);
					})
					.catch((err) => {
						console.log('Error in patch route of product ' + err.message);
						res.status(500).json({ error: { message: err.message } });
					});
			} else {
				res.status(403).json({
					error: {
						message: 'Permission Denied user is not the owner of this product',
					},
				});
			}
		}
	});
});

// DELETE a product by ID
router.delete('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.find({ _id: productID }, (err, product) => {
		if (error) {
			console.log(
				'Error in finding product in patch route of products ' + err.message
			);
			res.status(500).json({ error: { message: err.message } });
		} else {
			const ownerID = req.user.userID;
			// check if the owner of the product is same as the user updating the product
			if (ownerID == product.ownerID) {
				Product.findByIdAndDelete(productID)
					.exec()
					.then((deletedProduct) => {
						const response = {
							...deletedProduct._doc,
						};
						res.status(200).json(response);
					})
					.catch((err) => {
						console.log('Error in delete route of product ' + err.message);
						res.send(500).json({ error: { message: err.message } });
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
