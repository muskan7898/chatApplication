import {Service} from "typedi";
import * as process from "node:process";

@Service()
export class ConfigService {
  getPort() {
    return parseInt(process.env.PORT || '8080') || 8080;
  }
}
