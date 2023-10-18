import { Injectable } from '@nestjs/common';
import { Products } from './products.model';

@Injectable()
export class ProductsService {
  private readonly products: Products[] = [
    {
      id: 1,
      name: 'Product A',
      brandId: 1,
    },
    {
      id: 2,
      name: 'Product B',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Product C',
      brandId: 2,
    },
  ];

  findById(id: number): Products {
    return this.products.find((product) => product.id == id);
  }

  findByBrandId(brandId: number): Products[] {
    return this.products.filter((product) => product.brandId == brandId);
  }

  addProduct(id: number, name: string, brandId: number): boolean {
    this.products.push({ id, name, brandId });
    return true;
  }
}
