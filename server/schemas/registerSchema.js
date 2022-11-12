// const mongoose=require('mongoose');
// const mongooseuniquevalidator = require('mongoose-unique-validator')
import mongoose from 'mongoose';
import mongooseuniquevalidator from 'mongoose-unique-validator';

const registerSchema = mongoose.Schema({
	_id:Number,
	name:{
		type:String,
		trim:true,
		required:true
	},
	email:{
		type:String,
		trim:true,
		required:true,
		unique:true,
		lowercase:true
	},
	age:Number,
	address:{
		type:String,
		trim:true,
		required:true
	},
	userName:{
		type:String,
		trim:true,
		required:true,
		unique:true,
		lowercase:true,
		max:20
	},
	password:{
		type:String,
		trim:true,
		required:true,
		lowercase:true
	}
});

	registerSchema.plugin(mongooseuniquevalidator);

const registerSchemaModel = mongoose.model('reg_temp',registerSchema,'register');

export default registerSchemaModel;