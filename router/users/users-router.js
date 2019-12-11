const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../../api/middleware/restricted-middleware.js')

// Should bring in the restricted middleware.

router.get('/', restricted, async (req, res) => {
	try {
		const request = await Users.find();
		res.status(200).json(request)
	} catch (e) {
		res.status(500).json({ error: e.message })
	}
})