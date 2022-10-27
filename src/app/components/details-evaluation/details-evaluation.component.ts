import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evaluation } from 'src/app/models/evaluation';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-details-evaluation',
  templateUrl: './details-evaluation.component.html',
  styleUrls: ['./details-evaluation.component.css']
})
export class DetailsEvaluationComponent implements OnInit {



 evaluation!: Evaluation[];



  constructor(private evaluationService: EvaluationService,private router: Router) { }

  ngOnInit(): void {


     this.evaluationService.getAll().subscribe((response) => {
      this.evaluation = response;
      console.log(response);
    })
  }

}
