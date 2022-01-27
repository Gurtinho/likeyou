import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Ipayload {
    sub: string;
};

const ensureAuth = (req: Request, res: Response, next: NextFunction) => {
    // receber token
    const authToken = req.headers.authorization;
    
    // validar token preenchido
    if (!authToken) return res.status(401).json({ message: 'Token dont exists' });

    const [ , token ] = authToken.split(' ');
    try {
        // validar se é valido
        const { sub } = verify(token, '7005d6a4ebc131e62436abb492ced4e2') as Ipayload;
        // recuperar info do user
        req.user_id = sub;
        
        return next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    };
};

export { ensureAuth };