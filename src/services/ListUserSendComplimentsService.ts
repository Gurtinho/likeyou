import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserSendComplimentsService {
    async execute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

        const compliments = complimentsRepositories.findOne({
            where: {
                user_sender: user_id
            }
        });
        
        return compliments;
    };
};

export { ListUserSendComplimentsService };