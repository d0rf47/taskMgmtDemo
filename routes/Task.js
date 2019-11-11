/*********************Task ROUTES***************************/
//Everything Needed to manage tasks 

const express =  require('express');
const router =  express.Router();
const Task = require('../models/Task');

//Route to render add task form
router.get("/add", (req,res)=>
{
    res.render('Task/AddTask');
});

router.post("/add", (req,res)=>{
    const newTask = 
    {
        title : req.body.title,
        desc : req.body.description,
        reminderDate : req.body.reminderDate
    }

        const task = new Task(newTask)
        task.save()
        .then(()=>
        {
            console.log(`Task was added to the database`);
            console.log(`${task}`);
            res.redirect("/task/list");
        })
        .catch(err=>console.log(`Error : ${err}`));
});


//Route to fetch all tasks stored
router.get("/list", (req,res)=>
{
        Task.find()
        .then((tasks)=>
        {
            res.render('Task/dashboard',
            {
                lists:tasks
            });
        })
        .catch(err=>console.log(`Error : ${err}`));
});


//Called when A user wants to edit Task 
router.get("/edit/:id", (req,res)=>
{
    Task.findById(req.params.id)
    .then((task)=>
    {
        res.render('Task/EditTask',
        {
            taskDocument:task
        });
    })
    .catch(err=>console.log(`Error : ${err}`));
});

router.put("/edit:id", (req,res)=>
{
    Task.findById(req.params.id)
    .then((task)=>
    {
        task.title=req.body.title;
        task.description=req.body.description;
        task.dateReminder=req.body.dateReminder;

        task.save()
            .then(()=>
            {
                res.redirect("/task/list")
            })
            .catch(err=>console.log(`Error : ${err}`));
    })
    .catch(err=>console.log(`Error : ${err}`));
    res.render('task');
});

//Route used to delete task 
router.delete("/delete/:id",(req,res)=>
{
    Task.deleteOne({_id:req.params.id})
    .then((task)=>{

        res.redirect("/task/list");
    })
    .catch(err=>console.log(`Error : ${err}`));
});


module.exports = router;