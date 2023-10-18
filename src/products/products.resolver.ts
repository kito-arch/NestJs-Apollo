import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Products } from './products.model';
import { ProductsService } from './products.service';

@Resolver(() => Products)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}
  @Query((returns) => [Products])
  getProductsByBrandId(
    @Args('brandId', { type: () => Int }) brandId: number,
  ): Products[] {
    return this.productsService.findByBrandId(brandId);
  }
  @Query((returns) => Products)
  getProductById(@Args('id', { type: () => Int }) id: number): Products {
    return this.productsService.findById(id);
  }
  @Mutation((returns) => Boolean)
  addProduct(
    @Args('id', { type: () => Int }) id: number,
    @Args('name') name: string,
    @Args('brandId', { type: () => Int }) brandId: number,
  ): boolean {
    return this.productsService.addProduct(id, name, brandId);
  }
}
