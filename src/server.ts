import express from 'express';
import cookieParser from 'cookie-parser'
import {
  useContainer,
  useExpressServer
} from 'routing-controllers'
import { Container } from 'typedi'
import 'reflect-metadata'
import {ConfigService} from "@src/database/common/services/ConfigService";
import dotenv from 'dotenv'


dotenv.config({
  path: `.env`,
});

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
    this.app.get('/', (req, res) => {
      res.send('Hello World');});
  }
}

// starting the server
const configService = Container.get(ConfigService);
Server.start(configService.getPort());
