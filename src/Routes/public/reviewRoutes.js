const router = require('express').Router();
const Product = require('../../Models/ProductModel');

router.get('/:productID', (req, res) => {
	const productID = req.params.productID;
	Product.findOne({ _id: productID }, (err, product) => {
		if (err) {
			console.log('Error in get route of review ' + err.message);
			res.send(500).json({ error: { message: err.message } });
		} else {
			res.status(200).json(product.reviews);
		}
	});
});

module.exports = router;
