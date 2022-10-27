import { ResultatService } from './../../services/resultat.service';
import { Resultat } from './../../models/resultat';
import { ActivatedRoute } from '@angular/router';
import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/models/evaluation';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-evaluation-apprenant',
  templateUrl: './evaluation-apprenant.component.html',
  styleUrls: ['./evaluation-apprenant.component.css']
})
export class EvaluationApprenantComponent implements OnInit {
  questions!: Question[];
  evaluation!: Evaluation[];
  resultat!: Resultat;

  id!: number;

  constructor(private questionService: QuestionService, private activatedRoute : ActivatedRoute, private resultatService: ResultatService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
        this.id = paramsId.id;
    });

    this.getQuestionByEvaluation(this.id)


  }

    public getQuestionByEvaluation(id: number) {
      this.questionService.getQuestiondByEvaluationId(id).subscribe((response) => {
      this.questions = response;
      console.log(this.questions);
    })
    }

  // public getResponse(id: number) {
  //   this.resultatService.getById(id).subscribe((response) =>){
  //     this.resultat = response;
  //     console.log(this.resultat)
  //    }

  //}
  public submit() {
  console.log
}


//       this.questionService.getQuestiondByEvaluationId(id).subscribe((response) => {
//       this.questions = response;
//       console.log(this.questions);
//     })
}
