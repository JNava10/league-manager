// @ts-ignore
import * as express from "express";
import * as controller from "../controllers/user.controller";

const router = express.Router();

router.post("/create", controller.createUser);

export default router;