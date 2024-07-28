import {Request, Response} from "express";
import {UserData} from "../interfaces/user.interface";
import {UserService} from "../services/user.service";

const userService = new UserService()

export const createUser = async (req: Request, res: Response) => {
    try {
        const body = req.body as UserData;
        
        const createdUser = await userService.createUser(body);

        res.send(createdUser);
    } catch (error) {
        console.error(error);
    }
}