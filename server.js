//*****************Main Server************//

const express = require("express"); 
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const methodOverride =  require('method-override');
const session = require('express-session');
const fileup = require("express-fileupload");
//Imports all routes 
const taskRouter =  require('./routes/Task')
const userRouter =  require('./routes/User')
const mainRouter =  require('./routes/General')
const Keys = require('./config/Keys');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//configure app to use imports
app.use(bodyParser.urlencoded({extended:false}));  // Always must be listed above all routes
app.use(session({secret:'key'}));
app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(fileup());

//set engine for handlebars rendering
app.use('/', mainRouter);
app.use("/user", userRouter);
app.use('/task', taskRouter);

app.use((req,res, next)=>
{
    res.locals.user = req.sessopms.userInfo;
    next();
})


//connect to MongoDB
mongoose.connect(Keys.getdbURL(),{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>{
     console.log('Database Connected');
 })
    .catch(err=>{
        console.log(`Connection Error: ${err}`);
})





//connect to server via external environent or local port
const PORT = process.env.PORT || 10000;  //stores the port number for heroku
app.listen(PORT, ()=>{
    console.log(`Sever connected! Listening on port  ${PORT}`)
})
