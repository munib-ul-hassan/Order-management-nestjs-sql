import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
@Module({
  imports: [
    
    TypeOrmModule.forRoot({
      type: 'mariadb',      
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-project',
      synchronize: true,  
      entities: [       
         "dist/**/*.entity{.js,.ts}"
      ],
      
    }),
    // TypeOrmModule.forFeature([Customer]),
    CustomerModule,
    ProductsModule ,
    OrderModule
    // Register your Customer entity
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
