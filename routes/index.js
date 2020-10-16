
const router = require('express').Router();
const articleRoute= require('./article');
const path = require('path');

// API routes
router.use('/api/article', articleRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

//router.use(function(req, res) {
//	res.status(404);
//});

module.exports = router;
