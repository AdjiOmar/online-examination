import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private url = environment.urlQuestion;

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Question[]>{
    return this.http.get<Question[]>(`${this.url}`);
  }

  public create(question: Question) : Observable<Object>{
    return this.http.post(`${this.url}`, question);
  }

  public update(id: number, question: Question) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, question);
  }

  public delete(id: number) : Observable<Question>{
    return this.http.delete<Question>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Question>{
    return this.http.get<Question>(`${this.url}/${id}`);
  }
}
