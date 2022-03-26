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
    private recipeRepository: Repository<Recipe>,
  ) {}
  create(createRecipeDto: CreateRecipeDto) {
    return this.recipeRepository.save(createRecipeDto);
  }

  findAll(): Promise<Recipe[]> {
    return this.recipeRepository.find();
  }

  findOne(id: number): Promise<Recipe> {
    return this.recipeRepository.findOne(id);
  }

  async update(id: number, updateRecipeDto: Partial<UpdateRecipeDto>) {
    await this.recipeRepository.update({ id }, updateRecipeDto);
    return await this.recipeRepository.findOne({ id });
  }

  async remove(id: number) {
    return await this.recipeRepository.delete(id);
  }
}
