const express = require('express');
const { getAllUsers, createNewUser, getUserById, addProductsToUser, removeProductsToUser } = require('../controllers/users.js');

const router = express.Router();


router.get('/', getAllUsers);

router.post('/', createNewUser);

router.get('/:id', getUserById);

router.post('/:userId/Products/:ProductsId', addProductsToUser);

router.put('/:userId/Products/:ProductsId', removeProductsToUser);

module.exports = router;