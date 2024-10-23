import { Order } from 'src/order/order.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;


  @OneToMany(() => Order, (orders) => orders.id)
  @JoinColumn({ name: 'id' })
  orders: Order;

  @Column()
  phone: string;

  @Column()
  card: string;
}
