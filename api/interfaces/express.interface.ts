import {Request, Response} from "express";
import {User} from "../entity/User";

export interface AuthUser {
    id: number,
    email: string,
    nickname: string
}

export interface CustomRequest extends Request {
    user: AuthUser
}

