const router = require('express').Router();
// const collectionRoutes = require('./bookAssignment-routes');
const userRoutes = require('./user-routes')
const bookRoutes = require('./book-routes')

// router.user('/collection', collectionRoutes);
router.use('/user', userRoutes);
router.use('/book', bookRoutes);

module.exports = router;