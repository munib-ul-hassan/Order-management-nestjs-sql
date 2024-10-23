import { Module } from '@nestjs/common';
import { Product } from './products.entity';
import { ProductsController } from './products.controller';
import { ProductService } from './products.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [       
        TypeOrmModule.forFeature([Product]),                
      ],
      controllers: [ProductsController],
      providers: [ProductService],
})
export class ProductsModule {}
