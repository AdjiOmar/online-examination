import { Seance } from './seance';
import { Formation } from "./formation";
import { Utilisateur } from './utilisateur';

export class Formateur  extends Utilisateur {
  id!:number;
  specialite?:string;
  matricule?: string;
  formations?:Array<Formation>;
  seances?:Array<Seance>;
  lastName: any;
  create: any;

}
