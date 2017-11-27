import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: String[];

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
    console.info(this.data);
    for (let i = 0; i < this.data.length; i++) {
      this.messages[i] = this.data[i];
    }
    console.info(this.messages);
  }

}
