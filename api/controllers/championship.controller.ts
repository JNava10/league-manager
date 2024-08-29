import {Request, Response} from "express";
import {UserData} from "../utils/interfaces/user.interface";
import {UserService} from "../services/user.service";
import {LeagueData} from "../utils/interfaces/league.interface";
import {LeagueService} from "../services/league.service";
import {CustomRequest} from "../utils/interfaces/express.interface";
import {prisma} from "../app";
import {CustomError} from "../utils/classes/error";
import {ChampionshipService} from "../services/championship.service";
import {ChampionshipData} from "../utils/interfaces/championship.interface";

export const createChampionship = async (req: CustomRequest, res: Response) => {
    try {
        const body = req.body as ChampionshipData;
        
        const createdLeague = await ChampionshipService.createChampionship(body, req.user.id);

        res.status(201).send(createdLeague);
    } catch (e) {
        const error: CustomError = {msg: e.message}
        res.status(500).send(error);
    }
}