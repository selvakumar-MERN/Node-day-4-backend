const teacherModel= require('../model/teacher')

const addTeacher= async(req,res)=>{
    const{teacherName,fatherName,gender,qualification,address,state,city,zip}=req.body
    const newTeacher = new teacherModel({
        teacherName:teacherName,
        fatherName:fatherName,
        gender:gender,
        qualification:qualification,
        address:address,
        state:state,
        city:city,
        zip:zip
    })
try{
     await newTeacher.save()
    res.status(200).send("teacher created sucessfully")
}
catch(error){
    res.status(400).send(error)
}
}

const getteacher= async(req,res)=>{
try{
    const find= await teacherModel.find()
    res.status(200).send(find)
}
catch(error){
    res.status(400).send(error)
}
}

const editTeacher= async(req,res)=>{
    const{id}=req.params
    const{teacherName,fatherName,gender,qualification,address,state,city,zip}=req.body
try{
    const update= await teacherModel.updateOne({_id:id},{$set:{"teacherName":teacherName,"fatherName":fatherName,"gender":gender,"qualification":qualification,"address":address,"state":state,"city":city,"zip":zip}})
    res.status(200).send("teacher updated")
}
catch(error){
    res.status(400).send(error)
}
}

const deleteteacher=async(req,res)=>{
    const{id}=req.params
try{
    await teacherModel.deleteOne({_id:id})
    res.status(200).send("teacher deleted")
}  
catch(error){
    res.status(400).send(error)
}  
}

module.exports.addTeacher=addTeacher;
module.exports.getteacher=getteacher;
module.exports.editTeacher=editTeacher;
module.exports.deleteteacher=deleteteacher;