import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

class CreateTagService {
    async execute(name: string) {
        const tagsRepositories = getCustomRepository(TagsRepositories);
        if (!name) throw new Error('Incorrect name');
        const tagsAlreadyExists = await tagsRepositories.findOne({ name });
        if (tagsAlreadyExists) throw new Error('Tags already exists');
        
        const tag = tagsRepositories.create({ name });
        return await tagsRepositories.save(tag);
    };
};

export { CreateTagService };

