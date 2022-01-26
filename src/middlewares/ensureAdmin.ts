import { Request, Response, NextFunction } from "express";

// admin
const ensureAdmin = ( req: Request, res: Response, next: NextFunction ) => {
    const admin = true;
    if (admin) return next();
    return res.status(401).json({ error: 'Not authorized' });
};

export { ensureAdmin };