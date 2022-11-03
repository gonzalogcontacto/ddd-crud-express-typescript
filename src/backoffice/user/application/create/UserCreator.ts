import { UserRepository } from "../../domain/UserRepository";
import { UserDto } from "../../domain/UserDto";
import { EventBus } from "../../../../shared/domain/EventBus";
import { DomainEvent } from "../../../../shared/domain/DomainEvent";

export class UserCreator {
  userRepository;
  eventBus;

  constructor(userRepository: UserRepository, eventBus: EventBus) {
    this.userRepository = userRepository;
    this.eventBus = eventBus;
  }

  async invoke(user: UserDto) {
    try {
      const userCreated = await this.userRepository.create(user);
      //const userCreatedEventDomain = new DomainEvent("USER_CREATED");

      this.eventBus.publish(["USER_CREATED"]);

      return new Promise((resolve) => {
        resolve(userCreated);
      });
    } catch (e) {
      throw new Error("Error creating User");
    }
  }
}
