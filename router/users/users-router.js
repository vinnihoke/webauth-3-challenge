const router = require('express').Router();

const Users = require('./users-model.js');

// Should bring in the restricted middleware.

router.get('/', async (req, res) => {
	try {
		const request = await Users.find();
		res.status(200).json(request)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
})