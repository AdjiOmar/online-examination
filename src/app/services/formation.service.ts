import { Formation } from './../models/formation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
  private url = environment.urlFormation

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Formation[]>{
    return this.http.get<Formation[]>(`${this.url}`);
  }

  public create(formation: Formation) : Observable<Object>{
    return this.http.post(`${this.url}`, formation);
  }

  public update(id: number, formation: Formation) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, formation);
  }

  public delete(id: number) : Observable<Formation>{
    return this.http.delete<Formation>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Formation>{
    return this.http.get<Formation>(`${this.url}/${id}`);
  }
}
