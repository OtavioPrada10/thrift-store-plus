import { User } from 'src/modules/user/entity/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'address', schema: 'app_domain' })
export class Address {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  street: string;
  city: string;
  state: string;
  country: string;
  cep: string;
}
