import { ModuleService } from './../../services/module.service';
import { Module } from './../../models/module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-module-apprenant',
  templateUrl: './module-apprenant.component.html',
  styleUrls: ['./module-apprenant.component.css']
})
export class ModuleApprenantComponent implements OnInit {

  
  module : Module[] = [];
  constructor(private moduleService : ModuleService, private router : Router) { }

  ngOnInit(): void {
     this.moduleService.getAll().subscribe((response) => {
      this.module = response;
      console.log(response);
    })
  }

}



