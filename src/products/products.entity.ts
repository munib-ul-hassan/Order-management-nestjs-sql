import { Order } from 'src/order/order.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() name: string;

  @Column()
  price: number;

  @Column()
  stock: number;
  @Column()
  status: boolean;
  @Column()
  category: string;

  @OneToMany(() => Order, (orders) => orders.id)
  @JoinColumn({ name: 'id' })
  orders: Order;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
