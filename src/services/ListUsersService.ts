import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { classToPlain } from 'class-transformer';

class ListUsersService {
    async execute() {
        const listUserRepositories = getCustomRepository(UsersRepositories);

        const users = await listUserRepositories.find();
        return classToPlain(users);
    };
};

export { ListUsersService };