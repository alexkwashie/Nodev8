const path = require('path');
const express = require('express');

const productsController = require('../controller/products');

const postProductController = require('../controller/products');

const router = express.Router();

/*
//Using Middlewares
//  /admin/add-product => GET
router.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views','add-product.html'));
    //next(); // This allows the request to jump to the next middleware below
});
*/

router.get('/add-product', productsController.getAddProduct);

//  /admin/add-product => POST
router.post('/add-product',postProductController.postProduct);


module.exports = router;
