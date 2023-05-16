import { Addresses } from './adress';

export interface Contact {
  id: number | null;
  name: string;
  birthDate: Date;
  addresses: Addresses[];
}
