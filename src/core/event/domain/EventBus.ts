import { DomainEvent } from "./DomainEvent";
export interface EventBus {
  publish(events: DomainEvent): void;
}
