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
	reviews: [
		{
			_id: mongoose.Schema.Types.ObjectId,
			userID: {
				type: mongoose.Schema.Types.ObjectId,
				required: true,
			},
			reviewBody: {
				type: String,
				required: true,
			},
			helpFullCount: {
				type: Number,
				default: 0,
			},
			incorrectCount: {
				type: Number,
				default: 0,
			},
			dateAdded: {
				type: Date,
				default: Date.now,
			},
		},
	],
	dateAdded: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('products', productSchema);
