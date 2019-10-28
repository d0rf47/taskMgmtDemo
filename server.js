const express = require("express"); 
const app = express();
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose')
const dbURL = 'mongodb+srv://Admin2:xuZNKjL2aHsqrlpv@falconbnb-ppoyi.gcp.mongodb.net/test?retryWrites=true&w=majority';
const taskRouter =  require('./routes/Task')
const userRouter =  require('./routes/User')
const mainRouter =  require('./routes/General')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/', mainRouter);
app.use("/user", userRouter);
app.use('/task', taskRouter);

mongoose.connect(dbURL,{ useUnifiedTopology: true, useNewUrlParser: true })
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
