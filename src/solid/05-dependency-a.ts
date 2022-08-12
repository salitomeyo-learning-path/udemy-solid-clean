import { PostService } from './05-dependency-b';
import { ApiDatabaseService, JsonDatabaseService, LocalDataBaseService } from './05-dependency-c';


// Main
(async () => {
    const provider = new ApiDatabaseService();

    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();