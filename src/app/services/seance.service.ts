import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Seance } from '../models/seance';

@Injectable({
  providedIn: 'root'
})
export class SeanceService{
  private url = environment.urlSeance;

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Seance[]>{
    return this.http.get<Seance[]>(`${this.url}`);
  }

  public create(seance: Seance) : Observable<Object>{
    return this.http.post(`${this.url}`, seance);
  }

  public update(id: number, seance: Seance) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, seance);
  }

  public delete(id: number) : Observable<Seance>{
    return this.http.delete<Seance>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Seance>{
    return this.http.get<Seance>(`${this.url}/${id}`);
  }
}
