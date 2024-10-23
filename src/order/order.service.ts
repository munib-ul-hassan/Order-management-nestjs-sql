import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
// import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async createOrder(orderdata: Order) {
    const order = this.ordersRepository.create(orderdata);
    return this.ordersRepository.save(order);
  }

  async getAllOrders() {
    return this.ordersRepository.find({
      relations: ['customer', 'product'], // Include customer and product details
    });
  }
  async mostProductByCustomerId(id: number) {
    return this.ordersRepository.find({
      where: { customer: { id } },
      relations: ['customer', 'product'], // Include customer and product details
    });
  }
  async getOrdersGroupedByProductCategory() {
    let data: any = await this.ordersRepository.find({
      relations: ['customer', 'product'], // Include customer and product details
    });
    console.log(data);
    let arr = {};
    data.map((i: any) => {
      if (arr[i.product.category]) {
        arr[i.product.category].push(i);
      } else {
        arr[i.product.category] = [i];
      }
    });
    let keys = Object.keys(arr);
    return keys.map((j) => {
        let obj ={}
        obj[j]= arr[j].length;
        obj["percentage"] = ((arr[j].length/data.length)*100).toFixed(2)
        return obj
    });
  }
}
