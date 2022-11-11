 import { ModuleService } from './../../services/module.service';
import { Evaluation } from './../../models/evaluation';
import { Router } from '@angular/router';
import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/models/module';
import { UserService } from 'src/app/services/user.service';

 @Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
// export class ApprenantComponent implements OnInit {
//   evaluation!: Evaluation[];
//   module!: Module[];

//   constructor( private moduleService: ModuleService, private evaluationService: EvaluationService) { }

//   ngOnInit(): void {
//      this.moduleService.getAll().subscribe((response) => {
//       this.module = response;
//        console.log(response);
//      })

// this.evaluationService.getAll().subscribe((response) => {
//       this.evaluation = response;
//        console.log(response);
//      })
//   }

// }

export class ApprenantComponent implements OnInit {

 content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getApprenantBoard().subscribe( data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
