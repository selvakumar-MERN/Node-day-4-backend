const mongoose= require('mongoose')
const staffSchema= new mongoose.Schema({
    staffName:{
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
module.exports= mongoose.model("staffdata",staffSchema)