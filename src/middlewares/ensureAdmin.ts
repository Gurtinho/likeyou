import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

const ensureAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { user_id } = req;
    const userRepositories = getCustomRepository(UsersRepositories);
    
    const { admin } = await userRepositories.findOne( user_id );

    if (admin) return next();
    return res.status(401).json({ error: 'Not authorized' });
};

export { ensureAdmin };