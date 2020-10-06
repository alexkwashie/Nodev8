const path = require('path');
const express = require('express');


const router = express.Router();

const products = [];

/*
//Using Middlewares
//  /admin/add-product => GET
router.get('/',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views','add-product.html'));
    //next(); // This allows the request to jump to the next middleware below
});
*/


router.get('/add-product', (req, res, next) => {

    res.render('add-product', {
        prods:products,
        pageTitle: 'Admin Page',
        path: 'admin/add-product',
        productCSS:true,
        activeAdd:true,
        //layout: true //by this being true it will not use the default main handlebar file but allows u to assign a different path/location
    });
});


//  /admin/add-product => POST
router.post('/add-product', (req, res, next)=>{
    products.push({ title: req.body.title});
    res.redirect('/');

});

exports.routes = router;
exports.products = products;

router.get('/add-product', (req, res, next) => {

    res.render('shop', {
        prods:products,
        pageTitle: 'Admin Page',
        path: '/admin',
        //layout: true //by this being true it will not use the default main handlebar file but allows u to assign a different path/location
    });
});