
const router = require('express').Router();
const articleRoute= require('./article');

// API routes
router.use('/api/article', articleRoute);

module.exports = router;
