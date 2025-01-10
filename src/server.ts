import express from 'express';
import cookieParser from 'cookie-parser'
import {
  useContainer,
  useExpressServer
} from 'routing-controllers'
import { Container } from 'typedi'
import 'reflect-metadata'

class Server {
  private static app = express();

  private static addMiddleWares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  private static getControllers() {
    return [];
  }

  private static configureWithRoutingController() {
    useContainer(Container);
    useExpressServer(this.app, {
      controllers: this.getControllers()
    });
  }

  static start(port : number) {
    this.addMiddleWares();
    this.configureWithRoutingController();

    this.app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    })
  }
}

// starting the server
Server.start(4040);
