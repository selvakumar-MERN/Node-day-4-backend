const mongoose= require('mongoose')
const studentSchema= new mongoose.Schema({
    studentName:{
        type:String,
    },
    fatherName:{
        type:String,
    },
    gender:{
        type:String,
    },
    className:{
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
module.exports= mongoose.model("studentdata",studentSchema)