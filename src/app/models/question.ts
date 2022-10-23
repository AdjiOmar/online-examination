import { Evaluation } from './evaluation';
export class Question {

   id!:number;
   libele?: string;
   reponse1?: string;
   reponse2?: string;
   reponse3?: string;
   reponse4?: string;
   bonneReponse?: string;
   reponseChoisie?: string;
   // evaluation_eval_id?: number;
   evaluation! : Evaluation;

}
