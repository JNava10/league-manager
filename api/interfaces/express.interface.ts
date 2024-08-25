import {Request, Response} from "express";
import {User} from "../entity/User";
import {AccessPayload} from "./login.interface";

export interface CustomRequest extends Request {
    user: AccessPayload
}

