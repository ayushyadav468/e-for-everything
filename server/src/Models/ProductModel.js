const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	productName: {
		type: String,
		required: true,
	},
	productPrice: {
		type: Number,
		required: true,
	},
	productDiscription: {
		type: String,
		required: true,
	},
	rating: {
		type: Number,
		required: true,
	},
	smallImage: {
		type: String,
		required: true,
	},
	largeImage: {
		type: String,
	},
	reviews: [{ reviewID: mongoose.Schema.Types.ObjectId }],
	dateAdded: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('products', productSchema);
