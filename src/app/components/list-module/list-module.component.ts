import { Groupe } from './../../models/groupe';
import { Router } from '@angular/router';
import { GroupeService } from './../../services/groupe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {
  groupe!: Groupe[];

  constructor(private groupeService: GroupeService, private router:Router) { }

  ngOnInit(): void {
     this.groupeService.getAll().subscribe((response: Groupe[]) => {
      this.groupe = response;
      console.log(response);
    })
  }

}
