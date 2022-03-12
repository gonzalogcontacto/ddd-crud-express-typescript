export class CreateUserHandler {
  userCreator;
  constructor(userCreator: any) {
    this.userCreator = userCreator;
  }
  handle(command: any) {
    // Logic to create an account.
    this.userCreator.invoke(command);
  }
}
