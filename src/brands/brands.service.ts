import { Injectable } from '@nestjs/common';
import { Brands } from './brands.model';

// interface Brands {
//   id: number;
//   name: string;
// }

@Injectable()
export class BrandsService {
  private readonly brands: Brands[] = [
    { id: 1, name: 'Adidas' },
    { id: 2, name: 'Nike' },
  ];
  findById(id: number): Brands {
    return this.brands.find((brand) => brand.id == id);
  }
  findAll(): Brands[] {
    return this.brands;
  }
  addBrand(id: number, name: string): Brands {
    this.brands.push({ id, name });
    return { id, name };
  }
}
