export class CreatePersonDto {
  id?: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  estatus?: number;
  viewed: boolean;
  last_address_seen: string;
  date_created: number;
  date_updated: number;
}
