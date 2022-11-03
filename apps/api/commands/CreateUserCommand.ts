const { Command } = require("simple-command-bus");

// CreateAccount Command
export class CreateUserCommand extends Command {
  constructor({ name, lastName, email, password }: any) {
    super();
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
}
