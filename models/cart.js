const fs = require('fs');
const path = require('path');

//Create a file in the data folder to hold items in cart
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');


module.exports = class Cart{
    static addProduct(id, productsPrice){

        //Fetch the previous cart
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products:[], totalPrice: 0};

            if(!err){
                cart = JSON.parse(fileContent);
            }


        //Analyse the cart and Find existing Product
        const existingProductIndex = cart.products.findIndex(prod => prod.id === id); //Check if exisiting product is not the same as the current product Id.
        const existingProduct = cart.products[existingProductIndex];
        let updatedProduct;
        if (existingProduct){ // Increase quantity
            updatedProduct = {...existingProduct};
            updatedProduct.qty = updatedProduct.qty + 1;
            cart.products = [...cart.products];
            cart.products[existingProductIndex] = updatedProduct;
        } else{
            updatedProduct = {id:id, qty:1};
            cart.products = [...cart.products, updatedProduct];
        }
        cart.totalPrice = cart.totalPrice + +productsPrice; //add another '+' the the productsPrice to convert it to an integer
        fs.writeFile(p, JSON.stringify(cart), err => {
            console.log(err);
        });

      });
    }
}