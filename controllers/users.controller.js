let users = require("../models/users.model");
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const getAllData = (req,res)=>{
    res.status(202).json({ users})
}

const homeRouter = (req,res)=>{
    res.sendFile(path.join(__dirname + '/../views/index.html'));
}

//create post
const createData = (req,res)=>{
    const newUser ={
        id : uuidv4(),
        name : req.body.name,
        email : req.body.email
    }
    users.push(newUser);
   res.status(202).json(users);
}

//update post
const updateData = (req,res)=>{
    const id = req.params.id;
    const {name,email}= req.body;
    users.filter((user)=>user.id === id).map((sectionUser)=>{
        sectionUser.name = name;
        sectionUser.email = email;
    })
   res.status(202).json(users);
}

//delete post
const deletData = (req,res)=>{
    const id = req.params.id;
    users = users.filter((user)=>user.id !== id);
   res.status(202).json(users);
}

const errorRouter = (req,res,next)=>{
    res.status(404).json({
        message : 'page not found'
    })
}
module.exports = {getAllData ,homeRouter, errorRouter ,createData,updateData ,deletData};