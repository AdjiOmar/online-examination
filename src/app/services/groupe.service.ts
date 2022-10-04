import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Groupe } from '../models/groupe';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  private url = environment.urlGroupe

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Groupe[]>{
    return this.http.get<Groupe[]>(`${this.url}`);
  }

  public create(groupe: Groupe) : Observable<Object>{
    return this.http.post(`${this.url}`, groupe);
  }

  public update(id: number, groupe: Groupe) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, groupe);
  }

  public delete(id: number) : Observable<Groupe>{
    return this.http.delete<Groupe>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Groupe>{
    return this.http.get<Groupe>(`${this.url}/${id}`);
  }
}
