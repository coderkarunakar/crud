import User from  "../model/userModel.js";


//preparing a Create api
export const create = async (req,res) => {
    try{
        //here User from model, and this .body , .status, save  is came from express pre-build it is user for making http reqs (post,get,put,del)
        //and from frontend we will the data in terms of req.body and we will send it to db and it will be stored in db
        const userData = new User(req.body);
        //just checking wheather we received user data or not
        if(!userData){
            return res.status(404).json({msg: "User data not found"});
        }
        //here just calling above function and saving the data
        const savedData = await userData.save();
        //now sending the data to response
        res.status(200).json(savedData);
    }catch(error){
        res.status(500).json({error: error});
    }
}