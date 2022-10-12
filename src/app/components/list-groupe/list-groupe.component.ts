import { Groupe } from '../../models/groupe';
import { Router } from '@angular/router';
import { GroupeService } from '../../services/groupe.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-groupe',
  templateUrl: './list-groupe.component.html',
  styleUrls: ['./list-groupe.component.css']
})
export class ListGroupeComponent implements OnInit {
  groupe!: Groupe[];
  group: Groupe = new Groupe();
  id!: number;
  color: any;

  constructor(private groupeService: GroupeService, private router:Router) { }

  ngOnInit(): void {
     this.groupeService.getAll().subscribe((response: Groupe[]) => {
      this.groupe = response;
      console.log(response);
    })
  }

  public CreateGroupe() {
    this.groupeService.create(this.group).subscribe((respone) => {
      console.log(respone);
      this.reload();
    }, error => console.log(error));
  }

  public deletGroupe(id: number) {
    this.groupeService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer cet element");
      console.log(data);
      this.reload();
    });
  }

  public updateGroupe(id: number){

  }

  public reload() {
    window.location.reload();
  }



}
