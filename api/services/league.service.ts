import {LeagueData} from "../utils/interfaces/league.interface";
import {prisma} from "../app";

export class LeagueService {
    static createLeague = async (league: LeagueData, authorId: number) => {
        return prisma.league.create({
            data: {
                name: league.name,
                description: league.description,
                authorId: authorId,
                category: null
            }
        });
    };

    static addMember = (userId: number, leagueId: number) => {
        const memberAlreadyAdded = prisma.leagueMember.findFirst({where: {userId}});

        if (memberAlreadyAdded) throw new Error("Member already added");

        return prisma.leagueMember.create({
            data: {leagueId, userId}
        })
    }
}
