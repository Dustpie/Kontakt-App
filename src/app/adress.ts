export interface Addresses {
  street: string;
  houseNumber: number | undefined | null;
  zip: number | null;
  town: string | undefined;
  country: string | undefined;
}

export type AddressArray = Addresses[];
