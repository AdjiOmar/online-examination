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

  public create(evaluation: Evaluation) : Observable<Object>{
    return this.http.post(`{this.url}`, evaluation);
  }

  public update(id: number, evaluation: Evaluation) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, evaluation);
  }

  public delete(id: number) : Observable<Evaluation>{
    return this.http.delete<Evaluation>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Evaluation>{
    return this.http.get<Evaluation>(`${this.url}/${id}`);
  }

}
