import {Request, Response} from "express";
import {UserData} from "../utils/interfaces/user.interface";
import {UserService} from "../services/user.service";
import {LeagueData} from "../utils/interfaces/league.interface";
import {LeagueService} from "../services/league.service";
import {CustomRequest} from "../utils/interfaces/express.interface";
import {prisma} from "../app";

export const createLeague = async (req: CustomRequest, res: Response) => {
    try {
        const body = req.body as LeagueData;
        
        const createdLeague = await LeagueService.createLeague(body, req.user.id);

        if (!createdLeague) return res.status(500).send("Error while creating league");
        

        res.status(201).send(createdLeague);
    } catch (error) {
        res.status(500).send(error);
    }
}