import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private usersRepository: Repository<Person>,
  ) {}
  create(data: CreatePersonDto) {
    const person = this.usersRepository.create(data);
    return person;
  }
  async update(id: number, data: Partial<UpdatePersonDto>) {
    await this.usersRepository.update({ id }, data);
    return await this.usersRepository.findOne({ id });
  }
  findAll(): Promise<Person[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Person> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
