import { QuestionService } from './../../services/question.service';
import { Question } from './../../models/question';
import { EvaluationService } from './../../services/evaluation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Evaluation } from './../../models/evaluation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-evaluation',
  templateUrl: './create-evaluation.component.html',
  styleUrls: ['./create-evaluation.component.css']
})
export class CreateEvaluationComponent implements OnInit {

  evaluation: Evaluation = new Evaluation();
  quest: Question = new Question();
  question: Question[] = [];
  // evaluations: Evaluation[] = [];
  id!: number;
  eval_id!: number;

  constructor(private evaluationService: EvaluationService,
              private questionService: QuestionService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.evaluationService.getAll().subscribe((response) => {
    //   this.evaluations = response;
    //   console.log(response);
    // });
      this.id = this.activatedRoute.snapshot.params['id'];
      this.questionService.getById(this.id).subscribe((response) => {
      this.quest = response;
      console.log(response);
    })

      this.id = this.activatedRoute.snapshot.params['id'];
      this.evaluationService.getById(this.id).subscribe((response) => {
      this.evaluation = response;
      console.log(response);
    });

    // get all questions
    // this.questionService.getAll().subscribe((response) => {
    //   this.question = response;
    //   console.log(response);
    // })
  }

  public addQuestion() {
    this.question.push(this.quest)
    this.quest = new Question()
    console.log(this.question)
  }

  public createEvaluation() {  
    this.evaluation.questions = this.question
    try {
      // this.evaluation.question = this.question
      // console.log(this.evaluation.question)
      this.evaluationService.create(this.evaluation).subscribe((response) => {
        console.log(response);
        this.goBack();
      });
    } catch (error) {
      throw error;
    }

  }

  // public addQuestion() {
  //   this.question.push(this.quest)
  //   console.log(this.question)
  // }

  goBack(){
    this.router.navigate(['/list-evaluation']);
  }

   public deleteQuestion(id: number) {
    this.questionService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer question");
      console.log(data);
      this.reload();
    });
   }

   public deleteEvaluation(id: number) {
    this.questionService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer cet evaluation");
      console.log(data);
      this.reload();
    });
  }

  public updateQuestion(id: number) {
    this.router.navigate(['update-question', id])
  }

    public updateEvaluation(id: number) {
    this.router.navigate(['update-evaluation', id])
  }



  public reload() {
    window.location.reload();
  }

  // public value: Question[] = [];
  // public selected(value: Question): void {
  //   console.log("Selected value", value)
  // }


}

