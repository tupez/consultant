import { Component, OnInit } from '@angular/core';
import { Consultant } from '../../../beans/consultant';
import { ListConsultantComponent } from '../list-consultant.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-consultant',
  templateUrl: './view-consultant.component.html',
  styleUrls: ['./view-consultant.component.css']
})
export class ViewConsultantComponent implements OnInit {

  consultant: Consultant;

  parent: ListConsultantComponent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  close() {
    this.parent.sideNav.close();
    this.consultant = null;
  }

  viewConsultant(id: number) {
    this.router.navigate(['/consultant', id]);

  }
}
