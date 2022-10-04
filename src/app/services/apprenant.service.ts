import { Apprenant } from './../models/apprenant';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApprenantService {

  private url = environment.urlApprenant;

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Apprenant[]>{
    return this.http.get<Apprenant[]>(`${this.url}`);
  }

  public create(apprenant: Apprenant) : Observable<Object>{
    return this.http.post(`${this.url}`, apprenant);
  }

  public update(id: number, apprenant: Apprenant) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, apprenant);
  }

  public delete(id: number) : Observable<Apprenant>{
    return this.http.delete<Apprenant>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Apprenant>{
    return this.http.get<Apprenant>(`${this.url}/${id}`);
  }
}
