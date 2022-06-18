const Sequelize = require('sequelize');
const User = require('../models/user');

exports.getReq=(req,res,next)=>{
    console.log(2);
    User.findAll({where})
    .then(users=>res.send(json(users)))
    .catch(err=>console.log(err));
}

exports.postReq=(req,res,next)=>{
    const username=req.body.username,
    email=req.body.email;
    console.log(req.body);
    console.log(1);
    // User.create({
    //     username:username,
    //     email:email
    // })
    // .then(users=>res.send(json(users)))
    // .catch(err=>console.log(err));
}
exports.getAllReq=(req,res,next)=>{
    console.log(req.body);
    // User.findAll()
    // .then(users=>res.send(json(users)))
    // .catch(err=>console.log(err));
}