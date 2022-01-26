import { Request as req, Response as res } from 'express';
import { CreateUserService } from '../services/CreateUserService';

class CreateUserController {
    async handle(req: req, res: res) {
        const { name, email, admin, password } = req.body;
        const createUser = new CreateUserService();
        const user = await createUser.execute({ name, email, admin, password });
        return res.json(user);
    };
};

export { CreateUserController };