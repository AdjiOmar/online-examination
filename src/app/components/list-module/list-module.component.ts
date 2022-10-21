import { Router } from '@angular/router';
import { ModuleService } from './../../services/module.service';
import { Module } from './../../models/module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-module',
  templateUrl: './list-module.component.html',
  styleUrls: ['./list-module.component.css']
})
export class ListModuleComponent implements OnInit {

  module!: Module[];
  modul: Module = new Module();
  id!: number;

  constructor(private moduleService: ModuleService, private router: Router) { }

  ngOnInit(): void {
    this.moduleService.getAll().subscribe((response: Module[]) => {
      this.module = response;
      console.log(response);
    })
  }


  public CreateModule() {
    this.moduleService.create(this.modul).subscribe((respone) => {
      console.log(respone);
      // this.reload();
    }, error => console.log(error));
  }

  public deleteModule(id: number) {
    this.moduleService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer ce module");
      console.log(data);
      this.reload();
    });
  }

  public updateModule(id: number){
    this.router.navigate(['update-module', id])
  }

  public reload() {
    window.location.reload();
  }



}
