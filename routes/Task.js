//Everything Needed to manage tasks 
const express =  require('express');
const router =  express.Router();
const Task = require('../models/Task');
//Task Managements
router.get("Task/add", (req,res)=>{
    res.send('Home Page');
})
router.post("Task/add", (req,res)=>{
    const newTask = {
        title : req.body.title,
        desc : req.body.description,
        reminderDate : req.body.reminderDate
    }
})

//Called when A user wants to change 
router.get("Task/edit/:id", (req,res)=>{
    res.render('dashboard');
})
router.post("Task/edit:id", (req,res)=>{
    res.render('task');
})

//Called when A user wants to remove a task
router.get("Task/edit:id", (req,res)=>{
    res.render('dashboard');
})
router.delete("Task/edit:id", (req,res)=>{
    res.render('task');
})


router.get("/task/list", (req,res)=>{
    Task.find()
    .then(())

    res.render('dashboard');
})

module.exports = router;