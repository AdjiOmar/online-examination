import { Evaluation } from './../models/evaluation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  private url = environment.urlEvaluation;

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Evaluation[]>{
    return this.http.get<Evaluation[]>(`${this.url}`);
  }

  public create(evaluation: Evaluation): Observable<Object>{
    console.log(this.url)
    return this.http.post(this.url, evaluation);
  }

  public update(evalId: number, evaluation: Evaluation) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${evalId}`, evaluation);
  }

  public delete(evalId: number) : Observable<Evaluation>{
    return this.http.delete<Evaluation>(`${this.url}/${evalId}`);
  }

  public getById(evalId: number) : Observable<Evaluation>{
    return this.http.get<Evaluation>(`${this.url}/${evalId}`);
  }

}
