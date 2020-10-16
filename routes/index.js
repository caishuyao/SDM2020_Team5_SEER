
const router = require('express').Router();
const articleRoute= require('./article');
const path = require('path');

// API routes
router.use('/api/article', articleRoute);

//router.use(function(req, res) {
//	res.status(404);
//});

module.exports = router;
