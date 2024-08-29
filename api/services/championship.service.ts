import {prisma} from "../app";
import {ChampionshipData} from "../utils/interfaces/championship.interface";

export class ChampionshipService {
    static createChampionship = async (championship: ChampionshipData, authorId: number) => {
        try {
            return await prisma.leagueChampionship.create({
                data: {
                    name: championship.name,
                    description: championship.description,
                    authorId,
                    leagueId: championship.leagueId
                }
            });
        } catch (e) {
            console.error(e.message);
        }
    };
}
