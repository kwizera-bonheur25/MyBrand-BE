import mongoose from "mongoose";

const schema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', 
        required: true,
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blogs',
        required: true,
    }
},{
    timestamps: true

});

const Likes = mongoose.model('likes', schema);

export default Likes;