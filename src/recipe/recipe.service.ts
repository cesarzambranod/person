import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './entities/recipe.entity';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private usersRepository: Repository<Recipe>,
  ) {}
  create(createRecipeDto: CreateRecipeDto) {
    return this.usersRepository.save(createRecipeDto);
  }

  findAll(): Promise<Recipe[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<Recipe> {
    return this.usersRepository.findOne(id);
  }

  async update(id: number, updateRecipeDto: Partial<UpdateRecipeDto>) {
    await this.usersRepository.update({ id }, updateRecipeDto);
    return await this.usersRepository.findOne({ id });
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
