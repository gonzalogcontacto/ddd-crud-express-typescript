import { Server } from './server';

export class EcommerceBackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || '9000';
    this.server = new Server(port);
    /* // Able to load .env
    

    // Connection to mongo
    database();

    // Setup Command Bus
    commandBus;
 */
    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }

}
