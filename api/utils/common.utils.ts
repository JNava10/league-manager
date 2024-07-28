import {hash, compare} from "bcrypt";

export const hashPassword = async (text: string = process.env['DEFAULT_PASSWORD_TEXT']) => {
    const salt = Number(process.env['DEFAULT_PASSWORD_SALT']);

    return hash(text, salt)
}

export const verifyPassword = async  (plain: string, hash: string) => {
    return await compare(plain, hash)
}