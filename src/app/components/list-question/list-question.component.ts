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

  question!: Question[];
  evaluation!: Evaluation[];
  constructor(private questionService: QuestionService,
    private evaluationService: EvaluationService,
              private router: Router) { }

  ngOnInit(): void {

     this.questionService.getAll().subscribe((response) => {
      this.question = response;
      console.log(response);
    })

    this.evaluationService.getAll().subscribe((response) => {
      this.evaluation = response;
      console.log(response);
    });
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

