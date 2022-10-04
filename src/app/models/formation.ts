import { Formateur } from './formateur';
import { Apprenant } from './apprenant';
import { Module } from './module';

export class Formation {
  id? : number;
  dureeFormation?:string;
  typeFormation?: string;
  modules?:Array<Module>;
  apprenants?:Array<Apprenant>;
  formateurs?:Array<Formateur>;
  }
