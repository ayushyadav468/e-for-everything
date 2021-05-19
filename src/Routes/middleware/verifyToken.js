const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
	const token = req.header('auth-token');
	if (!token) return res.status(401).send('Access Denied');

	try {
		const verified = jwt.verify(token, process.env.AUTH_TOKEN_SECRET);
		req.authToken = token;
		req.user = verified;
		next();
	} catch (err) {
		res.status(400).send('Invalid token');
	}
};

module.exports = verifyToken;
