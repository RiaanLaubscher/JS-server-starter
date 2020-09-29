import { Length } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class HelloInput {
  @Field()
  @Length(1, 30)
  helloSentence!: string;
}
