import express from "express";
import { addNewQuery, deleteQuery, getAllQuerries, getSingleQuery } from "../Controller/queriiesController";
import fileUpload from "../helper/multer";
import { isAdmin } from "../middleware/authentication";
import { isValid } from "../middleware/query";

const queriesRouter = express.Router();

queriesRouter.get("/", getAllQuerries);

queriesRouter.post("/",fileUpload.single("image"),isValid, addNewQuery)

queriesRouter.get("/:id", getSingleQuery)

queriesRouter.delete("/:id", deleteQuery)



export default queriesRouter;