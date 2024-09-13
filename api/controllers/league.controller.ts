import {Request, Response} from "express";
import {IsMemberAdded as IsQueryExecuted, KickMember, LeagueData, NewLeagueMember} from "../utils/interfaces/league.interface";
import {LeagueService} from "../services/league.service";
import {CustomRequest} from "../utils/interfaces/express.interface";
import {CustomError} from "../utils/classes/error";
import { isValidNumber } from "../helpers/validators.helper";

export const getLeague = async (req: CustomRequest, res: Response) => {
    try {
        const validId = isValidNumber(req.params['id']);

        if (!validId) {
            return res.send(`No se ha indicado un ID de liga valido.`);
        };
        
        const leagueId = Number(req.params['id']);
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

export const addMemberToLeague = async (req: CustomRequest, res: Response) => {
    try {
        // const userAlreadyInLeague = LeagueService.userAlreadyMember()

        const {userId} = req.body as NewLeagueMember;
        const validId = isValidNumber(req.params['id']);

        if (!validId) {
            return res.send(`No se ha indicado un ID de liga valido.`);
        };
        
        const leagueId = Number(req.params['id']);
        
        const executed = await LeagueService.addMember(userId, leagueId);

        const data: IsQueryExecuted = {
            executed,
            msg: "Se ha añadido correctamente el miembro a la liga." 
        }

        return res.status(201).send(data);
    } catch (e) {
        console.log(e);
        
        const error: CustomError = {msg: e.message}
        return res.status(500).send(error);
    }
}

export const getLeagueMembers = async (req: CustomRequest, res: Response) => {
    try {
        const validId = isValidNumber(req.params['id']);

        if (!validId) {
            return res.send(`No se ha indicado un ID de liga valido.`);
        };
        
        const leagueId = Number(req.params['id']);
        const leagueMembers = await LeagueService.getLeagueMembers(leagueId);

        return res.status(200).send(leagueMembers);
    } catch (e) {
        console.log(e);
        
        return res.status(500).send(e.message);
    }
}

export const searchNotMembers = async (req: CustomRequest, res: Response) => {
    try {
        const validId = isValidNumber(req.params['id']);

        if (!validId) {
            return res.send(`No se ha indicado un ID de liga valido.`);
        };
        
        const leagueId = Number(req.params['id']);
        const searchedUsers = String(req.query['search']);
        const leagueMembers = await LeagueService.searchNotMembers(leagueId, searchedUsers);

        return res.status(200).send(leagueMembers);
    } catch (e) {
        console.log(e);
        
        return res.status(500).send(e.message);
    }
}

export const kickMember = async (req: CustomRequest, res: Response) => {
    try {
        const userId = Number(req.params['userId']);
        const leagueId = Number(req.params['leagueId']);
        const executed = await LeagueService.kickMember(userId, leagueId);

        const data: IsQueryExecuted = {
            executed,
            msg: "Se ha eliminado de la liga al miembro correctamente." 
        }

        return res.status(200).send(data);
    } catch (e) {
        console.log(e);
        
        return res.status(500).send(e.message);
    }
}