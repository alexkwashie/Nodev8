
const Products = require('../models/product');

exports.getAddProduct = (req, res, next) =>{

    res.render('admin/add-product', {
        pageTitle: 'Admin Page',
        path: 'admin/product',
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