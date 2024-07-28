import {Request, Response} from "express";
import {UserData} from "../interfaces/user.interface";
import * as UserQuery from "../query/user.query";

export const createUser = async (req: Request, res: Response) => {
    try {
        const body = req.body as UserData;
        
        const createdUser = await UserQuery.createUser(body);

        res.send(createdUser);
    } catch (error) {
        console.error(error);
    }
}