const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'teacher'
    },
    name:{
        type:String,
        require:true
    },
    subjects:{
        math:Number,
        Science:Number,
        English:Number,
        Hindi:Number
    }
},{timestamps:true})

module.exports = mongoose.model('student',studentSchema)