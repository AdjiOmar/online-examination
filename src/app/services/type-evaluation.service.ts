import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeEvaluation } from '../models/type-evaluation';

@Injectable({
  providedIn: 'root'
})
export class TypeEvaluationService {
  private url = environment.urlTypeEvaluation;

  constructor(private http:HttpClient) { }

  public getAll() : Observable<TypeEvaluation[]>{
    return this.http.get<TypeEvaluation[]>(`${this.url}`);
  }

  public create(typeevaluation: TypeEvaluation) : Observable<Object>{
    return this.http.post(`${this.url}`, typeevaluation);
  }

  public update(id: number, typeevaluation: TypeEvaluation) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, typeevaluation);
  }

  public delete(id: number) : Observable<TypeEvaluation>{
    return this.http.delete<TypeEvaluation>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<TypeEvaluation>{
    return this.http.get<TypeEvaluation>(`${this.url}/${id}`);
  }
}
