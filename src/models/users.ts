import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require: true,
    },
    lastname : {
        type:String,
        require: true
    },
    email : {
        type:String,
        require: true
    },
    password : {
        type:String,
        require: true
    },
    profile : {
        type:String,
        default:"https://res.cloudinary.com/dt7chsxsa/image/upload/v1711547144/Blogs/278c5f30d818e5fe53c1f027efe0d2a1_se3ud7.webp"
    },
    role : {
        type:String,
        enum: ["user","admin"],
        default:"user"
    }
});
const Users = mongoose.model("Users",userSchema);
export default Users;