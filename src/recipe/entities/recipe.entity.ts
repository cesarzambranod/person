import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  img: string;
  @Column()
  ingredients: string;
  @Column()
  preparation: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_creted: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date_updated: Date;
}
