const router = require('express').Router();

const bookRoutes = require('./collection-routes.js');

router.use('/book', bookRoutes);

module.exports = router;