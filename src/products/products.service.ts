import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private customerRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.customerRepository.find();
  }

  findOne(id: number): Promise<Product> {
    return this.customerRepository.findOneBy({ id });
  }

  create(product: Product): Promise<Product> {
    return this.customerRepository.save(product);
  }

  async update(id: number, product: Partial<Product>): Promise<Product> {
    await this.customerRepository.update(id, product);
    return this.customerRepository.findOneBy({ id });

  }

  async remove(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
