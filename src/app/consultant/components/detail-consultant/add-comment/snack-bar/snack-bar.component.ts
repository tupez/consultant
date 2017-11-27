import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from './messages/messages.component';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {


  snackBarRef: MatSnackBarRef<MessagesComponent>;

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  open(messages) {
    console.info(messages);
      this.snackBarRef = this.snackBar.openFromComponent(MessagesComponent, {
        data: messages,
        verticalPosition: 'top',
        duration: 500
      });
  }

  close() {
    this.snackBarRef.dismiss();
  }

}
