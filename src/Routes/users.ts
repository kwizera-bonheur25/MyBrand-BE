import express from "express";
import { addNewUser, getAllUsers, usersLogin } from "../Controller/usersController";
import fileUpload from "../helper/multer";
import { isValid } from "../middleware/users";
const usersRouter = express.Router();

usersRouter.post("/register",fileUpload.single("image"), isValid, addNewUser)
usersRouter.get("/",getAllUsers)
usersRouter.post("/login",fileUpload.single("image"), usersLogin)



export default usersRouter;