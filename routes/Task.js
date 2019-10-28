//Everything Needed to manage tasks 
const express =  require('express');
const router =  express.Router();

//Task Managements
router.get("/task/add", (req,res)=>{
    res.send('Home Page');
})
router.post("/task/add", (req,res)=>{
    res.send('Home Page');
})

//Called when A user wants to change 
router.get("/task/edit:id", (req,res)=>{
    res.render('dashboard');
})
router.post("/task/edit:id", (req,res)=>{
    res.render('task');
})

//Called when A user wants to remove a task
router.get("/task/edit:id", (req,res)=>{
    res.render('dashboard');
})
router.delete("/task/edit:id", (req,res)=>{
    res.render('task');
})


router.get("/task/list", (req,res)=>{
    res.render('dashboard');
})

module.exports = router;