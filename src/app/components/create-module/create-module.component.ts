import { ActivatedRoute, Router } from '@angular/router';
import { ModuleService } from './../../services/module.service';
import { Module } from './../../models/module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.css']
})
export class CreateModuleComponent implements OnInit {

  module: Module = new Module();
  id!: number;

    constructor(private moduleService: ModuleService, private router: Router, private activedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.moduleService.getAll().subscribe((response) => {
      console.log(response);
    });

    this.id = this.activedRoute.snapshot.params['id'];
    this.moduleService.getById(this.id).subscribe((response) => {
      this.module = response;
      console.log(response);
    })
  }

  public createModule() {
    try {
      this.moduleService.create(this.module).subscribe((response) => {
        console.log(response);
        this.goBack();
      });
    } catch (error) {
      throw error;
    }
  }

  goBack() {
    this.router.navigate(['/list-module']);
  }
}
