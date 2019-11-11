/*********************USER ROUTES***************************/
//Handle everything to do with Users

const express =  require('express');
const router =  express.Router();

//Users 
router.get("/register",(req,res)=>
{
    res.render("User/registration");
});

//Registration--> processed when User submits registration form
router.post("/register", (req,res)=>
{
    res.send("Form Submitted");
});

//redirects to Login
router.get("/login", (req,res)=>
{
    res.render('User/login');
});
//Route to process login form
router.post("/login", (res,req)=>
{
    res.send("Login Submitted");
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

module.exports = router;
