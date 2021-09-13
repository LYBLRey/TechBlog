const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./articleRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/articles', articleRoutes);

module.exports = router;
