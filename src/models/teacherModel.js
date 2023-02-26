const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:True
    },
    email:{
        type:String,
        required:True,
        unique:True
    },
    password:{
        type:String,
        required:True
    }
},{timestamps:true})


module.exports = mongoose.model('teacher', teacherSchema)