import {
  Args,
  Int,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Brands } from './brands.model';
import { BrandsService } from './brands.service';
import { Products } from 'src/products/products.model';
import { ProductsService } from 'src/products/products.service';

@Resolver(() => Brands)
export class BrandsResolver {
  constructor(
    private brandsService: BrandsService,
    private productsService: ProductsService,
  ) {}

  @Query((returns) => [Brands])
  getAllBrands(): Brands[] {
    return this.brandsService.findAll();
  }

  @Query((returns) => Brands)
  getBrandById(@Args('id', { type: () => Int }) id: number): Brands {
    return this.brandsService.findById(id);
  }

  @ResolveField()
  products(@Parent() brand: Brands): Products[] {
    const brandId = brand.id;
    return this.productsService.findByBrandId(brandId);
  }

  @Mutation((returns) => Brands)
  addBrand(
    @Args('id', { type: () => Int }) id: number,
    @Args('name') name: string,
  ): Brands {
    return this.brandsService.addBrand(id, name);
  }
}
