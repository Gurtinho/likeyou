import { Request, Response, NextFunction } from 'express';

const errors = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if (error instanceof Error) {
        return res.status(400).json({ error: error.message });
    };
    return res.status(500).json({
        error: 'Error',
        message: 'Internal Server Error'
    });
};

export { errors };