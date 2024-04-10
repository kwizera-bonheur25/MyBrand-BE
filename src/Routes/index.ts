import express  from "express";
import blogRouter from "./blogRouters";
import queriesRoute from "./QuerriesRoutes";
import usersRouter from "./users";

const router = express.Router();

router.use("/blogs", blogRouter);
router.use("/queries", queriesRoute)
router.use("/users", usersRouter)

export default router;