import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Products {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => Int)
  brandId: number;
}
