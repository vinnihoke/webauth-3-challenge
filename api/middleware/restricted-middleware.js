const jwt = require('jsonwebtoken');
const secrets = require('../secrets.js');

const restricted = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
			if (err) {
				// Don't forget to terminate the process
				res.status(401).end()
			} else {
				req.decodedJwt = decodedToken;
				next();
			}
		})
	} else {
		// Don't forget to terminate the process
		res.status(403).end()
	}
}

module.exports = restricted