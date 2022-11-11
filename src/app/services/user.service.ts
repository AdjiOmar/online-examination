import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8080/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get( url + 'all', { responseType: 'text' });
  }

  getApprenantBoard(): Observable<any> {
    return this.http.get( url + 'apprenant', { responseType: 'text' });
  }

  getFormateurBoard(): Observable<any> {
    return this.http.get( url + 'formateur', { responseType: 'text' });
  }

  getGestionnaireBoard(): Observable<any> {
    return this.http.get( url + 'gestionnaire', { responseType: 'text' });
  }
}
