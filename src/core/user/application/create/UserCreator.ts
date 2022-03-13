import { UserRepository } from "../../domain/UserRepository";
import { UserDto } from "../../domain/UserDto";
import { EventBus } from "../../../event/domain/EventBus";

export class UserCreator {
  userRepository;
  eventBus;

  constructor(userRepository: UserRepository, eventBus: EventBus) {
    this.userRepository = userRepository;
    this.eventBus = eventBus;
  }

  async invoke(user: UserDto) {
    try {
      return await this.userRepository.create(user);
    } catch (e) {
      throw new Error("Error creating User");
    }
  }
}
