
const path = require('path');

const express = require('express')
const bodyParser = require('body-parser');

const app = express();

const page404 = require('./controller/errorPage');

//Setting up app.js to render all templating through the 'ejs' file in the views folder
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false})); // This allows to encode the body as a string

//Allows to serve Static files eg. css file ect
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes); // '/admin' is added to every middleware in the admin.js file
app.use(shopRoutes);

//add 404 not found page
app.use(page404.getpage404);

app.listen(3000);


