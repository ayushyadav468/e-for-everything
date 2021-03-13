const mongoose = require('mongoose');
const router = require('express').Router();
const Product = require('../Models/ProductModel');

router.get('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findOne({ _id: productID }, (err, product) => {
		if (err) {
			console.log('Error in get route of review ' + err.message);
			res.send(500).json(err);
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
		productID,
		{
			$push: { reviews: { ...review } },
		},
		{ new: true },
		(err, model) => {
			if (err) {
				console.log(
					'Error in saving review ID in review field of product model' +
						err.message
				);
				res.send(500).json(err);
			} else {
				// send a 200 message if review and review id in product review field is saved
				res.status(200).json(model);
			}
		}
	);
});

router.patch('/:productID/:reviewID/helpful', async (req, res) => {
	res.status(500).json({
		error: {
			message: 'Route not complete',
		},
	});
});

// 	const productID = req.params.productID;
// 	const reviewID = req.params.reviewID;

// 	Product.findByIdAndUpdate(
// 		productID,
// 		{ $inc: {} },
// 		{ new: true },
// 		(err, model) => {
// 			if (err) {
// 				console.log(
// 					'Error in saving review ID in review field of product model' + err
// 				);
// 				res.send(500).json({ error: err });
// 			} else {
// 				// send a 200 message if review and review id in product review field is saved
// 				res.status(200).json(model);
// 			}
// 		}
// 	);

// 	// var productObject;
// 	// await Product.findById(productID, (err, product) => {
// 	// 	if (err) {
// 	// 		console.log('Error in helful route of review' + err);
// 	// 		res.send(500).json({ error: err });
// 	// 	} else {
// 	// 		productObject = JSON.parse(JSON.stringify(product));
// 	// 		console.log(productObject);
// 	// 		res.status(200).json({ message: 'Okay done' });
// 	// 	}
// 	// });
// });

router.patch('/:productID/incorrect', (req, res) => {
	res.status(500).json({
		error: {
			message: 'Route not complete',
		},
	});
});

module.exports = router;
