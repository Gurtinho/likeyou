import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from 'class-transformer';

class ListTagService {
    async execute() {
        const listTagRepositories = getCustomRepository(TagsRepositories);

        const tags = await listTagRepositories.find();
        return classToPlain(tags);
    };
};

export { ListTagService };