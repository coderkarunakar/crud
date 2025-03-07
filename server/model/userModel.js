import mongoose from "mongoose";
//syntax to create a mongoose schema
const userSchema = new mongoose.Schema({
    fname:{
        type : String,
        required: true
    },
    lname:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
})

//user is name of the modelname, userschema is structure of the document within the collection, collection means a group of documents stored in database
export default mongoose.model("User", userSchema);