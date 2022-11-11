import { ResultatService } from './../../services/resultat.service';
import { Resultat } from './../../models/resultat';
import { ActivatedRoute } from '@angular/router';
import { EvaluationService } from './../../services/evaluation.service';
import { Component, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/models/evaluation';
import { Question } from 'src/app/models/question';
import { QuestionService } from 'src/app/services/question.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-evaluation-apprenant',
  templateUrl: './evaluation-apprenant.component.html',
  styleUrls: ['./evaluation-apprenant.component.css']
})
export class EvaluationApprenantComponent implements OnInit {
  questions!: Question[];
  evaluation!: Evaluation[];
  // resultat!: Resultat;
  // response!: Response;

  id!: number;

  note:number = 100;
  trouve: number = 0;
  fausse: number = 0;
  nonRepondu : number = 0;
  repondu: number = 0;
  obtenu: number = 0; 
  isEvaluationCompleted: boolean = false;

  constructor(private questionService: QuestionService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
      this.id = paramsId.id;
    });

    this.getQuestionByEvaluation(this.id)

  }

  public getQuestionByEvaluation(id: number) {
    this.questionService.getQuestiondByEvaluationId(id).subscribe((response) => {
      this.questions = response;
      this.questions.forEach((q : any) => {
        q['reponse'] = '';
      });
      console.log(this.questions);
    })
  }
  submit() {
    this.isEvaluationCompleted = true; 
    this.questions.forEach((q: any) => {
      if (q.reponse != q.bonneReponse) {
        this.fausse++;
      }
      if (q.reponse == q.bonneReponse) {
        let point = this.note / this.questions.length;
        this.obtenu += point;
        this.trouve++;
      }
      if (q.reponse == '') {
        this.nonRepondu++;
      }
    });
    console.log('total question' + this.questions.length)
    console.log('mauvaise reponse' + this.fausse)
    console.log('bonne Reponse' + this.trouve)
    console.log(' non Repondu' + this.nonRepondu)
    console.log('obtenu' + this.obtenu)

  }
}
