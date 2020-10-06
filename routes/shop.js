const path = require('path');
const express = require('express');



//import admin.js to access the products data
const adminData = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;

    res.render('shop', {
        prods:products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        //layout: true //by this being true it will not use the 
    });
});


module.exports = router;