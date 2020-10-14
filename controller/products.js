
const Products = require('../models/product');

exports.getAddProduct = (req, res, next) =>{

    res.render('add-product', {
        pageTitle: 'Admin Page',
        path: 'admin/add-product',
        productCSS:true,
        activeAdd:true,
        //layout: true //by this being true it will not use the default main handlebar file but allows u to assign a different path/location
    });
};

exports.postProduct = (req, res, next)=>{
    const product = new Products(req.body.title);  //create a new object from the class blueprint
    product.save();
    console.log(req.body)
    res.redirect('/');

};

exports.getProducts = (req, res, next) => {
    const products = Products.fetchAll();
    res.render('shop', {
        prods:products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        //layout: true //by this being true it will not use the default main handlebar file but allows u to assign a different path/location
    });
};



