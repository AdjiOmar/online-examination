import { Formation } from './../../models/formation';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-create-formation',
  templateUrl: './create-formation.component.html',
  styleUrls: ['./create-formation.component.css']
})
export class CreateFormationComponent implements OnInit {

  formation: Formation = new Formation();
  id!: number;


  constructor(private formationService: FormationService, private router: Router, private activedRoute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.formationService.getAll().subscribe((response) => {
      console.log(response);
    })
     this.id = this.activedRoute.snapshot.params['id'];
    this.formationService.getById(this.id).subscribe((response) => {
      this.formation = response;
      console.log(response);
    })
  }

  public createFormation() {
    try {
      this.formationService.create(this.formation).subscribe((response) => {
        console.log(response);
        this.goBack();
      });
    } catch (error) {
      throw error;
    }
  }

  goBack() {
    this.router.navigate(['/list-formation']);
  }
}
