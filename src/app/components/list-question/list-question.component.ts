import { EvaluationService } from './../../services/evaluation.service';
import { Evaluation } from './../../models/evaluation';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from './../../models/question';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  questions!: Question[];
  id! : number
  evaluation!: Evaluation[];
  constructor(private questionService: QuestionService,
    private evaluationService: EvaluationService,
              private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsId => {
        this.id = paramsId.id;
    });

    this.getQuestionByEvaluation(this.id)

    // this.evaluationService.getAll().subscribe((response) => {
    //   this.evaluation = response;
    //   console.log(response);
    // });
  }

  //

//   public getAll() {
//  this.questionService.getAll().subscribe((response) => {
//       this.question = response;
//       console.log(response);
//  })
//   }

    public getQuestionByEvaluation(id: number) {
      this.questionService.getQuestiondByEvaluationId(id).subscribe((response) => {
      this.questions = response;
      console.log(this.questions);
    })
   }

   public deleteQuestion(id: number) {
    this.questionService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer ce question");
      console.log(data);
      this.reload();
    });
  }

  public updateQuestion(id: number) {
     this.router.navigate(['update-question', id]);
  }

  public reload() {
    window.location.reload();
  }


}

