import { UserDto } from "./UserDto";

export interface UserRepository {
  create(user: UserDto): Promise<any>;
  save(user: UserDto): Promise<any>;
  search(filter: object): Promise<any>;
  delete(email: any): Promise<any>;
}
