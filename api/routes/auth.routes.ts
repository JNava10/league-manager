// @ts-ignore
import * as express from "express";
import * as controller from "../controllers/auth.controller";
import {body} from "express-validator";
import {passwordRegex} from "../utils/constants/regex.constants";
import {checkBodyFields} from "../middlewares/body.middleware";

const router = express.Router();

router.post("/login", [
    body('email')
        .exists().withMessage('Email is required')
        .isEmail().withMessage('Invalid email'),
    body('password')
        .exists().withMessage('Password is required')
        .matches(passwordRegex).withMessage('Invalid password'),
    checkBodyFields
], controller.login);

export default router;