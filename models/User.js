//User Schema Module

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    firstName:  
    {
        type:String,
        required:true
    },
    lastName:  
    {
        type:String,
        required:true
    },
    email:  
    {
        type:String,
        required:true
    },
    password:  
    {
        type:String,
        required:true
    },
  
    profilePic :
    {
        type:String
  
    },
    type :
    {
        type:String,
        default:"User"
    },
    dateCreated :
    {
        type:Date,
        default: Date.now()
    }
  });

  // Called before saving new user in db
        //function is used here b/c of es5 vs es6 semantics regarding the meaning of 'this'

userSchema.pre("save",function(next)
{
    bcrypt.genSalt(10)
        .then(salt =>
            {
                bcrypt.hash(this.password,salt)
                    .then(hash=>
                        {       
                            this.password=hash

                            next();
                        })
            })
})

const UserModel =  mongoose.model("User", userSchema);

module.exports = UserModel;