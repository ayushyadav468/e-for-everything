const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../Models/UserModel');

router.post('/login', (req, res) => {
	const userEmail = req.body.email;
	const userPassword = req.body.password;
	User.findOne({ email: userEmail, password: userPassword })
		.select('-__v -dateAdded -password')
		.exec()
		.then((user) => {
			if (user) {
				const response = {
					...user._doc,
				};
				res.status(200).json(response);
			} else {
				res.status(404).json({
					error: { message: 'No valid entry found' },
				});
			}
		})
		.catch((err) => {
			console.log(
				'Error in finding user in get request of user routes ' + err.message
			);
			res.status(500).json(err);
		});
});

router.post('/register', (req, res) => {
	const emailToBeChecked = req.body.email;
	User.findOne({ email: emailToBeChecked })
		.exec()
		.then((user) => {
			if (user) {
				const response = {
					message: 'Email already registered',
				};
				res.status(208).json(response);
			} else {
				const user = new User({
					_id: new mongoose.Types.ObjectId(),
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					seller: req.body.seller,
				});
				user
					.save()
					.then((user) => {
						const response = {
							_id: user._doc._id,
							name: user._doc.name,
							email: user._doc.email,
							seller: user._doc.seller,
						};
						res.status(200).json(response);
					})
					.catch((err) => {
						console.log('Error in saving user ' + err.message);
						res.status(500).json(err);
					});
			}
		})
		.catch((err) => {
			console.log('Error in finding duplicate email' + err);
		});
});

router.patch('/:userID', (req, res) => {
	const userID = req.params.userID;
	// Send patch request as
	// {
	//		key1: value1,
	//		key2: value2,
	// }
	const updateProps = {};
	for (const [key, value] of Object.entries(req.body)) {
		updateProps[key] = value;
	}
	User.findByIdAndUpdate(userID, updateProps, { new: true })
		.select('-__v -dateAdded -password')
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in patch route of user ' + err.message);
			res.status(500).json(err);
		});
});

router.delete('/:userID', (req, res) => {
	const userID = req.params.userID;
	User.findByIdAndDelete(userID)
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in deleting user ' + err.message);
			res.status(500).json(err);
		});
});

// Add to Cart route
router.patch('/:userID/addtocart', (req, res) => {
	const userID = req.params.userID;
	const productID = req.body.productID;
	User.findByIdAndUpdate(
		userID,
		{ $addToSet: { cartProducts: productID } },
		{ new: true }
	)
		.select('-__v -dateAdded -password')
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in adding cart products' + err.message);
			res.status(500).json(err);
		});
});

router.patch('/:userID/delfromcart', (req, res) => {
	const userID = req.params.userID;
	const productID = req.body.productID;
	User.findByIdAndUpdate(
		userID,
		{ $pull: { cartProducts: productID } },
		{ new: true }
	)
		.select('-__v -dateAdded -password')
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in deleting cart products' + err.message);
			res.status(500).json(err);
		});
});

// Add to favourite route
router.patch('/:userID/addtofav', (req, res) => {
	const userID = req.params.userID;
	const productID = req.body.productID;
	User.findByIdAndUpdate(
		userID,
		{ $addToSet: { favProducts: productID } },
		{ new: true }
	)
		.select('-__v -dateAdded -password')
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in adding favoutite products' + err.message);
			res.status(500).json(err);
		});
});

router.patch('/:userID/delfromfav', (req, res) => {
	const userID = req.params.userID;
	const productID = req.body.productID;
	User.findByIdAndUpdate(
		userID,
		{ $pull: { favProducts: productID } },
		{ new: true }
	)
		.select('-__v -dateAdded -password')
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in deleting favoutite products' + err.message);
			res.status(500).json(err);
		});
});

module.exports = router;
