import * as jwt from "jsonwebtoken";

export const generateToken = async (payload: any, expiresIn: string = process.env['JWT_EXP_TIME']) => {
    console.log(jwt)

    return jwt.sign(payload, process.env['JWT_SECRET_KEY'], {expiresIn});
}

export const checkToken = (token: string) => {
    try {
        return jwt.verify(token, process.env['JWT_SECRET_KEY']);
    } catch (error) {
        console.error(error)
    }
}