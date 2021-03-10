const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');
const Review = require('../Models/ReviewModel');

router.post('/:productID/add', (req, res) => {
	const review = new Review({
		_id: new mongoose.Types.ObjectId(),
		userID: req.body.userID,
		reviewBody: req.body.reviewBody,
	});
	review
		.save()
		.then(() => {
			const productId = req.params.productID;
			Product.findByIdAndUpdate(
				{ _id: productId },
				{
					$push: { reviews: { reviewID: review._id } },
				},
				{ new: true },
				(err, model) => {}
			);
			res.send(review);
		})
		.catch((err) => console.log(err));
});

module.exports = router;
