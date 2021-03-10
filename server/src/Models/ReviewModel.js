const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('reviews', reviewSchema);
