import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

export const checkBodyFields = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req);

    if (result.isEmpty()) next();

    return res.status(400).json(`Invalid request body. (${result.mapped()})`);
}