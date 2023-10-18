import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Brands } from './brands.model';
import { BrandsService } from './brands.service';

@Resolver(() => Brands)
export class BrandsResolver {
  constructor(private brandsService: BrandsService) {}
  @Query((returns) => [Brands])
  getAllBrands(): Brands[] {
    return this.brandsService.findAll();
  }
  @Query((returns) => Brands)
  getBrandById(@Args('id', { type: () => Int }) id: number): Brands {
    return this.brandsService.findById(id);
  }
  @Mutation((returns) => Brands)
  addBrand(
    @Args('id', { type: () => Int }) id: number,
    @Args('name') name: string,
  ): Brands {
    return this.brandsService.addBrand(id, name);
  }
}
