import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import Customer from '@modules/customers/infra/typeorm/entities/Customer';

import OrderProducts from './OrderProducts';

@Entity({
  name: 'orders',
})
export default class Order {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    name: 'customer_id',
    type: 'uuid',
  })
  customerId!: string;

  @ManyToOne(() => Customer)
  @JoinColumn({ name: 'customer_id' })
  customer?: Customer;

  @OneToMany(() => OrderProducts, (product) => product.order, {
    cascade: true,
  })
  @JoinTable({ name: 'orders_products' })
  products?: OrderProducts[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt!: Date;
}
