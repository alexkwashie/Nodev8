
const express = require('express');

const adminController = require('../controller/admin');

const router = express.Router();

/*
//Using Middlewares
//  /admin/add-product => GET
router.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views','add-product.html'));
    //next(); // This allows the request to jump to the next middleware below
});
*/
//  /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

//  /admin/add-product => GET
router.get('/products', );

//  /admin/add-product => POST
router.post('/add-product',adminController.postProduct);


module.exports = router;
