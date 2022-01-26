import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UsersRepositories'
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
};

class CreateUserService {
    async execute({ name, email, admin, password }: IUserRequest) {
        const UsersRepository = getCustomRepository(UsersRepositories);

        if (!email) throw new Error('Email incorrect');
        const UserAlreadyExists = await UsersRepository.findOne({ email });
        if (UserAlreadyExists) throw new Error('Email already exists');

        const passwordEncrypted = await hash(password, 8);
        
        const user = UsersRepository.create({ name, email, admin, password: passwordEncrypted });
        return await UsersRepository.save(user);
    };
};

export { CreateUserService };