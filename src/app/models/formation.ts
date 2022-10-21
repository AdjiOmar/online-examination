import { Formateur } from './formateur';
import { Apprenant } from './apprenant';
import { Module } from './module';

export class Formation {
  id!: number;
  nom?: string;
  dureeFormation?:string;
  typeFormation?: string;
  modules?:Array<Module>;
  apprenants?:Array<Apprenant>;
  formateurs?:Array<Formateur>;
  }
