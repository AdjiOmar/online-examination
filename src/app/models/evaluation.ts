import { Apprenant } from './apprenant';
import { TypeEvaluation } from './type-evaluation';
import { Question } from './question';
export class Evaluation {
  id? : number;
  date? : Date;
  appreciation? : string;
  resultat? : number;
  duration? : Date;
  question? : Array<Question>;
  typeEvaluation? : TypeEvaluation;
  apprenant? : Apprenant;

}
