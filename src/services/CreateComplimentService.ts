import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentsRequest {
    user_sender: string;
    user_receiver: string;
    tag_id: string;
    message: string;
};

class CreateComplimentService {
    async execute({ user_sender, user_receiver, tag_id, message }: IComplimentsRequest) {
        const complimentRepositories = getCustomRepository(ComplimentsRepositories);
        const userRepositories = getCustomRepository(UsersRepositories);

        if (user_sender === user_receiver) throw new Error('Dont send it to yourself');
        
        const userReceiverExists = await userRepositories.findOne(user_receiver);
        if (!userReceiverExists) throw new Error('User receiver does not exists');

        const compliments = complimentRepositories.create({
            user_sender,
            user_receiver,
            tag_id,
            message
        });
        return await complimentRepositories.save(compliments);
    };
};

export { CreateComplimentService };