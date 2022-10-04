import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Module } from '../models/module';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private url = environment.urlModule

  constructor(private http: HttpClient) { }

  public getAll() : Observable<Module[]>{
    return this.http.get<Module[]>(`${this.url}`);
  }

  public create(module: Module) : Observable<Object>{
    return this.http.post(`${this.url}`, module);
  }

  public update(id: number, module: Module) : Observable<Object>{
    return this.http.put<Object>(`${this.url}/${id}`, module);
  }

  public delete(id: number) : Observable<Module>{
    return this.http.delete<Module>(`${this.url}/${id}`);
  }

  public getById(id: number) : Observable<Module>{
    return this.http.get<Module>(`${this.url}/${id}`);
  }
}
