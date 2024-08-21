import {Request, Response} from "express";
import {UserData} from "../interfaces/user.interface";
import {UserService} from "../services/user.service";
import {LeagueData} from "../interfaces/league.interface";
import {LeagueService} from "../services/league.service";
import {CustomRequest} from "../interfaces/express.interface";

const userService = new UserService()

export const createLeague = async (req: CustomRequest, res: Response) => {
    try {
        const body = req.body as LeagueData;
        
        const createdLeague = await LeagueService.createLeague(body, req.user.id);

        res.send(createdLeague);
    } catch (error) {
        console.error(error);
    }
}