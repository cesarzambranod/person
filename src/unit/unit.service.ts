import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Unit } from './entities/unit.entity';
import { CreateUnitDto } from './dto/create-unit.dto';
import { UpdateUnitDto } from './dto/update-unit.dto';

@Injectable()
export class UnitService {
  constructor(
    @InjectRepository(Unit)
    private unitRepository: Repository<Unit>,
  ) {}
  create(createUnitDto: CreateUnitDto) {
    return this.unitRepository.save(createUnitDto);
  }

  findAll(): Promise<Unit[]> {
    return this.unitRepository.find();
  }

  findOne(id: number): Promise<Unit> {
    return this.unitRepository.findOne(id);
  }

  async update(id: number, updateUnitDto: Partial<UpdateUnitDto>) {
    await this.unitRepository.update({ id }, updateUnitDto);
    return await this.unitRepository.findOne({ id });
  }

  async remove(id: number) {
    return await this.unitRepository.delete(id);
  }
}
