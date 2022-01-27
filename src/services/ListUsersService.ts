import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

class ListUsersService {
    async execute() {
        const listUserRepositories = getCustomRepository(UsersRepositories);

        const users = await listUserRepositories.find();
        return users;
    };
};

export { ListUsersService };