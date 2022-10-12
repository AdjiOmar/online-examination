import { Seance } from 'src/app/models/seance';
import { Router } from '@angular/router';
import { SeanceService } from './../../services/seance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-seance',
  templateUrl: './list-seance.component.html',
  styleUrls: ['./list-seance.component.css']
})
export class ListSeanceComponent implements OnInit {
  seance!: Seance[];
  id!: number;
  seanc: Seance = new Seance();


  constructor(private seanceService: SeanceService , private router:Router) { }
  ngOnInit(): void {
    this.seanceService.getAll().subscribe((response: Seance[]) => {
      this.seance = response;
      console.log(response);
    })
  }

   public CreateSeance() {
    this.seanceService.create(this.seanc).subscribe((respone) => {
      console.log(respone);
      this.reload();
    }, error => console.log(error));
  }

  public deletSeance(id: number) {
    this.seanceService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer cet element");
      console.log(data);
      this.reload();
    });
  }

  public updateSeance(id: number){

  }

  public reload() {
    window.location.reload();
  }



}
