export class CreateRecipeDto {
  id?: number;
  name: string;
  img: string;
  estatus?: number;
  ingredients: string;
  preparation: string;
  date_created: number;
  date_updated: number;
}
