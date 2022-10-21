import { Formation } from './formation';
import { Evaluation } from './evaluation';
export class Module {
  id!: number;
  nom?: string;
  volumehoraire?: number;
  evaluations?:Array<Evaluation>;
  formations?:Array<Formation>;
}
