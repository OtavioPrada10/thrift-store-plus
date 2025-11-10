import { User } from 'src/modules/user/entity/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address', schema: 'app_domain' })
export class Address {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ length: 100 })
  street: string;

  @Column({ length: 100 })
  city: string;

  @Column({ length: 100 })
  state: string;

  @Column({ length: 100 })
  country: string;

  @Column({ length: 100 })
  cep: string;
}
