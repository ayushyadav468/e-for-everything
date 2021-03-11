const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');

router.get('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findOne({ _id: productID }, (err, product) => {
		if (err) {
			console.log('Error in get route of review' + err);
			res.send(500).json({ error: err });
		} else {
			res.status(200).json(product.reviews);
		}
	});
});

// POST a review
router.post('/:productID', (req, res) => {
	// Get details about review from body of request
	const review = {
		_id: new mongoose.Types.ObjectId(),
		userID: req.body.userID,
		reviewBody: req.body.reviewBody,
	};

	const productID = req.params.productID;
	// Add review to reviews field in product model
	Product.findByIdAndUpdate(
		{ _id: productID },
		{
			$push: { reviews: { ...review } },
		},
		{ new: true },
		(err, model) => {
			if (err) {
				console.log(
					'Error in saving review ID in review field of product model' + err
				);
				res.send(500).json({ error: err });
			} else {
				// send a 200 message if review and review id in product review field is saved
				res.status(200).json(model);
			}
		}
	);
});

router.patch('/:productID/:reviewID/helpful', (req, res) => {
	const productID = req.params.productID;
	const reviewID = req.params.reviewID;
	Product.findById(productID, (err, product) => {
		if (err) {
			console.log('Error in helful route of review' + err);
			res.send(500).json({ error: err });
		} else {
			const reviews = product.reviews;
			const review = reviews.find((reviewTemp) => {
				// reviewTemp._id is an object (ObjectID) and reviewID is a string
				// therefore type comparison is not necessary
				return reviewTemp._id == reviewID;
			});
			if (review) {
				const helpFullCount = review.helpFullCount;
				res.status(200).json(helpFullCount);
			} else {
				res.status(404).json({ message: 'not found' });
			}
		}
	});
});

// router.patch('/:productID/incorrect', (req, res) => {
// 	const productID = req.params.productID;
// 	const reviewID = req.params.reviewID;
// 	Product.findByIdAndUpdate(
// 		{ _id: productID },
// 		{},
// 		{ new: true },
// 		(err, model) => {}
// 	);
// });

module.exports = router;
