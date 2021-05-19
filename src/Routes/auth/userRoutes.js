const router = require('express').Router();
const User = require('../../Models/UserModel');
const bcrypt = require('bcrypt');
const verifyToken = require('../middleware/verifyToken');
const { patchDataValidation } = require('../../Validation/UserValidation');

// To get a verified user detail
// This is intended to be used
// If local storage has auth-token
// and user data in state is empty
router.get('/', verifyToken, async (req, res) => {
	// verified user
	const userID = req.user.userID;
	const authToken = req.authToken;
	User.findOne({ _id: userID })
		.exec()
		.then((result) => {
			if (result) {
				const response = {
					firstName: result._doc.firstName,
					lastName: result._doc.lastName,
					email: result._doc.email,
					cartProducts: result._doc.cartProducts,
					favProducts: result._doc.favProducts,
				};
				res.header('auth-token', authToken).status(200).json(response);
			}
		})
		.catch((err) => {
			console.log('Error in get route of user on reload ' + err.message);
			res.status(500).json({ error: { message: err.message } });
		});
});

// User Update Route
// * Send patch request as
// * {
// *	key1: value1,
// *	key2: value2,
// * }
router.patch('/update', verifyToken, async (req, res) => {
	// Verified user
	const userID = req.user.userID;
	const authToken = req.authToken;
	// Get updated properties data from req.body
	const updateProps = {};
	let userPassword;
	for (const [key, value] of Object.entries(req.body)) {
		if (key === 'password') {
			userPassword = value;
		} else {
			updateProps[key] = value;
		}
	}
	// Validate data to be updated
	const { error } = patchDataValidation(updateProps);
	if (error) {
		console.log(error);
		return res
			.status(401)
			.json({ error: { message: error.details[0].message } });
	}

	// Find user with userID
	await User.findOneAndUpdate({ _id: userID }, updateProps, { new: true })
		.exec()
		.then(async (user) => {
			if (user !== null) {
				const validatePassword = await bcrypt.compare(
					userPassword,
					user._doc.password
				);
				if (!validatePassword) throw new Error('Password not valid');
				else return user;
			} else {
				throw new Error('User not found');
			}
		})
		.then((updatedUser) => {
			const response = {
				firstName: updatedUser._doc.firstName,
				lastName: updatedUser._doc.lastName,
				email: updatedUser._doc.email,
				cartProducts: updatedUser._doc.cartProducts,
				favProducts: updatedUser._doc.favProducts,
				address: updatedUser._doc.address,
				country: updatedUser._doc.country,
				zipCode: updatedUser._doc.zipCode,
			};
			res.header('auth-token', authToken).status(200).json(response);
		})
		.catch((error) => {
			console.log('Error in update route of user ' + error.message);
			res
				.header('auth-token', authToken)
				.status(500)
				.json({ error: { message: error.message } });
		});
});

// Delete user
router.delete('/delete', verifyToken, async (req, res) => {
	const userID = req.user.userID;
	User.findOneAndDelete({ _id: userID })
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
router.patch('/addtocart', verifyToken, async (req, res) => {
	const userID = req.user.userID;
	const productID = req.body.productID;
	User.findOneAndUpdate(
		{ _id: userID },
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

router.patch('/delfromcart', verifyToken, async (req, res) => {
	const userID = req.user.userID;
	const productID = req.body.productID;
	User.findOneAndUpdate(
		{ _id: userID },
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
router.patch('/addtofav', verifyToken, async (req, res) => {
	const userID = req.user.userID;
	const productID = req.body.productID;
	User.findOneAndUpdate(
		{ _id: userID },
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

router.patch('/delfromfav', verifyToken, async (req, res) => {
	const userID = req.user.userID;
	const productID = req.body.productID;
	User.findOneAndUpdate(
		{ _id: userID },
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
