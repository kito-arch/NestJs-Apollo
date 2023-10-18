import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsResolver } from './brands.resolver';

@Module({
  providers: [BrandsService, BrandsResolver]
})
export class BrandsModule {}
