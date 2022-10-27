import { Evaluation } from './../../models/evaluation';
import { Router } from '@angular/router';
import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apprenant',
  templateUrl: './apprenant.component.html',
  styleUrls: ['./apprenant.component.css']
})
export class ApprenantComponent implements OnInit {

  evaluation!: Evaluation[];

  constructor( private evaluationService : EvaluationService, private router : Router) { }

  ngOnInit(): void {
     this.evaluationService.getAll().subscribe((response) => {
      this.evaluation = response;
      console.log(response);
    })
  }

}
