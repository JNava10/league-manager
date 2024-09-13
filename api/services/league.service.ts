import { kickMember } from './../controllers/league.controller';
import {LeagueData} from "../utils/interfaces/league.interface";
import {prisma} from "../app";
import { now } from '../helpers/common.helper';

export class LeagueService {
    static createLeague = async (league: LeagueData, authorId: number) => {
        const createdLeague = await prisma.league.create({
            data: {
                name: league.name,
                description: league.description,
                authorId: authorId,
                category: null
            }
        });

        await LeagueService.addMember(authorId, createdLeague.id);

        return createdLeague;
    };

    static addMember = async (userId: number, leagueId: number) => {
        const memberAlreadyAdded = await prisma.leagueMember.findFirst({where: {userId, leagueId}});

        if (memberAlreadyAdded) throw new Error("Member already added");

        const isAdded = await prisma.leagueMember.create({
            data: {leagueId, userId, accepted: true, joinedAt: now()}
        }) !== null;

        if (!isAdded) throw new Error("Error while adding the member.");

        return isAdded;
    }

    static kickMember = async (userId: number, leagueId: number) => {
        const leagueExists = await prisma.league.findUnique({where: {id: leagueId}}) !== null;
        const userIsMember = await prisma.leagueMember.findFirst({where: {leagueId, userId}})  !== null;

        if (!leagueExists) {
            throw new Error("League not exists.");
        }

        if (!userIsMember) {
            throw new Error("User not in league.");
        }

        const isAdded = await prisma.leagueMember.delete({
            where: {
                memberKeys: {userId, leagueId}
            }
        } ) !== null;

        if (!isAdded) { 
            throw new Error("Error while adding the member.")
        }

        return isAdded;
    }

    static getLeagueById = async (leagueId: number) => {
        return prisma.league.findFirst({where: {id: leagueId}});
    }

    static getUserLeagues = (authorId: number) => {
        return prisma.league.findMany({where: {authorId}});
    }

    static getLeagueMembers = async (leagueId: number) => {
        const leagueExists = await prisma.league.findFirst({where: {id: leagueId}}) !== null;
        
        if (!leagueExists) throw new Error(`La liga con ID ${leagueId} no existe.`)

        return prisma.leagueMember.findMany({where: {leagueId}, include: {user: true}});
    }

    static searchNotMembers = async (leagueId: number, search: string) => {
        const leagueExists = await prisma.league.findFirst({where: {id: leagueId}}) !== null;
        
        if (!leagueExists) throw new Error(`La liga con ID ${leagueId} no existe.`);

        // @ts-ignore
        const leagueMembers = (await prisma.leagueMember.findMany({where: {leagueId}, select: {userId: true}})).map(item => item.userId);

        return prisma.user.findMany(
            {
                where: {
                    id: {notIn: leagueMembers}, 
                    OR: [
                        {nickname: {contains: search}},
                        {name: {contains: search}},
                        {lastname: {contains: search}},
                    ]
                }
            }
        );
    }

    static userAlreadyMember = async (userId: number, leagueId: number) => {
        const leagueExists = await prisma.league.findUnique({where: {id: leagueId}}) !== null;
        const userExists = await prisma.user.findUnique({where: {id: leagueId}}) !== null;
        
        if (!leagueExists) throw new Error(`La liga con ID ${leagueId} no existe.`)
        if (!userExists) throw new Error(`El usuario con ID ${leagueId} no existe.`)

        return prisma.leagueMember.findFirst({where: {leagueId, userId}}) !== null;
    }

    static getPublicLeagues = async () => {
        return prisma.league.findMany();
        // TODO: Find leagues where private is false
        // TODO: Pagination
    }
}
