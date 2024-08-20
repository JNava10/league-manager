import {regexList} from "./constants/regex.constants";
import {Request} from "express";

export const isCustomEmail = (value: string) => {
    if (!regexList.email.test(value)) throw new Error();

    return true;
}

export const isNick = (value: string) => {
    if (!regexList.nick.test(value)) throw new Error();

    return true;
}

export const identifierExists = (value: string, {req}) => {
    const request = req as Request;

    if (!request.body['nickname'] && !request.body['email']) throw new Error();

    return true;

}