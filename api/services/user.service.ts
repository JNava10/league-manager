import { User } from "../entity/User";
import { UserData } from "../interfaces/user.interface";
import { AppDataSource } from "../data-source";
import { hashPassword } from "../utils/common.utils";
import { LoginData } from "../interfaces/login.interface";

export class UserService {

    private userRepository = AppDataSource.getRepository(User)

    static createUser = async ({ name, lastname, secondLastname, password, nickname }: UserData) => {
        if (!password) password = await hashPassword(process.env['DEFAULT_PASSWORD_TEXT']);

        const user = new User();

        user.lastname = lastname;
        user.nickname = nickname;
        user.name = name;
        user.secondLastname = secondLastname;
        user.password = password;

        return await AppDataSource.manager.save(user);
    };

    getUserByNickname = async (nickname: string) => await this.userRepository.findOne({where: {nickname}});

    getUserByEmail = async (email: string) => await this.userRepository.findOne({where: {email}});
}
