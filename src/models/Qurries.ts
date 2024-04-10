import mongoose from "mongoose";

const schema = new mongoose.Schema({
email:{
    type:String,
    required:true
},
message: {
    type:String,
    required:true
}
// author:{
//     type: mongoose.Schema.ObjectId,
//     ref:"users",
//     required:false
// }

})

const Querries = mongoose.model("Querries", schema);
export default Querries;