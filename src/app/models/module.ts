import { Formation } from './formation';
import { Evaluation } from './evaluation';
export class Module {
  id!: number;
  nom?: string;
  volumehoraire?: number;
  evaluations?:Evaluation[];
  formations?:Formation[];
}
