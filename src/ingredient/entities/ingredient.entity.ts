import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  calories_for_gr: number;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_creted: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_updated: Date;
}
