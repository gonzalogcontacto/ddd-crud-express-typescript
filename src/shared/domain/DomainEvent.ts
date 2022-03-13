import { v4 as uuidv4 } from "uuid";

export class DomainEvent {
  private aggregateId: String | undefined;
  private eventId: String | undefined;
  private occurredOn: Date | undefined;

  construct(aggregateId: String, eventId = uuidv4(), occurredOn = new Date()) {
    this.eventId = eventId;
    this.occurredOn = occurredOn;
  }

  fromPrimitives(
    aggregateId: String,
    body: String,
    eventId: String,
    occurredOn: Date
  ) {
    return { aggregateId, body, eventId, occurredOn };
  }

  eventName() {}

  get getAggregateId() {
    return this.aggregateId;
  }

  get getEventId(): String | undefined {
    return this.eventId;
  }

  get getOccurredOn() {
    return this.occurredOn;
  }
}
