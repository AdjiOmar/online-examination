import { Utilisateur } from './utilisateur';
import { Formation } from './formation';
import { Evaluation } from './evaluation';
import { Groupe } from './groupe';

export class Apprenant extends Utilisateur {
  id?: number;
  matricule?: string;
  niveau?: string;
  formation?: Formation;
  groupe?: Groupe;
  evaluations?: Array<Evaluation>;


}
