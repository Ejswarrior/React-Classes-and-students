import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';

export function ErrorHandler(error: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) {
    return res.status(400).send(error)
}