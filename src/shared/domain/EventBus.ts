import { DomainEvent } from "./DomainEvent";
export interface EventBus {
  publish(events: string[]): void;
}
