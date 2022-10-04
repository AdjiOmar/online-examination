import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resultat } from '../models/resultat';

@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private url = environment.urlResultat;

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Resultat[]>{
    return this.http.get<Resultat[]>(`${this.url}`);
  }

  public create(resultat: Resultat) : Observable<Object>{
    return this.http.post(`${this.url}`, resultat);
  }

  public update(id: number, resultat: Resultat) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, resultat);
  }

  public delete(id: number) : Observable<Resultat>{
    return this.http.delete<Resultat>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Resultat>{
    return this.http.get<Resultat>(`${this.url}/${id}`);
  }
}
