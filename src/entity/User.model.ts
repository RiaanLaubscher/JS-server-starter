/* This is a classic example of a Model file containing the Model interface and it's
class based entity. The decorators are from sequelize-typescript and type-graphql, respectively.
Sequelize-typescript helps us decorate the Model for the Sequelize instance, whereas type-graphql helps
us decorate the Model for the graphql schema. At the end it is parsed into a 'type' on the
schema which is found in the "@src/server/" folder. */
import { Field, ID, InterfaceType, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

// FIRST, define an interface for the user model. This will be used in the code by us, e.g. User.firstName
// Note the optional fields that we don't want to force ourselves to populate. (Sequelize does this by itself)
@InterfaceType()
export abstract class UserI {
  @Field((type) => ID)
  id?: number;

  @Field((type) => String)
  userName!: string;

  @Field((type) => String)
  firstName!: string;

  @Field((type) => String)
  lastName!: string;

  @Field((type) => String)
  email!: string;

  password!: string;

  @Field((type) => Date)
  createdAt?: Date;
  @Field((type) => Date)
  updatedAt?: Date;
  @Field((type) => Date)
  deletedAt?: Date;
}

// SECOND, create the Model blueprint with all the decorators and attributes.
@Entity()
@ObjectType()
export class User extends BaseEntity implements UserI {
  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  id?: number;

  @Field((type) => String)
  @Column()
  userName!: string;

  @Field((type) => String)
  @Column()
  firstName!: string;

  @Field((type) => String)
  @Column()
  lastName!: string;

  @Field((type) => String)
  @Column()
  email!: string;

  @Column()
  password!: string;

  @Field((type) => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field((type) => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;

  // getters and setters in Model instances allows for better abstraction
  // of atrributes of the model (such as combining fields)
  @Field((type) => String)
  get fullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
