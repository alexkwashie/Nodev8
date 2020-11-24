const Products = require('../models/product');

exports.getAddProduct = (req, res, next) => {

    res.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: 'admin/add-product',
        editing:false
        // layout: true //by this being true it will not use the default main handlebar
        // file but allows u to assign a different path/location
    });
};

exports.postProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product = new Products(title, imageUrl, description, price); //create a new object from the class blueprint
    product.save();
    console.log(req.body)
    res.redirect('/');

};

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit; // this forom the url (..?edit=)
    //console.log(editMode);
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId; // "productId" is from the admin routea file
    Products.findbyId(prodId, product => {
        if (!product) {
            return req.redirect('/')
        }
        res.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: 'admin/edit-product',
            editing: editMode,
            product: product
        });
    });
};

exports.getProducts = (req, res, next) => {
    Products.fetchAll(products => {
        res.render('admin/product-adminview', {
            prods: products,
            pageTitle: 'Admin Products Page',
            path: '/admin-products',
            hasProducts: products.length > 0,
            activeShop: true,
            // layout: true //by this being true it will not use the default main handlebar
            // file but allows u to assign a different path/location
        });
    });

};