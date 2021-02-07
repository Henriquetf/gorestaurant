import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Product from '@modules/products/infra/typeorm/entities/Product';

import Order from './Order';

@Entity({
  name: 'orders_products',
})
export default class OrderProducts {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({
    name: 'order_id',
    type: 'uuid',
  })
  orderId!: string;

  @ManyToOne(() => Order, (order) => order.products)
  @JoinColumn({ name: 'order_id' })
  order?: Order;

  @Column({
    name: 'product_id',
    type: 'uuid',
  })
  productId!: string;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'product_id' })
  product?: Order;

  @Column({
    type: 'decimal',
    precision: 18,
    scale: 2,
  })
  price!: number;

  @Column()
  quantity!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
