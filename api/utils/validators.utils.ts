import {regexList} from "./constants/regex.constants";

export const isCustomEmail = (value: string) => {
    if (value.includes('@') && !regexList.email.test(value) || !value.includes('@')) throw new Error('Email is invalid');
}

export const isNick = (value: string) => {
    if (!value.includes('@') && regexList.nick.test(value) || value.includes('@')) throw new Error('Nick is invalid');
}