export class CreatePersonDto {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  phone: string;
  address: string;
  estatus?: number;
  date_created: number;
  date_updated: number;
}
