import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ConsultantService } from '../../services/consultant.service';
import { Consultant } from '../../beans/consultant';
import { MatTableDataSource, MatSort, MatSidenav, MatInput } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ViewConsultantComponent } from './view-consultant/view-consultant.component';

@Component({
  selector: 'app-list-consultant',
  templateUrl: './list-consultant.component.html',
  styleUrls: ['./list-consultant.component.css']
})
export class ListConsultantComponent implements OnInit, AfterViewInit {

  displayedColumns = [ 'short_name', 'full_name', 'status', 'gender', 'viewDetail'];

  showProgress = false;

  datasource = new MatTableDataSource();

  filter = '';

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatSidenav) sideNav: MatSidenav;
  @ViewChild(ViewConsultantComponent) viewConsultant: ViewConsultantComponent;
  @ViewChild(MatInput) searchInput: MatInput;

  constructor(private consultantService: ConsultantService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.viewConsultant.parent = this;
    this.sort.sortChange.subscribe(() => { this.changeValue(this.filter); });
    this.searchInput.focus();
  }

  private getConsultants(filter: string, orderField: string, orderDir: string) {
    this.showProgress = true;
    this.consultantService.getConsultants(filter, orderField, orderDir).
    subscribe((data) => {
      this.showProgress = false;
      this.datasource.data = data;
    }, (error) => {
      alert('error');
    });
  }

  changeValue(event: any) {
    if (event.keyCode === 13) {
      if (event.target.value != null && event.target.value.trim().length > 2) {
        this.filter = event.target.value.trim();
        this.getConsultants(this.filter, this.sort.active, this.sort.direction);
      }
    }
  }

  openCard(consultant: Consultant) {
    this.viewConsultant.consultant = consultant;
    this.sideNav.open();
  }

}
