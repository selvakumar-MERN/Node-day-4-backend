const express = require('express');
const router= express.Router();
const studentdata= require('../controllers/addstudent');
const teacherdata=require('../controllers/addteacher');
const staffdata=require('../controllers/addstaff');

router.post('/addstudent',studentdata.addStudent)
router.get('/getstudent', studentdata.getstudent)
router.patch('/updatestudent/:id',studentdata.editStudent)
router.delete('/deletestudent/:id',studentdata.deleteStudent)

router.post('/addstaff',staffdata.addStaff)
router.get('/getstaff', staffdata.getstaff)
router.patch('/updatestaff/:id',staffdata.editStaff)
router.delete('/deletestaff/:id',staffdata.deleteStaff)

router.post('/addteacher',teacherdata.addTeacher)
router.get('/getteacher', teacherdata.getteacher)
router.patch('/updateteacher/:id',teacherdata.editTeacher)
router.delete('/deleteteacher/:id',teacherdata.deleteteacher)

module.exports=router