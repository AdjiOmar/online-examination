import { Evaluation } from './../../models/evaluation';
import { EvaluationService } from './../../services/evaluation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../../services/question.service';
import { Question } from './../../models/question';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  evalId: number = 0;
  // id!: number ;

  question: Question = new Question();
  // question!: Question;
  questions: Question[] = [];
  evaluation: Evaluation = new Evaluation();

/*  question = {
    evaluation: {
      eval_id: 0
    },
    libele: '',
    reponse1: '',
    reponse2: '',
    reponse3: '',
    reponse4: '',
    bonneReponse: '',
    reponseChoisie: ''
  }*/

  constructor(private questionService: QuestionService,
              private evaluationService: EvaluationService,
              private router: Router,
              private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.evalId = this.activatedRoute.snapshot.params['evalId'];
    console.log(this.evalId);

    this.evaluationService.getById(this.evalId).subscribe((response) => {
      this.evaluation = response;
      this.question.evaluation = response;
      console.log(this.evaluation);
    });

    // this.question.evaluation_eval_id = this.evalId;
    // this.question.eval_id = this.evalId;
    // this.question.evaluation["eval_id"] = this.evalId;

 /*   this.evaluationService.getById(this.evalId).subscribe((response) => {
      this.evaluation = response;
      console.log(response);
    });*/

    // this.question.evaluation = this.evaluation;
  }


  public createQuestion(){
    // this.question.evaluation = this.evaluation;
    try {
      this.questionService.create(this.question).subscribe((response) => {
        console.log(response);
        this.goBack();
    });
    } catch (error) {
      throw error;
    }
  }

  goBack(){
    this.router.navigate(['/list-question/', this.evalId]);
  }

}

