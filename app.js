const http = require('http');

const express = require('express')

const bodyParser = require('body-parser');

const path = require('path');
const app = express();

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false})); // This allows to encode the body as a string

//Allows to serve Static files eg. css file ect
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes); // '/admin' is added to every middleware in the admin.js file
app.use(shopRoutes);

//add 404 not found page
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, './','views', '404not.html'));
});

app.listen(3000);


