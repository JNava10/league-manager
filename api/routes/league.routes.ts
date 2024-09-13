// @ts-ignore
import * as express from "express";
import * as controller from "../controllers/league.controller";
import {validateToken} from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", [validateToken], controller.createLeague);
router.get("/owned", [validateToken], controller.getOwnLeagues);
router.get("/:id", [validateToken], controller.getLeague);
router.get("/:id/members", [validateToken], controller.getLeagueMembers);
router.get("/:id/not-members", [validateToken], controller.searchNotMembers);
router.post("/:id/member", [validateToken], controller.addMemberToLeague);

export default router;