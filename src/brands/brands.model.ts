import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Products } from 'src/products/products.model';

@ObjectType()
export class Brands {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field((type) => [Products], { nullable: true })
  products?: Products[];
}
