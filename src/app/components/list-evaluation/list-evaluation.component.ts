import { EvaluationService } from './../../services/evaluation.service';
import { Router } from '@angular/router';
import { Evaluation } from './../../models/evaluation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-evaluation',
  templateUrl: './list-evaluation.component.html',
  styleUrls: ['./list-evaluation.component.css']
})
export class ListEvaluationComponent implements OnInit {
[x: string]: any;

  evaluation!: Evaluation[];

 

  constructor(private evaluationService: EvaluationService,private router: Router) { }

  ngOnInit(): void {

    // this.eval_id = this.activatedRoute.snapshot.params['eval_id'];
    // this.eval_title = this.activatedRoute.snapshot.params['title']

     this.evaluationService.getAll().subscribe((response) => {
      this.evaluation = response;
      console.log(response);
    })
  }
   public deleteEvaluation(id: number) {
    this.evaluationService.delete(id).subscribe(data => {
      alert("Voulez-vous vraiment supprimer cet evaluation");
      console.log(data);
      this.reload();
    });
   }


  public updateEvaluation(id: number) {
     this.router.navigate(['update-evaluation', id]);
  }

  evaluationDetails(id: number){
    this.router.navigate(['evaluation-details', id]);
  }

  public reload() {
    window.location.reload();
  }


}
