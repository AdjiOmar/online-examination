import { FormationService } from 'src/app/services/formation.service';
import { UtilisateurComponent } from './../../utilisateur/utilisateur.component';
import { Groupe } from './../../../models/groupe';
import { Formation } from './../../../models/formation';
import { Component, OnInit } from '@angular/core';
import { Apprenant } from 'src/app/models/apprenant';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-apprenant',
  templateUrl: './create-apprenant.component.html',
  styleUrls: ['./create-apprenant.component.css']
})
export class CreateApprenantComponent implements OnInit {

  apprenant: Apprenant = new Apprenant();
  formations: Formation[] = [];
  groups: Groupe[] = [];
  id!: number;

  constructor ( private apprenantService : ApprenantService, private groupeService: GroupeService,
    private formationService: FormationService , private router: Router,private activatedRoute : ActivatedRoute) {
      //super();
     }

  ngOnInit(): void {
    this.groupeService.getAll().subscribe((response) => {
      this.groups = response;
      this.formations = response;
      console.log(response);
    })

     this.id = this.activatedRoute.snapshot.params['id'];
    this.apprenantService.getById(this.id).subscribe((response) => {
      this.apprenant = response;
      console.log(response);
    })
  }

  public createApprenant(){
    try {
      this.apprenantService.create(this.apprenant).subscribe((response) => {
      console.log(response);
      this.goBack();
    });
    } catch (error) {
      throw error;
    }
  }

  goBack(){
    this.router.navigate(['/list-apprenant']);
  }

}
