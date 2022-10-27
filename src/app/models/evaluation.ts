 import { Apprenant } from './apprenant';
import { TypeEvaluation } from './type-evaluation';
import { Question } from './question';
export class Evaluation {
  id! : number;
  nom?: string;
  date?: Date;
  description? : string;
  nbreQuestion? : number;
  duration? : Date;
  questions? : Question[];
  typeEvaluation? : TypeEvaluation;
  apprenant? : Apprenant;

}
