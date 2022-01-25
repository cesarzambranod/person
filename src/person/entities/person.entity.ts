import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  firstname: string;
  @Column()
  lastname: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @Column()
  address: string;
  @Column()
  estatus: number;
  @Column()
  viewed: boolean;
  @Column()
  last_address_seen: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_creted: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_updated: Date;
}
