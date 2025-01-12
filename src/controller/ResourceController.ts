import {Get, JsonController, Param} from "routing-controllers";
import {Service} from "typedi";
import {UserService} from "@src/services/core/UserService";

@Service()
@JsonController("/resources")
export class ResourceController {

  constructor(private userService: UserService) {}

  @Get("/:id")
  async getById(@Param("id") id: string) {
    return await this.userService.getCustomerDetails(id);
  }
}
