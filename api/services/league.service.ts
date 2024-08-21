import { User } from "../entity/User";
import { UserData } from "../interfaces/user.interface";
import { AppDataSource } from "../data-source";
import { hashPassword } from "../utils/common.utils";
import { LoginData } from "../interfaces/login.interface";
import {League} from "../entity/League";
import {LeagueData} from "../interfaces/league.interface";

export class LeagueService {

    private static userRepository = AppDataSource.getRepository(User)
    private static leagueRepository = AppDataSource.getRepository(League)

    static createLeague = async ({ name, description }: LeagueData, authorId: number) => {
        const author = await LeagueService.userRepository.findOne({where: {id: authorId}});
        const league = new League();

        league.name = name;
        league.description = description;
        league.author = author;

        return await LeagueService.leagueRepository.save(league);
    };
}
