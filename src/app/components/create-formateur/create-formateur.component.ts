import { FormateurService } from './../../services/formateur.service';
import { Router } from '@angular/router';
import { SeanceService } from './../../services/seance.service';
import { Formation } from './../../models/formation';
import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/formateur';
import { Seance } from 'src/app/models/seance';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.css']
})
export class CreateFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur();
  formations: Formation[] = [];
  seances: Seance[] = [];
  constructor(private formateurService: FormateurService, private seanceService: SeanceService,
  private router: Router) { }

  ngOnInit(): void {
    this.seanceService.getAll().subscribe((response) => {
      this.seances = response;
      console.log(response);
    })
  }

   CreateFormateur(){
     this.formateurService.create(this.formateur).subscribe((response) => {
       console.log(response);
       this.goBack();
     }, error => console.log(error));
    
  }

  goBack(){
    this.router.navigate(['/admin']);
  }

}
