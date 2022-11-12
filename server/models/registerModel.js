// const connection = require('../mongoConnection.js')
// const registerSchemaModel = require ('../schemas/registerSchemaModel.js');
import '../mongoConnection.js';
import registerSchemaModel from '../schemas/registerSchema.js';


class RGModelConnect {

	registerUserCreation(userDetails){
		userDetails={...userDetails,"_id":Date.now()};
		var newUser = new registerSchemaModel(userDetails);
		newUser.save((err,result)=>{ err ?  err :  result});
	}
}

export default new RGModelConnect;