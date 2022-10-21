import { Injectable } from '@angular/core';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  public saveQuestion(key: string, value: string) {
    localStorage.setItem(key, value);
  }


  public clearQuestion() {
    localStorage.clear();
  }
}
