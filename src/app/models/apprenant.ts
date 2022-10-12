// import { Utilisateur } from './utilisateur';
import { Formation } from './formation';
import { Evaluation } from './evaluation';
import { Groupe } from './groupe';

export class Apprenant {
  id!: number;
  matricule?: string;
  niveau?: string;
  formation?: Formation;
  groupe?: Groupe;
  evaluations?: Array<Evaluation>;
  nom?: string;
  prenom?: string;
  adresse?: string;
  email?: string;
  username?: string;
  


  constructor(matricule?: string,
    niveau?: string,
    formation?: Formation,
    groupe?: Groupe,
    evaluations?: Array<Evaluation>,
    nom?: string,
    prenom?: string,
    adresse?: string,
    email?: string,
    username?: string,
  ) {
    // super();
    // this.id = id;
    this.matricule = matricule;
    this.niveau = niveau;
    this.formation = formation;
    this.groupe = groupe;
    this.evaluations = evaluations;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.email = email;
    this.username = username;
  }

}
