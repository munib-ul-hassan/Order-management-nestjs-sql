import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrderService } from './order.service';
// import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  create(@Body() order: Order): Promise<Order> {
    console.log(order);
    return this.orderService.createOrder(order);
  }

  @Get()
  findAll(): Promise<Order[]> {
    return this.orderService.getAllOrders();
  }
  @Get('customer/:id')
  findByCustomerId(@Param('id') id: number): Promise<Order[]> {
    return this.orderService.mostProductByCustomerId(id);
  }
  @Get('category')
  findByCategory(): Promise<any> {
    
    return this.orderService.getOrdersGroupedByProductCategory();
  }
}
