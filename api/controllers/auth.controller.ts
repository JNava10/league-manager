import {Request, Response} from "express";
import {AccessPayload, LoginData} from "../interfaces/login.interface";
import {UserService} from "../services/user.service";
import {User} from "../entity/User";
import {generateToken} from "../utils/auth.utils";
import {verifyPassword} from "../utils/common.utils";

const userService = new UserService();

export const login = async (req: Request, res: Response) => {
    try {
        const {nickname, email, password} = req.body as LoginData;
        let user: User

        if (nickname) user = await userService.getUserByNickname(nickname);
        else if (email) user = await userService.getUserByEmail(email);

        if (!user) return res.status(403).send('Invalid credentials.');

        const validPassword = await verifyPassword(password, user.password);

        if (!validPassword) return res.status(403).send("Invalid credentials.");

        const payload: AccessPayload = {nickname: user.nickname, email: user.email, id: user.id};

        const token = await generateToken(payload, null);

        // TODO: Generate access and refresh token.
        // const accessToken = await generateToken(payload, process.env['JWT_ACCESS_EXP_TIME'])
        // const refreshToken = await generateToken(payload, process.env['JWT_REFRESH_EXP_TIME']);

        const loggedData = {logged: true, token};

        res.send(loggedData);
    } catch (error) {
        console.error(error);

        res.status(500).send(`Ha ocurrido un error al iniciar sesión. (${error})`);
    }
}