export class CreateRecipeDto {
  id?: number;
  name: string;
  img: string;
  ingredients: string;
  preparation: string;
  date_created: number;
  date_updated: number;
}
