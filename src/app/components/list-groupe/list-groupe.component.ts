import { Groupe } from '../../models/groupe';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private groupeService: GroupeService, private router:Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
     this.groupeService.getAll().subscribe((response: Groupe[]) => {
      this.groupe = response;
      console.log(response);
     })
     this.id = this.activatedRoute.snapshot.params['id'];
    this.groupeService.getById(this.id).subscribe((response) => {
      this.group = response;
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
      alert("Voulez-vous vraiment supprimer ce groupe");
      console.log(data);
      this.reload();
    });
  }

  public updateGroupe(id: number) {
    this.router.navigate(['update-groupe', id])
  }



  public reload() {
    window.location.reload();
  }



}
