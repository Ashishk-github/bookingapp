const path = require('path');
var cors=require('cors');
const express = require('express');
const app = express();
app.use(cors());
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
//const userRoutes=require('./routes/user');

app.use(bodyParser.urlencoded());
//app.use(express.json());
const userController = require('./controllers/userC');
app.get('/getusers',userController.getAllReq);
app.post('/addnewuser',userController.postReq);
app.delete('/deleteuser/:id',userController.deleteReq);
sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(7000);
  })
  .catch(err => {
    console.log(err);
  });
