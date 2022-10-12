export class Utilisateur {
  id?:number;
  nom?: string;
  prenom?: string;
  adresse?: string;
  email?: string;
  username?: string;
  password?: string;
  roles?: string;

  constructor(
    id?: number,
    nom?: string,
    prenom?: string,
    adresse?: string,
    email?: string,
    username?: string,
    password?: string,
    roles?: string,
  ) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
    this.email = email;
    this.username = username;
    this.password = password;
    this.roles = roles;
  }

}
