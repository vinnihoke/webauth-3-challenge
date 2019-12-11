require('dotenv').config();
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');

const generateToken = user => {
	const payload = {
		subject: user.id,
		username: user.username,
		department: [ "Accounting" ] 
	}
}