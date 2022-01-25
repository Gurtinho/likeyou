import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
};

class CreateUserService {
    async execute({ name, email, admin }: IUserRequest) {
        const UsersRepository = getCustomRepository(UsersRepositories);

        if (!email) throw new Error('Email incorrect');
        const UserAlreadyExists = await UsersRepository.findOne({ email });
        if (UserAlreadyExists) throw new Error('Email already exists');

        const user = UsersRepository.create({ name, email, admin });
        return await UsersRepository.save(user);
    };
};

export { CreateUserService };