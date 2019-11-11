/*GENERAL ROUTES*/
//Route to direct user to home page//


const express =  require('express');
const router =  express.Router();
//When using a router the APP object will now become 'router'


router.get("/", (req,res)=>
{
    res.render('General/index');
})

router.get('/about', (req,res)=>
{
    res.render('General/about');
})

module.exports = router;
