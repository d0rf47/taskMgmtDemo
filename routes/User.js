/*********************USER ROUTES***************************/
//Handle everything to do with Users //
const express =  require('express');
const router =  express.Router();
const bcrypt = require('bcryptjs');

//required for performing CRUD operations
const User  = require('../models/User');


//route for registration
router.get("/register",(req,res)=>
{
    res.render("User/registration");
});


//Registration--> processed when User submits registration form
router.post("/register", (req,res)=>
{
    const newUser = 
    {
        firstName : req.body.firstName,
        lastName  : req.body.lastName,
        email     : req.body.email,
        password  : req.body.password
    }

    const user =  new User(newUser);
    user.save()
        .then(user=>
            {
                res.redirect("/User/login");
            })
        .catch(err => console.log(`Error: ${err}`));

});



//redirects to Login
router.get("/login", (req,res)=>
{
    res.render('User/login');
});
//Route to process login form
router.post("/login", (res,req)=>
{
    const errors = [];
    const formData = 
    {
        email   :   req.body.email,
        password:   req.body.password    
    }
    User.findOne({email:formData.email})
        .then(user=>
        {
            if(user == null)
            {
                errors.push("Email not found");
                res.render("User/login",
                {
                    errors : errors
                })
            }
            else
            {
                bcrypt.compare(formData.password,user.password)
                    .then(isMatched =>
                        {
                            if(isMatched)
                            {
                                //create a session with user credentials 
                                    //--> allows for static variables containing user data to render on pages
                                req.session.userInfo = user;
                                res.redirect("/User/profile")
                            }
                            else
                            {
                                errors.push("Passwords dont match");
                                res.render("User/login",
                                {
                                    errors:errors
                                })
                            }
                    })
                    .catch(err => console.log(`Error ${err}`));
            }
        })
    .catch(err => console.log(`Error ${err}`));
});


//User Dash
router.get("/profile", (req,res)=>
{
    res.send('Users/dashboard');
});

//Route to process user edit requests
router.put("/profile", (res,req)=>
{
    res.send("Profile Updated");
});

router.get('/logout', (req,res)=>
{
    req.session.destroy();
    res.redirect('/user.login');
});

module.exports = router;
