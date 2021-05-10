const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../../Models/UserModel');
const {
	loginValidation,
	registerValidation,
} = require('../../Validation/UserValidation');

router.post('/login', (req, res) => {
	const { error } = loginValidation(req.body);
	if (error)
		return res
			.status(400)
			.json({ error: { message: error.details[0].message } });

	const userEmail = req.body.email;
	const userPassword = req.body.password;
	User.findOne({ email: userEmail, password: userPassword })
		.select('-__v -dateAdded -password')
		.exec()
		.then((user) => {
			if (user) {
				const response = {
					...user._doc,
				};
				res.status(200).json(response);
			} else {
				res.status(404).json({
					error: { message: 'Email or password is wrong' },
				});
			}
		})
		.catch((err) => {
			console.log(
				'Error in finding user in get request of user routes ' + err.message
			);
			res.status(500).json(err);
		});
});

router.post('/register', (req, res) => {
	const emailToBeChecked = req.body.email;
	User.findOne({ email: emailToBeChecked })
		.exec()
		.then((user) => {
			if (user) {
				const response = {
					message: 'Email already registered',
				};
				res.status(208).json(response);
			} else {
				const { error } = registerValidation(req.body);
				if (error)
					return res
						.status(400)
						.json({ error: { message: error.details[0].message } });

				const user = new User({
					_id: new mongoose.Types.ObjectId(),
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					password: req.body.password,
					seller: req.body.seller,
				});
				user
					.save()
					.then((user) => {
						const response = {
							_id: user._doc._id,
							firstName: user._doc.firstName,
							lastName: user._doc.lastName,
							email: user._doc.email,
							seller: user._doc.seller,
						};
						res.status(200).json(response);
					})
					.catch((err) => {
						console.log('Error in saving user ' + err.message);
						res.status(500).json(err);
					});
			}
		})
		.catch((err) => {
			console.log('Error in finding duplicate email' + err);
		});
});

module.exports = router;
