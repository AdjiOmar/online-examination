import { MessageService } from './../../services/message.service';
import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: Message = new Message();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }
   public send() {
    this.messageService.create(this.message).subscribe((respone) => {
      console.log(respone);
      this.reload();
    }, error => console.log(error));
   }

  // public deletGroupe(id: number) {
//     this.groupeService.delete(id).subscribe(data => {
//       alert("Voulez-vous vraiment supprimer ce groupe");
//       console.log(data);
//       this.reload();
//     });

 public reload() {
    window.location.reload();
  }
}

