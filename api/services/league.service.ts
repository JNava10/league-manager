import {LeagueData} from "../utils/interfaces/league.interface";
import {prisma} from "../app";

export class LeagueService {
    static createLeague = async (league: LeagueData, authorId: number) => {
        try {
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
        } catch (e) {
            console.error(e.message);
        }
    };

    static addMember = async (userId: number, leagueId: number) => {
        console.log(userId)

        const memberAlreadyAdded = await prisma.leagueMember.findFirst({where: {userId, leagueId}});

        if (memberAlreadyAdded) throw new Error("Member already added");

        

        return prisma.leagueMember.create({
            data: {leagueId, userId}
        })
    }
}
