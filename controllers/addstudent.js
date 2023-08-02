const studentModel= require('../model/student')

const addStudent= async(req,res)=>{
    const{studentName,fatherName,gender,className,address,state,city,zip}=req.body
    const newStudent = new studentModel({
        studentName:studentName,
        fatherName:fatherName,
        gender:gender,
        className:className,
        address:address,
        state:state,
        city:city,
        zip:zip
    })
try{
     await newStudent.save()
    res.status(200).send("student created sucessfully")
}
catch(error){
    res.status(400).send(error)
}
}

const getstudent= async(req,res)=>{
try{
    const find= await studentModel.find()
    res.status(200).send(find)
}
catch(error){
    res.status(400).send(error)
}
}

const editStudent= async(req,res)=>{
    const{id}=req.params
    const{studentName,fatherName,gender,className,address,state,city,zip}=req.body
try{
    const update= await studentModel.updateOne({_id:id},{$set:{"studentName":studentName,"fatherName":fatherName,"gender":gender,"className":className,"address":address,"state":state,"city":city,"zip":zip}})
    res.status(200).send("student updated")
}
catch(error){
    res.status(400).send(error)
}
}

const deleteStudent=async(req,res)=>{
    const{id}=req.params
try{
    await studentModel.deleteOne({_id:id})
    res.status(200).send("student deleted")
}  
catch(error){
    res.status(400).send(error)
}  
}

module.exports.addStudent=addStudent;
module.exports.getstudent=getstudent;
module.exports.editStudent=editStudent;
module.exports.deleteStudent=deleteStudent;