# 🕸 Hexagonal Architecture, DDD &amp; CQRS in TypeScript 🕸
Example of a TypeScript application following Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS).
API is express based and it is consuming service user.

## 🚎 CQRS Implementation 🚎
Applications like Api (/api) and Services like User (/src/core/user) are in communication throw synchronous Commandbus at Api layer where it call to ServiceProvider's to get Handlers of each Service implemented on API. 

[/api/config/commandBus.ts](./api/config/commandBus.ts )

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

##### 📝 Next Steps
* Implement QueryBus and QueryCommands
* Implement EventBus like RabbitMQ to send Domain Events
* Store Domain Events at Databases
* Implement Observability with ELK
