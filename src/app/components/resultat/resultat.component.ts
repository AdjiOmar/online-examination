import { Router } from '@angular/router';
import { ResultatService } from './../../services/resultat.service';
import { Resultat } from './../../models/resultat';
import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/models/reponse';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.css']
})
export class ResultatComponent implements OnInit {
  resultat!: Resultat;
  reponse!: Response[];

  constructor(private resultatService: ResultatService , private router: Router) { }

  ngOnInit(): void {
  }

  saveReponse() {

  }


}
