
const express = require('express');

const router = express.Router();

const getProductController = require('../controller/products');

router.get('/', getProductController.getProducts);


module.exports = router;