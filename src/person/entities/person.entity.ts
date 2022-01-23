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
}
