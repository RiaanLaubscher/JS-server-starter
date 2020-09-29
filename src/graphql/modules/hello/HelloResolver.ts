import { Resolver, Query, Arg } from "type-graphql";
import { HelloInput } from "./helloresolver/HelloInput";

@Resolver()
export class HelloResolver {
  @Query(() => String)
  async hello(@Arg("data") { helloSentence }: HelloInput): Promise<String> {
    return "Hello!" + helloSentence;
  }
}