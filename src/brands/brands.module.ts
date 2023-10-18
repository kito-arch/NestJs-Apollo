import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsResolver } from './brands.resolver';
import { ProductsService } from 'src/products/products.service';

@Module({
  providers: [BrandsService, BrandsResolver, ProductsService],
})
export class BrandsModule {}
