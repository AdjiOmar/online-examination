import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    private url = environment.urlMessage


  constructor(private http: HttpClient) { }

  public create(message: Message) : Observable<Object>{
    return this.http.post(`${this.url}`, message);
  }
}
