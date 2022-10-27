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
   roupe!: Groupe[];

  constructor(private apprenantService: ApprenantService,
         private groupeService: GroupeService,private router: Router) { }

  ngOnInit(): void {
     this.apprenantService.getAll().subscribe((response) => {
      this.apprenant = response;
      console.log(response);
    })
  }
   public deleteApprenant(id: number) {
    this.apprenantService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer ce apprenant");
      console.log(data);
      this.reload();
    });
  }

  public updateApprenant(id: number) {
     this.router.navigate(['update-apprenant', id]);
  }

  public reload() {
    window.location.reload();
  }


}
