import { UserServiceProvider } from "../../../src/backoffice/user/UserServiceProvider";

const {
  Command,
  CommandBus,
  CommandHandlerMiddleware,
  ClassNameExtractor,
  InMemoryLocator,
  HandleInflector,
  LoggerMiddleware,
} = require("simple-command-bus");

// Command Bus
// Handler middleware: is registering all domainServices with a Provider Pattern
const commandHandlerMiddleware = new CommandHandlerMiddleware(
  new ClassNameExtractor(),
  new InMemoryLocator(new UserServiceProvider().commandHandlers()),
  new HandleInflector()
);

// Command bus instance
const commandBus = new CommandBus([
  new LoggerMiddleware(console),
  commandHandlerMiddleware,
]);

export default commandBus;
