const path = require('path');
const express = require('express');


const router = express.Router();

const products = [];

//Using Middlewares
//  /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views','add-product.html'));
    //next(); // This allows the request to jump to the next middleware below
});

//  /admin/add-product => POST
router.post('/add-product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');

});

exports.routes = router;
exports.products = products;