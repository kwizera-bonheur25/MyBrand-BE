import mongoose from "mongoose";
const schema = new mongoose.Schema({
    image:String,
    title:String,
    content:String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comments',
        },
    ],
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'likes',
        },
    ],
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users', 
        required: true,
    },
});

const Blogs = mongoose.model("Blog",schema)
export default Blogs;