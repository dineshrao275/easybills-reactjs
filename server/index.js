// const express =require('express');
// const cors=require('cors');
// const bodyparser=require('body-parser');
// const registerModel = require('./models/registerModel.js');

import express from 'express';
import cors from 'cors';
import bodyparser from 'body-parser';
import registerModel from './models/registerModel.js';

const app=express();

app.use(cors());

app.use(bodyparser());

app.post('/register',(req,res)=>{
	registerModel.registerUserCreation(req.body);
	res.json({"output":"SUCCESS"});
});



app.listen(3002);
	
console.log("Server is Running");
