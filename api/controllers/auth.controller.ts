import {Request, Response} from "express";
import {LoginData, LoginPayload} from "../interfaces/login.interface";
import {UserService} from "../services/user.service";
import {User} from "../entity/User";
import {generateToken} from "../utils/auth.utils";
import {verifyPassword} from "../utils/common.utils";

const userQuery = new UserService();

export const login = async (req: Request, res: Response) => {
    try {
        const {nickname, email, password} = req.body as LoginData;
        let user: User

        if (nickname && !email) user = await userQuery.getUserByNickname(nickname);
        else if (email) user = await userQuery.getUserByEmail(email);

        if (!user) return res.send('Invalid credentials.');

        const validPassword = await verifyPassword(password, user.password)

        if (!validPassword) return res.status(403).send("Invalid credentials.")

        const payload: LoginPayload = {nickname: user.nickname}
        const token = await generateToken(payload)

        const loggedData = {logged: token !== null, token};

        res.send(loggedData);
    } catch (error) {
        console.error(error);

        res.status(500).send(`Ha ocurrido un error al iniciar sesión. (${error})`);
    }
}