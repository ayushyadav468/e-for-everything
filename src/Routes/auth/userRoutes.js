const router = require('express').Router();
const User = require('../../Models/UserModel');
const { patchDataValidation } = require('../../Validation/UserValidation');

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
	const { error } = patchDataValidation(updateProps);
	if (error)
		return res
			.status(401)
			.json({ error: { message: error.details[0].message } });

	User.findOneAndUpdate({ _id: userID }, updateProps, { new: true })
		.exec()
		.then((result) => {
			console.log(`Result: ${result}`); // ! Remove
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in patch route of user ' + err.message);
			res.status(500).json(err);
		});
});

router.delete('/:userID', (req, res) => {
	const userID = req.params.userID;
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
router.patch('/:userID/addtocart', (req, res) => {
	const userID = req.params.userID;
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

router.patch('/:userID/delfromcart', (req, res) => {
	const userID = req.params.userID;
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
router.patch('/:userID/addtofav', (req, res) => {
	const userID = req.params.userID;
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

router.patch('/:userID/delfromfav', (req, res) => {
	const userID = req.params.userID;
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
