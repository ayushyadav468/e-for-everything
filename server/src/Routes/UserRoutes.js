const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../Models/UserModel');

router.get('/:userID', (req, res) => {
	const userID = req.params.userID;
	User.findById(userID, (err, user) => {
		if (err) {
			console.log('Error in finding user in get request of user routes' + err);
			res.status(500).json({ error: err });
		} else {
			if (user) {
				res.status(200).json(user);
			} else {
				res
					.status(404)
					.json({ message: 'No valid entry found for provided ID' });
			}
		}
	});
});

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
			res.status(201).json(result);
		})
		.catch((err) => {
			console.log('Error in saving user' + err);
			res.status(500).json({ error: err });
		});
});

router.patch('/:userID', (req, res) => {
	const userID = req.params.userID;
	// Send patch request as
	// [{'propName': name of the prop as mention in model schema, 'value': value of the prop }]
	// If you want to send multiple props add more object to the array
	const updateProps = {};
	for (const ops of req.body) {
		updateProps[ops.popName] = ops.value;
	}
	User.findByIdAndUpdate(
		{ _id: userID },
		{
			$set: {
				updateProps,
			},
		},
		{ new: true },
		(err, result) => {
			if (err) {
				console.log('Error in patch route of user' + err);
				res.status(500).json({ error: err });
			} else {
				res.status(200).json(result);
			}
		}
	);
});

router.delete('/:userID', (req, res) => {
	const userID = req.params.userID;
	User.findByIdAndDelete(userID, (err, result) => {
		if (err) {
			console.log('Error in deleting user' + err);
			res.status(500).json({ error: err });
		} else {
			res.status(201).json(result);
		}
	});
});

module.exports = router;
