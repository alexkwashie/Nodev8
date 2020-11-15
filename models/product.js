const fs = require('fs');
const path = require('path');


//Create an export class to define product properties
module.exports = class Product{
    constructor(title){
        this.title = title;
    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

        //read the file to access it
        fs.readFile(p, (err, fileContent) => {
            let products = [];

            if (!err){
                products = JSON.parse(fileContent); //convert the file content to a javascript array type.
            }

            //Append the information from the webpage to the fileContent which is the products array.
            products.push(this);

            //Save to the file
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });

        });
    }

    //More on static - https://www.w3schools.com/jsref/jsref_class_static.asp
    static fetchAll(cb){
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) =>{
            if(err){
                cb([]); //the callback function creats an empty array
            }
            else{
                cb(JSON.parse(fileContent)); //the callback function parses the info.
            }

        })
    }
}