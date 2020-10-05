const path = require('path');
const express = require('express');

const router = express.Router();

//import admin.js to access the products data
const adminData = require('./admin');






router.get('/', (req, res, next) => {
    console.log('shop.js', adminData.products);
    res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
});


module.exports = router;