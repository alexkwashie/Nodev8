
const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop');


router.get('/', shopController.getIndex);

router.get('/cart', shopController.getCart);

router.get('/product', shopController.getProducts);

router.get('/checkout', );

module.exports = router;