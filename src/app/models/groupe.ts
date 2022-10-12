import { Apprenant } from './apprenant';
export class Groupe {
  id!: number;
  code?: string;
  apprenant?: Array<Apprenant>;
}
