const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../api/secrets.js');

const Users = require('../users/users-model.js');

const generateToken = user => {
	const payload = {
		subject: user.id,
		username: user.username,
		department: [user.department]
	};

	const options = {
		expiresIn: '3m',
	};

	return jwt.sign(payload, secrets.jwtSecret, options)
}

// Starting endpoints
router.post('/register', async (req, res) => {

	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;

	try {
		const registered = await Users.add(user);
		res.status(201).json(registered)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
})

router.post('/login', async (req, res) => {
	let { username, password } = req.body;
	try {
		const registered = await Users.findBy({ username }).first();
		if (registered && bcrypt.compareSync(password, registered.password)) {
			const token = generateToken(registered);
			res.status(200).json(token)
		} else {
			res.status(401)
		}
	} catch (e) {
		res.status(500).json({ error: e.message });
	}
})

module.exports = router