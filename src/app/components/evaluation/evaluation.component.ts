import { Evaluation } from 'src/app/models/evaluation';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EvaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {
  evaluation!: Evaluation[]
  id!: number;
  evaluations!: Evaluation[];

  constructor(private evaluationService: EvaluationService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });

      this.getEvaluationByModule(this.id)
  }


  public getEvaluationByModule(id: number) {
    this.evaluationService.getEvaluationByModuleId(id).subscribe((response) => {
      this.evaluations = response;
      console.log(this.evaluations);
    })
  }
}
