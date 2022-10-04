import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GestionnaireService {
   private url=environment.urlGestionnaire;

  constructor( private http: HttpClient) { }
  
}
