import {Service} from "typedi";
import {UserModel} from "@src/database/user/model";
import {CustomerDetails} from "@src/interfaces/req/CustomerDetails";
import {Builder} from "builder-pattern";

@Service()
export class UserService {

  async getCustomerDetails(customerId: string) {
    const user = await UserModel.findOne({ customerId: customerId });

    if(!user) {
      throw new Error(`User with id ${customerId} not found`);
    }

    return Builder<CustomerDetails>()
        .customerId(user._id.toString())
        .name(user.name)
        .email(user.email)
        .phone(user.phoneNumber)
        .build();
  }
}
