const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: true,
		min: 3,
		max: 255,
	},
	email: {
		type: String,
		required: true,
		min: 10,
		max: 255,
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 1024,
	},
	seller: {
		type: Boolean,
		required: true,
	},
	dateAdded: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model('users', userSchema);
