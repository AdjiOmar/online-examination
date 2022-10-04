import { Formateur } from './formateur';
import { Module } from './module';

export class Seance {
  id?:number;
  localDateTime?: Date;
  duree?: string;
  objesctifs?: string;
  resume?: string;
  module?: Module;
  formateur?: Formateur;
}
