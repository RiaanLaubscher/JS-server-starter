import { User } from "@src/entity/User.model";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => [User], { nullable: true })
  async users(): Promise<null | User[]> {

    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.email = "riaan_laubscher@hotmail.com";
    user.password = "Riaan";
    user.userName = "RiaanLaubscher";

    await user
      .save()
      .then(() => console.log("User saved"))
      .catch((e) => console.log(e));
      
    return await User.find();
  }
}
