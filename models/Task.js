const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const TaskSchema = new Schema ({
        title: {
           type: String,
           required: true
        },
        description: {
            Date: String,
            required: true
        },
        reminder:{
            type: Date,
            required: true
        },
        timeStamp:{
            type:Date,
            default:Date.now()
        },
        
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;