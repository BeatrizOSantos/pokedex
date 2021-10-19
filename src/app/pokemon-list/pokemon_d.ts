import { Type } from "./type_d";

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}
