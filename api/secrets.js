require('dotenv').config();


module.exports = {
	jwtSecret: process.env.JWT_SECRET || 'Brisk is the weather outside',
}