// @ts-ignore
import * as express from "express";
import * as controller from "../controllers/auth.controller";
import {body} from "express-validator";
import {checkBodyFields} from "../middlewares/body.middleware";
import {match} from "node:assert";
import {regexList} from "../utils/constants/regex.constants";
import {isCustomEmail, isNick} from "../utils/validators.utils";

const router = express.Router();

router.post("/login", [
    body('email').
        custom(isCustomEmail).withMessage('Invalid email'),
    body('nickname').
        custom(isNick).withMessage('Invalid nickname'),
    body('password')
        .exists().withMessage('Password is required')
        .matches(regexList.password).withMessage('Invalid password'),
    checkBodyFields
], controller.login);

export default router;