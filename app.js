
const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');

const app = express();

//Setting up app.js to render all templating through the 'ejs' file in the views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false})); // This allows to encode the body as a string

//Allows to serve Static files eg. css file ect
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminData.routes); // '/admin' is added to every middleware in the admin.js file
app.use(shopRoutes);

//add 404 not found page
app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page Not Found!'});
        // create a 'layouts/main.handlebars' and a views/404.handlebars file before this will render
});

app.listen(3000);


