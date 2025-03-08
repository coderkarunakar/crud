import User from  "../model/userModel.js";


//preparing a Create api
export const create = async (req,res) => {
    try{
        //here User from model, and this .body , .status, save  is came from express pre-build it is user for making http reqs (post,get,put,del)
        //and from frontend we will the data in terms of req.body and we will send it to db and it will be stored in db
        // for posting or creating new is the keyword
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

export const getAll = async(req,res) => {
    try{
       
        //with the help of find we can get all the data
        // for getting all the data .find is the keyword
        const userData = await User.find();
        //if there is no user data then handling that validation
        if(!userData){
            return res.status(404).json({msg:"User data not found"});
        }
        //now sending data to the response
        res.status(200).json(userData);
    }catch(error){
        res.status(500).json({error: error});
    }
}


//for accesing a record by its id
export const getOne = async(req,res)=>{
    try{
         //we can get this id by url
         const id = req.params.id;
         //to get by id we need to use keywork findById
            const userData = await User.findById(id);
            //if there is no user data then handling validation
            if(!userData){
                return res.status(400).json({msg:"User data not found"});
            }
            res.status(200).json(userData);
    }catch(error){
        res.status(500).json({error: error});
    }
}