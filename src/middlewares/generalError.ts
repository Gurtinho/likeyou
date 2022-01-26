import { Request, Response, NextFunction } from 'express';

const generalError = (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) return response.status(400).json({
        error: error.message
    });
    return response.status(500).json({
        error: 'Error',
        message: 'Internal Server Error'
    });
};

export { generalError };