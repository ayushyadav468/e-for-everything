const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../Models/UserModel');

router.post('/register', (req, res) => {
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		seller: req.body.isSeller,
	});
	user
		.save()
		.then((result) => {
			res.send(result);
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
