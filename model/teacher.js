const mongoose= require('mongoose')
const teacherSchema= new mongoose.Schema({
    teacherName:{
        type:String,
    },
    fatherName:{
        type:String,
    },
    gender:{
        type:String,
    },
    qualification:{
        type:String,
    },
    address:{
        type:String,
    },
    state:{
        type:String
    },
    city:{
        type:String,
    },
    zip:{
        type:String,
    }
})
module.exports= mongoose.model("teacherdata",teacherSchema)