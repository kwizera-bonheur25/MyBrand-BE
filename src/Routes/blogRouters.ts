import express from "express";
import { addNewBlog, deleteBlog, getAllBlogs, getSingleBlog, updateBlog } from "../Controller/blogContoller";
import { isValid } from "../middleware/blog";
import { isAdmin, isLoggedIn } from "../middleware/authentication";
import { getAllLikes, likes } from "../Controller/like";
import { newComment, deleteComment, getAllComments } from "../Controller/commentController";
import fileUpload from "../helper/multer";
const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);

blogRouter.post("/",isAdmin,fileUpload.single("image"), isValid, addNewBlog)

blogRouter.get("/:id", getSingleBlog)

blogRouter.patch("/:id", isAdmin,fileUpload.single("image"), updateBlog)

blogRouter.delete("/:id", isAdmin, deleteBlog)

blogRouter.post("/:id/likes" ,fileUpload.single("image") , isLoggedIn, likes)

blogRouter.get("/likes/likes", getAllLikes);

blogRouter.post("/:id/comments",fileUpload.single("image"), isLoggedIn, newComment);

blogRouter.get("/comments/comments", getAllComments);

blogRouter.delete("/:id/comments", isAdmin, deleteComment);

export default blogRouter;