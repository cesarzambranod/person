import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 30 })
  firstname: string;
  @Column({ length: 30 })
  lastname: string;
  @Column({ length: 255 })
  email: string;
  @Column({ length: 255 })
  phone: string;
  @Column({ length: 255 })
  address: string;
  @Column({ length: 4 })
  status: number;
  @Column()
  viewed: boolean;
  @Column({ length: 255 })
  last_address_seen: string;
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date_creted: Date;
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  date_updated: Date;
}
