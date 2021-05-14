const router = require('express').Router();
const User = require('../../Models/UserModel');
const bcrypt = require('bcrypt');
const verifyToken = require('../middleware/verifyToken');
const { patchDataValidation } = require('../../Validation/UserValidation');

// User Update Route
// * Send patch request as
// * {
// *	key1: value1,
// *	key2: value2,
// * }
router.patch('/update', verifyToken, async (req, res) => {
	// Verified user
	const userID = req.user.userID;
	// Get updated properties data from req.body
	const updateProps = {};
	for (const [key, value] of Object.entries(req.body)) {
		updateProps[key] = value;
	}
	// Validate updated data
	const { error } = patchDataValidation(updateProps);
	if (error)
		return res
			.status(401)
			.json({ error: { message: error.details[0].message } });

	// Hasing password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);
	updateProps['password'] = hashedPassword;

	// Find user with userID
	User.findOneAndUpdate({ _id: userID }, updateProps, { new: true })
		.exec()
		.then((result) => {
			if (result !== null) {
				res.status(200).json(result);
			} else {
				res.status(400).json({ error: { message: 'User not found' } });
			}
		})
		.catch((err) => {
			console.log('Error in patch route of user ' + err.message);
			res.status(500).json({ error: { message: err.message } });
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
