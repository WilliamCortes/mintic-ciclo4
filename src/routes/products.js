const express = require('express');
const { getAllProductss, getProductPrice, getProductQuantity, addNewProducts, allRentedProductss, allAvailableProductss } = require('../controllers/products.js');

const router = express.Router();

router.get('/all', getAllProductss);

router.get('/price/110000', getProductPrice);

router.get('/description/calidad', getProductQuantity);

router.post('/new', addNewProducts);

router.get('/rentedProductss', allRentedProductss);

router.get('/availableProductss', allAvailableProductss);

module.exports = router;