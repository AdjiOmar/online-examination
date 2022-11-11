import { UserService } from './../../services/user.service';
import { FormateurService } from './../../services/formateur.service';
import { Formateur } from './../../models/formateur';
import { ApprenantService } from './../../services/apprenant.service';
import { Apprenant } from './../../models/apprenant';
import { Component, OnInit } from '@angular/core';
import { Groupe } from 'src/app/models/groupe';
import { GroupeService } from 'src/app/services/groupe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  content?: string;

  [x: string]: any;

  apprenant!: Apprenant[];
  c!: Formateur[];
  groupe!: Groupe[];

  constructor(private userService : UserService,
             private apprenantService: ApprenantService,
            private formateurService: FormateurService,
            private groupeServ: GroupeService, private route: Router) { }

  ngOnInit(): void {

       this.userService.getGestionnaireBoard().subscribe((response => {
        this.content = response;
      }),
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );


    // this.apprenantService.getAll().subscribe((response) => {
    //   this.apprenant = response;
    //   console.log(response);
    // })

    // this.formateurService.getAll().subscribe((response: Formateur[]) => {
    //   this.formateur = response;
    //   console.log(response);
    // })

    // this.groupeService.getAll().subscribe((response: Groupe[]) => {
    //   this.groupe = response;
    //   console.log(response);
    // })
  }

  formateurDetails(id: number){
    this.route.navigate(['formateur-details', id]);
  }

  updateFormateur(id: number){
    this.route.navigate(['update-formateur', id]);
  }

  // deleteFormateur(id: number){
  //   this.formateurService.deleteFormateur(id).subscribe((data: any) =>{
  //     console.log(data);
  //     this.getAllProgrammers();
  //   });
  // }

}



