import { Router } from '@angular/router';
import { FormationService } from './../../services/formation.service';
import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent implements OnInit {
  formation!: Formation[];
  format: Formation = new Formation();
  id!: number;


  constructor( private formationService: FormationService, private router:Router) { }

  ngOnInit(): void {
    this.formationService.getAll().subscribe((response) => {
      this.formation = response;
      console.log(response);
    })
  }

  public CreateFormation() {
    this.formationService.create(this.format).subscribe((response) => {
      console.log(response);
      this.reload();
    }, error => console.log(error));
  }

  public deleteFormation(id: number) {
    this.formationService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer cet formation")
      console.log(data);
      this.reload();
    })
  }

  public updateFormation(id: number) {
     this.router.navigate(['update-formation', id])

  }

  public reload() {
    window.location.reload();
  }

}


