import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ) {}
  create(createIngredientDto: CreateIngredientDto) {
    return this.ingredientRepository.save(createIngredientDto);
  }

  findAll(): Promise<Ingredient[]> {
    return this.ingredientRepository.find();
  }

  findOne(id: number): Promise<Ingredient> {
    return this.ingredientRepository.findOne(id);
  }

  async update(id: number, updateIngredientDto: Partial<UpdateIngredientDto>) {
    await this.ingredientRepository.update({ id }, updateIngredientDto);
    return await this.ingredientRepository.findOne({ id });
  }

  async remove(id: number) {
    return await this.ingredientRepository.delete(id);
  }
}
