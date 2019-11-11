const express = require("express"); 
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const methodOverride =  require('method-override');
const taskRouter =  require('./routes/Task')
const userRouter =  require('./routes/User')
const mainRouter =  require('./routes/General')
const Keys = require('./config/Keys');
app.use(bodyParser.urlencoded({extended:false}));  // Always must be listed above all routes

app.use(methodOverride('_method'));

app.use(bodyParser.json());
app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/', mainRouter);
app.use("/user", userRouter);
app.use('/task', taskRouter);

mongoose.connect(Keys.getdbURL(),{ useUnifiedTopology: true, useNewUrlParser: true })
    .then(()=>{
     console.log('Database Connected');
 })
    .catch(err=>{
        console.log(`Connection Error: ${err}`);
})




const PORT = process.env.PORT || 10000;  //stores the port number for heroku
app.listen(PORT, ()=>{
    console.log(`Sever connected! Listening on port  ${PORT}`)
})
