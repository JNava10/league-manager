// @ts-ignore
import * as express from "express";
import * as controller from "../controllers/league.controller";

const router = express.Router();

router.post("/", [], controller.createLeague);

export default router;