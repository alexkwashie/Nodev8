
const Products = require('../models/product');

exports.getProducts = (req, res, next) => {
    Products.fetchAll( products =>{
        res.render('shop/product-list', {
            prods:products,
            pageTitle: 'Products',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true,
            //layout: true //by this being true it will not use the default main handlebar file but allows u to assign a different path/location
        });
    });

};

exports.getProduct = (req, res, next) =>{

    const prodId = req.params.productId;
    Products.findbyId(prodId, isproduct => {
        res.render('shop/product-detail', {
            product: isproduct,
            pageTitle: isproduct.title, //reassign to the pagetTitle in the head.ejs file
            path:'/product'
        });
    });
    //res.redirect('/');
};


exports.getCart = (req, res, next) =>{

    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart',
        productCSS:true,
        activeAdd:true,
    });
};


exports.PostCart = (req, res, next) =>{
    const prodId = req.body.productId; //create new variable to hold input from 'add to cart' form button
    console.log(prodId);
    res.redirect('/cart');
};

exports.getOrders = (req, res, next) =>{

    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders',
        productCSS:true,
        activeAdd:true,
    });
};

exports.getIndex = (req, res, next) =>{
    Products.fetchAll( products =>{
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            //layout: true //by this being true it will not use the default main handlebar file but allows u to assign a different path/location
        });
    });

}

exports.getCheckout = (req, res, next) =>{

    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout',
        productCSS:true,
        activeAdd:true,
        //layout: true //by this being true it will not use the default main handlebar file but allows u to assign a different path/location
    });
};






