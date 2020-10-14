const products = [];

//Create an export class to define product properties
module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save() {
        products.push(this);
    }

    //More on static - https://www.w3schools.com/jsref/jsref_class_static.asp
    static fetchAll(){
        return products;
    }
}