import {Request, Response} from "express";
import {LeagueData} from "../utils/interfaces/league.interface";
import {LeagueService} from "../services/league.service";
import {CustomRequest} from "../utils/interfaces/express.interface";
import {CustomError} from "../utils/classes/error";

export const getLeague = async (req: CustomRequest, res: Response) => {
    try {
        const leagueId = Number(req.params['id']);

        if (!leagueId) {
            const leagues = await LeagueService.getPublicLeagues()
            return res.status(200).send(leagues);
        }

        const league = await LeagueService.getLeagueById(leagueId);

        return res.status(200).send(league);
    } catch (e) {
        const error: CustomError = {msg: e.message}
        return res.status(500).send(error);
    }
};

export const getOwnLeagues = async (req: CustomRequest, res: Response) => {
    try {
        const leagues = await LeagueService.getUserLeagues(req.user.id);

        return res.status(201).send(leagues);
    } catch (e) {
        const error: CustomError = {msg: e.message}
        return res.status(500).send(error);
    }
};

export const createLeague = async (req: CustomRequest, res: Response) => {
    try {
        const body = req.body as LeagueData;
        
        const createdLeague = await LeagueService.createLeague(body, req.user.id);

        return res.status(201).send(createdLeague);
    } catch (e) {
        const error: CustomError = {msg: e.message}
        return res.status(500).send(error);
    }
}