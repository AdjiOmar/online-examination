import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apprenant } from 'src/app/models/apprenant';
import { Groupe } from 'src/app/models/groupe';
import { ApprenantService } from 'src/app/services/apprenant.service';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-list-apprenant',
  templateUrl: './list-apprenant.component.html',
  styleUrls: ['./list-apprenant.component.css']
})
export class ListApprenantComponent implements OnInit {

  apprenant!: Apprenant[];
  groupe!: Groupe[];

  constructor(private apprenantService: ApprenantService,
         private groupeService: GroupeService,private route: Router) { }

  ngOnInit(): void {
     this.apprenantService.getAll().subscribe((response) => {
      this.apprenant = response;
      console.log(response);
    })
  }

}
