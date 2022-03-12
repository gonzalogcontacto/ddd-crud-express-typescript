import { Model } from "sequelize/types";
import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { UserDto } from "../../domain/UserDto";

export class UserCreator {
  userRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async invoke(user: UserDto) {
    try {
      return await this.userRepository.create(user);
    } catch (e) {
      throw new Error("Error creating User");
    }
  }
}
