import mongoose from "mongoose";
import Blogs from "./Blog";

const schema = new mongoose.Schema({
    blogId:  {
    type:mongoose.Schema.ObjectId,
    ref:  "Blog",
    required:true
},
content:{
    type:String,
    required:true
},
author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users', 
    required: true,
}},
{
    timestamps: true

})

const Comments = mongoose.model("Comments", schema);
export default Comments;