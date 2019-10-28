
//Handle everything to do with Users
const express =  require('express');
const router =  express.Router();

//Users 

//Registration
router.get("/user/registration", (req,res)=>{
    res.render('registration');
})

//Login
router.get("/user/login", (req,res)=>{
    res.render('registration');
})
//User Dash
router.get("/user/dashboard", (req,res)=>{
    res.render('dashboard');
})
//User profile
router.get("/user/profile", (req,res)=>{
    res.render('dashboard');
})

module.exports = router;
