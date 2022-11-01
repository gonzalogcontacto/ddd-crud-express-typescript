# 🕸 Hexagonal Architecture, DDD &amp; CQRS in TypeScript 🕸
[![Maintainability](https://api.codeclimate.com/v1/badges/3251dea564b4a4ea5aae/maintainability)](https://codeclimate.com/github/gonzalogcontacto/ddd-crud-express-typescript/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/3251dea564b4a4ea5aae/test_coverage)](https://codeclimate.com/github/gonzalogcontacto/ddd-crud-express-typescript/test_coverage)

Example of a TypeScript application following Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS).
API is express based and it is consuming service user.

## ⚒️ Tooling Usage ⚒️

- Express: Like API Framework
- Mongoose ODM at the API
- MongoDB: DB system
- RabbitMQ as EventBus
- A Simple Command Bus Implementation for NodeJS: [GitHub](https://github.com/erickjth/simple-command-bus#readme)
  It is majorly inspired by Tactician Command Bus for PHP https://tactician.thephpleague.com/

## 🚎 CQRS Implementation 🚎

Applications like Api (/api) and Services like User (/src/core/user) are in communication throw synchronous Commandbus at Api layer where it call to ServiceProvider's to get Handlers of each Service implemented on API.

[/api/config/commandBus.ts](./api/config/commandBus.ts)

```javascript
// Handler middleware: is registering all domainServices with a Provider Pattern
const commandHandlerMiddleware = new CommandHandlerMiddleware(
  new ClassNameExtractor(),
  new InMemoryLocator(new UserServiceProvider().commandHandlers()),
  new HandleInflector()
);
```

## 🚏 Service Provider 🚏

Each Service like user (/src/core/user) define and implement the expected Command Handlers to manage actions requested by the API layer.
This Service Providers decided the expected Infra to use like MongooseUserRespository.ts mantaining a contract with Application Layer defined at Domain Layer (UserRespository.ts).

## 📝 Next Steps 📝

- Implement QueryBus and QueryCommands
- Subscribe Ecommerce Service to User Domain Events at the implemented EventBus (RabbitMQ)
- Store Domain Events at Databases
- Implement Observability with ELK
- Implement Docker environment
- Testing
  - E2E with supertest
  - Integration Mock with jest
  - Unit with jest
