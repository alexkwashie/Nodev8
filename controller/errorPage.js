exports.page404 = (req,res,next)=>{
    res.status(404).render('404',{pageTitle: 'Page Not Found!'});
        // create a 'layouts/main.handlebars' and a views/404.handlebars file before this will render
};