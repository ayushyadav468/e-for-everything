const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../Models/UserModel');

router.post('/login', (req, res) => {
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
					error: { message: 'No valid entry found' },
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
				const user = new User({
					_id: new mongoose.Types.ObjectId(),
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					seller: req.body.seller,
				});
				user
					.save()
					.then((user) => {
						const response = {
							...user._doc,
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

router.patch('/:userID', (req, res) => {
	const userID = req.params.userID;
	// Send patch request as
	// [{'propName': name of the prop as mention in model schema, 'value': value of the prop }]
	// If you want to send multiple props add more object to the array
	const updateProps = {};
	for (const ops of req.body) {
		updateProps[ops.propName] = ops.value;
	}
	User.findByIdAndUpdate(userID, updateProps, { new: true })
		.select('-__v -dateAdded -password')
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in patch route of user ' + err.message);
			res.status(500).json(err);
		});
});

router.delete('/:userID', (req, res) => {
	const userID = req.params.userID;
	User.findByIdAndDelete(userID)
		.exec()
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			console.log('Error in deleting user ' + err.message);
			res.status(500).json(err);
		});
});

module.exports = router;
