import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Brands {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;
}
