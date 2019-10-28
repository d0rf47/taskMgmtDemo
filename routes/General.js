const express =  require('express');
const router =  express.Router();
//When using a router the APP object will now become 'router'


router.get("/", (req,res)=>{
    res.render('home');
})

router.get('/About', (req,res)=>{
    res.render('about')
})

module.exports = router;
