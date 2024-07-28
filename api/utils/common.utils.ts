import {hash} from "bcrypt";

export const hashPassword = async (text: string = process.env['DEFAULT_PASSWORD_TEXT']) => {
    const salt = Number(process.env['DEFAULT_PASSWORD_SALT']);

    return hash(text, salt)
}