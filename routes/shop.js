
const express = require('express');

const router = express.Router();

const shopController = require('../controller/shop');


router.get('/', shopController.getIndex);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/product-list', shopController.getProducts);

router.get('/product-list/:productId',shopController.getProduct);

router.get('/checkout', shopController.getCheckout);

module.exports = router;