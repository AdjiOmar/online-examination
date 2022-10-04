import { Groupe } from './../../../models/groupe';
import { Formation } from './../../../models/formation';
import { Component, OnInit } from '@angular/core';
import { Apprenant } from 'src/app/models/apprenant';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-apprenant',
  templateUrl: './create-apprenant.component.html',
  styleUrls: ['./create-apprenant.component.css']
})
export class CreateApprenantComponent implements OnInit {

  apprenant: Apprenant = new Apprenant();
  formations: Formation[] = [];
  groups: Groupe[] = [];

  constructor(private apprenantService : ApprenantService, private groupeService: GroupeService,
    private router: Router) { }

  ngOnInit(): void {
    this.groupeService.getAll().subscribe((response) => {
      this.groups = response;
      console.log(response);
    })
  }

  createApprenant(){
    this.apprenantService.create(this.apprenant).subscribe((response) => {
      console.log(response);
      this.goBack();
    }, error => console.log(error));
  }

  goBack(){
    this.router.navigate(['/admin']);
  }

}
