import { Adress } from "./adress";

export interface Contact {
    id:  number | null;
    name: string ;
    birthDate: Date ;

    adress:  Adress ;
}