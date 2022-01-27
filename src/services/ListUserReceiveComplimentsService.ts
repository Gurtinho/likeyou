import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = complimentsRepositories.findOne({
            where: {
                user_receiver: user_id
            },
            relations: ['userSender', 'userReceive', 'tag']
        });

        return compliments;
    };
};

export { ListUserReceiveComplimentsService };