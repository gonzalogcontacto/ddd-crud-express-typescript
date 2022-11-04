import { AfterAll, BeforeAll } from "@cucumber/cucumber";
import { EcommerceBackendApp } from "../../../../../apps/api/EcommerceBackendApp";
/* import { ConfigureRabbitMQCommand } from "../../../../../../src/apps/mooc/backend/command/ConfigureRabbitMQCommand";
import container from "../../../../../../src/apps/mooc/backend/dependency-injection";
import { MoocBackendApp } from "../../../../../../src/apps/mooc/backend/MoocBackendApp";
import { EventBus } from "../../../../../../src/Contexts/Shared/domain/EventBus";
import { EnvironmentArranger } from "../../../../../Contexts/Shared/infrastructure/arranger/EnvironmentArranger"; */

let application: EcommerceBackendApp;
/* let environmentArranger: EnvironmentArranger;
let eventBus: EventBus; */

BeforeAll(async () => {
  /*  await ConfigureRabbitMQCommand.run();

  environmentArranger = await container.get<Promise<EnvironmentArranger>>(
    "Mooc.EnvironmentArranger"
  );
  eventBus = container.get<EventBus>("Mooc.Shared.domain.EventBus");
  await environmentArranger.arrange();
 */

  application = new EcommerceBackendApp();
  await application.start();
});

AfterAll(async () => {
  await application.stop();
  /*   await environmentArranger.close(); */
});

 export { application /*, environmentArranger, eventBus*/};
