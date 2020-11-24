const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsfromFile = cb =>{

        fs.readFile(p, (err, fileContent) =>{
            if(err){
                cb([]); //the callback function creats an empty array
            }
            else{
                //this is the list of products from the file
                cb(JSON.parse(fileContent)); //the callback function parses the info.
            }

        })

}


//Create an export class to define product properties
module.exports = class Product{
    constructor(id,title, imageUrl, description, price){
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        //Get existing product from file to match the id
        getProductFromFile(products => {
            if (this.id){
                const existingProductIndex = products.findIndex(
                    prod => prod.id === this.id
                );
                const updatedProducts = [...products];
                updatedProducts[existingProduct] = this; //this get the corresponding array index and replaces with the new data inputs i.e "this" which represents id, title etc.

                //Save to the file
                fs.writeFile(p, JSON.stringify(updatedProducts), (err) => { //this should store all in updatedProducts to the file
                    console.log(err);
                });
            }

            else{

            this.id = Math.random().toString();

            //Append the information from the webpage to the fileContent which is the products array.
            products.push(this);

            //Save to the file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
                });
            }
        });

    }

    //More on static - https://www.w3schools.com/jsref/jsref_class_static.asp
    static fetchAll(cb){
        getProductsfromFile(cb);
    }

    static findbyId(id, cb){
        getProductsfromFile(products => {
            const product = products.find(p => p.id === id);
            cb(product)
        })
    }




}