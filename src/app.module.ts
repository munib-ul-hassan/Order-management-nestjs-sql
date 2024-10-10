import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/customer.entity';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',  // Change this to your SQL Server host if necessary
      port: 1433,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database',
      synchronize: true,  // In production, this should be set to false
      entities: [Customer],
      options: { enableArithAbort: true },
    }),
    TypeOrmModule.forFeature([Customer]),  // Register your Customer entity
  ],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class AppModule {}
