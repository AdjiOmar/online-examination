import { LocalstorageService } from './services/localstorage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online';
  constructor(private localstorageService: LocalstorageService) {
    
  }
}
