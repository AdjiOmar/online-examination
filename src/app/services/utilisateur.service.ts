import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private url = environment.urlUtilisateur

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Utilisateur[]>{
    return this.http.get<Utilisateur[]>(`${this.url}`);
  }

  public create(utilisateur: Utilisateur) : Observable<Object>{
    return this.http.post(`${this.url}`, utilisateur);
  }

  public update(id: number, utilisateur: Utilisateur) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, utilisateur);
  }

  public delete(id: number) : Observable<Utilisateur>{
    return this.http.delete<Utilisateur>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Utilisateur>{
    return this.http.get<Utilisateur>(`${this.url}/${id}`);
  }
}
