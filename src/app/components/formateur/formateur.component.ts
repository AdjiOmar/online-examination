import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {


  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getFormateurBoard().subscribe(data => {
      this.content = data;
    },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
