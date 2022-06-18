const path = require('path');
var cors=require('cors');
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const sequelize = require('./util/database');
//const userRoutes=require('./routes/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors);
const userController = require('./controllers/userC');
app.get('/getusers', (req,res,next)=>{
  console.log(req.body);
  next();
  // User.findAll()
  // .then(users=>res.send(json(users)))
  // .catch(err=>console.log(err));
});
app.post('/addnewuser',userController.postReq);
sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(7000);
  })
  .catch(err => {
    console.log(err);
  });
