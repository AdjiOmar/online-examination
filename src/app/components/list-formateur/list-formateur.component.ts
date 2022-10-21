import { Formateur } from 'src/app/models/formateur';
import { Router } from '@angular/router';
import { FormateurService } from './../../services/formateur.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-formateur',
  templateUrl: './list-formateur.component.html',
  styleUrls: ['./list-formateur.component.css']
})
export class ListFormateurComponent implements OnInit {
  [x: string]: any;

  formateur!: Formateur[];


  constructor(private formateurService:FormateurService, private router:Router) { }

  ngOnInit(): void {
     this.formateurService.getAll().subscribe((response: Formateur[]) => {
      this.formateur = response;
      console.log(response);
    })
  }
   formateurDetails(id: number){
    this.router.navigate(['formateur-details', id]);
  }

  updateFormateur(id: number){
    this.router.navigate(['update-formateur', id]);
  }

  public deletFormateur(id: number) {
    this.formateurService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer ce formateur");
      console.log(data);
      this.reload();
    });
  }

  // deleteFormateur(id: number){
  //   this.formateurService.deleteFormateur(id).subscribe((data: any) =>{
  //     console.log(data);
  //   });
  // }

}
