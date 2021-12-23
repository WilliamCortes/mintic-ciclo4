const express = require('express');
const usersRoutes = require('./users');
const ProductsRoutes = require('./products');

const router = express.Router();

router.use('/users', usersRoutes);
router.use('/product', ProductsRoutes);


module.exports = router;
