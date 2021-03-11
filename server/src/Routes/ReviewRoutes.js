const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');
const Review = require('../Models/ReviewModel');

router.post('/:productID', (req, res) => {
	const review = new Review({
		_id: new mongoose.Types.ObjectId(),
		userID: req.body.userID,
		reviewBody: req.body.reviewBody,
	});
	review
		.save()
		.then(() => {
			const productID = req.params.productID;
			Product.findByIdAndUpdate(
				{ _id: productID },
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
