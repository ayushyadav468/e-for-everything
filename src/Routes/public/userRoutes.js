const mongoose = require('mongoose');
const router = require('express').Router();
const User = require('../../Models/UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {
	loginValidation,
	registerValidation,
} = require('../../Validation/UserValidation');

// User Login Route
router.post('/login', async (req, res) => {
	// Validation
	const { error } = loginValidation(req.body);
	if (error)
		return res
			.status(400)
			.json({ error: { message: error.details[0].message } });

	const userEmail = req.body.email;
	const userPassword = req.body.password;
	try {
		// Check if user exist
		const loginUser = await User.findOne({ email: userEmail });
		if (!loginUser)
			return res.status(400).json({ error: { message: 'Email not valid' } });

		// check password
		const validatePassword = await bcrypt.compare(
			userPassword,
			loginUser.password
		);
		if (!validatePassword)
			return res.status(400).json({ error: { message: 'Password not valid' } });

		const authToken = jwt.sign(
			{ userID: loginUser._doc._id },
			process.env.AUTH_TOKEN_SECRET
		);
		const response = {
			email: loginUser._doc.email,
			firstName: loginUser._doc.firstName,
			lastName: loginUser._doc.lastName,
			cartProducts: loginUser._doc.cartProducts,
			favProducts: loginUser._doc.favProducts,
			seller: loginUser._doc.seller,
			address: loginUser._doc.address,
			country: loginUser._doc.country,
			zipCode: loginUser._doc.zipCode,
		};
		res.header('auth-token', authToken).status(200).json(response);
	} catch (err) {
		console.log('Error in logging user ' + err.message);
		res.status(500).json({ error: { message: err.message } });
	}
});

// User Register Route
router.post('/register', async (req, res) => {
	// Validation
	const { error } = registerValidation(req.body);
	if (error)
		return res
			.status(400)
			.json({ error: { message: error.details[0].message } });

	// Check if email exist
	const emailToBeChecked = req.body.email;
	const emailExist = await User.findOne({ email: emailToBeChecked });
	if (emailExist)
		return res.status(208).json({
			error: { message: 'Email already registered' },
		});

	// Hasing password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	//Creating user
	const newUser = new User({
		_id: new mongoose.Types.ObjectId(),
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: hashedPassword,
		seller: req.body.seller,
	});

	// Saving user
	try {
		const savedUser = await newUser.save();
		const authToken = jwt.sign(
			{ userID: savedUser._doc._id },
			process.env.AUTH_TOKEN_SECRET
		);
		const response = {
			firstName: savedUser._doc.firstName,
			lastName: savedUser._doc.lastName,
			email: savedUser._doc.email,
			cartProducts: savedUser._doc.cartProducts,
			favProducts: savedUser._doc.favProducts,
			seller: savedUser._doc.seller,
			address: savedUser._doc.address,
			country: savedUser._doc.country,
			zipCode: savedUser._doc.zipCode,
		};
		res.header('auth-token', authToken).status(200).json(response);
	} catch (err) {
		console.log('Error in saving user ' + err.message);
		res.status(500).json({ error: { message: err.message } });
	}
});

module.exports = router;
