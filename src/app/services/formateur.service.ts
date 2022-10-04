import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Formateur } from '../models/formateur';

@Injectable({
  providedIn: 'root'
})
export class FormateurService {
  deleteFormateur(id: number) {
    throw new Error('Method not implemented.');
  }
  private url= environment.urlFormateur

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Formateur[]>{
    return this.http.get<Formateur[]>(`${this.url}`);
  }

  public create(formateur: Formateur) : Observable<Object>{
    return this.http.post(`${this.url}`, formateur);
  }

  public update(id: number, formateur: Formateur) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, formateur);
  }

  public delete(id: number) : Observable<Formateur>{
    return this.http.delete<Formateur>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Formateur>{
    return this.http.get<Formateur>(`${this.url}/${id}`);
  }
}
