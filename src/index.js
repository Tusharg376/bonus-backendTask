const express = require('express')
const mongoose = require('mongoose')
const app = express()
const route = require('./routes/routes')
mongoose.set('strictQuery', true);
app.use(express.json())

mongoose.connect('mongodb+srv://newdatabase:Gd6tycxuRBETdhM7@ourowncluster.jzinjug.mongodb.net/tailwebs',{
    useNewUrlParser:true
})
.then(()=>console.log("mongoDB connected"))
.catch((err)=> console.log(err))

app.use('/',route)

app.listen(3000, function(){
    console.log("server is connected on port 3000")
})