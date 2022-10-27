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

  question: Question = new Question();
  questions: Question[] = [];

  evaluations: Evaluation[] = [];
  id!: number;

  // eval_id!: number;
  // eval_title!: String;

  constructor(private questionService: QuestionService,
              private evaluationService: EvaluationService,
              private router: Router,
              private activatedRoute: ActivatedRoute

  ) { }

  ngOnInit(): void {

    // this.eval_id = this.activatedRoute.snapshot.params['eval_id'];
    // this.eval_title = this.activatedRoute.snapshot.params['title']
    // this.question.evaluation!.id = this.eval_id;

    this.questionService.getAll().subscribe((response) => {
      this.questions = response;
      console.log(response);
    });

    this.evaluationService.getAll().subscribe((response) => {
      // this.questio = response;
      console.log(response);
      this.evaluations = response;
    });

      this.id = this.activatedRoute.snapshot.params['id'];
      this.questionService.getById(this.id).subscribe((response) => {
      this.question = response;
      console.log(response);
    })
  }


  public createQuestion(){
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
    this.router.navigate(['/list-question']);
  }

}

