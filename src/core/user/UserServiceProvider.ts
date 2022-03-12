import { CreateUserHandler } from "./application/create/CreateUserHandler";
import { UserCreator } from "./application/create/UserCreator";
import { MongooseCourseRepository } from "./infra/MoongoseUserRepository";

export class UserServiceProvider {
  commandHandlers() {
    return {
      CreateUserHandler: new CreateUserHandler(
        new UserCreator(new MongooseCourseRepository())
      ),
    };
  }
}
