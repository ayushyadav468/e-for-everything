const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');
const User = require('../Models/UserModel');

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
							request: {
								type: 'GET',
								discription: 'Get detailed information of product',
								url: 'http://' + req.get('host') + '/api/product/' + doc._id,
							},
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
						...docs._doc,
						request: {
							type: 'GET',
							discription: "Get owner's information",
							url: 'http://' + req.get('host') + '/api/user/' + docs.ownerID,
						},
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

// GET all products by a seller
router.get('/user/:userID', (req, res) => {
	const userID = req.params.userID;
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
			res.status(500).json(err);
		});
});

// GET multiple product by id
router.patch('/multiple', (req, res) => {
	// 	{
	//     "productIDs": [
	//         "604d8a4ef5a3e7197c1ecaea",
	//         "604d8ae4f5a3e7197c1ecaeb",
	//     ]
	// }
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
			res.status(500).json(err);
		});
});

// POST a product
router.post('/', (req, res) => {
	// Get details about product from body of request
	const ownerID = req.body.ownerID;
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
						.select('-__v -dateAdded')
						.then((docs) => {
							const response = {
								count: docs.length,
								product: {
									...docs._doc,
								},
							};
							res.status(201).json(response);
						})
						.catch((err) => {
							console.log('Error in post route of product ' + err.message);
							res.status(500).json(err);
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
router.patch('/:ownerID/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findById(productID, (err, product) => {
		if (err) {
			console.log(
				'Error in finding product in patch route of products ' + err.message
			);
			res.status(500).json(err);
		} else {
			const ownerID = req.params.ownerID;
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
				// model.findByIdAndUpdate(filter, update, option, callback)
				// {new: true} returns an updated object otherwise,
				// default functionality is to return object as it was before update
				Product.findByIdAndUpdate(productID, updateProps, { new: true })
					.select('-__v -dateAdded')
					.exec()
					.then((docs) => {
						const response = {
							count: docs.length,
							product: {
								...docs._doc,
							},
						};
						res.status(200).json(response);
					})
					.catch((err) => {
						console.log('Error in patch route of product ' + err.message);
						res.status(500).json(err);
					});
			} else {
				res.status(403).json({
					error: {
						message: 'Permission Denied User is not the owner of this product',
					},
				});
			}
		}
	});
});

// DELETE a product by ID
router.delete('/:ownerID/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findById(productID, (err, product) => {
		if (error) {
			console.log(
				'Error in finding product in patch route of products ' + err.message
			);
			res.status(500).json(err);
		} else {
			const ownerID = req.params.ownerID;
			// check if the owner of the product is same as the user updating the product
			if (ownerID == product.ownerID) {
				Product.findByIdAndDelete(productID)
					.exec()
					.then((docs) => {
						res.status(200);
					})
					.catch((err) => {
						console.log('Error in delete route of product ' + err.message);
						res.send(500).json(err);
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
