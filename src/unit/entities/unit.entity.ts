import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Unit {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  simbol: string;
  @Column()
  equal_gr: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_creted: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_updated: Date;
}
