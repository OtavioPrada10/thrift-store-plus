import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: "users", schema: "app_domain" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100, })
  name: string;

  @Column({ type: 'enum', enum: ['admin', 'seller', 'customer', 'supplier'], default: 'customer' })
  role: 'admin' | 'seller' | 'customer' | 'supplier';

  @Column({length: 100})
  password: string;

  @CreateDateColumn({ name: 'add_time', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  addTime: Date;

  @UpdateDateColumn({ name: 'update_time', type: 'timestamp with time zone', default: () => 'CURRENT_TIMESTAMP' })
  updateTime: Date;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;
}