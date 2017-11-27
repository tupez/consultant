import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA} from '@angular/material';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = new Array();

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        this.messages.push(key + ': ' +  this.data[key]);
      }
    }
  }

}
