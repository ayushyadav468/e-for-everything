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
	// Array of review IDs
	reviews: [mongoose.Schema.Types.ObjectId],
	// USER ID of the person who added this product
	ownerID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
	},
	dateAdded: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('products', productSchema);
