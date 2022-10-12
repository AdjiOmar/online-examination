import { Formateur } from './../../models/formateur';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.css']
})
export class CreateFormateurComponent implements OnInit {

  formateur: Formateur = new Formateur();
  // formations: Formation[] = [];
  // groups: Groupe[] = [];

  constructor(private formateurService: FormateurService, private router: Router) {

  }

  ngOnInit(): void {
    this.formateurService.getAll().subscribe((response) => {
      // this.formateur = response;
      console.log(response);
    })
  }

  public createFormateur() {
    try {
      this.formateurService.create(this.formateur).subscribe((response) => {
        console.log(response);
        this.goBack();
      });
    } catch (error) {
      throw error;
    }
  }

  goBack() {
    this.router.navigate(['/admin']);
  }
}
