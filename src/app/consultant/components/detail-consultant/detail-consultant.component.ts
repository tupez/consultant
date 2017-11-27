import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { ConsultantService } from '../../services/consultant.service';
import { Consultant } from '../../beans/consultant';
import { Observable } from 'rxjs/Observable';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { SnackBarComponent } from '../../../components/snack-bar/snack-bar.component';


@Component({
  selector: 'app-detail-consultant',
  templateUrl: './detail-consultant.component.html',
  styleUrls: ['./detail-consultant.component.css'],
})
export class DetailConsultantComponent implements OnInit {

  @ViewChild(SnackBarComponent) snackBarComponent: SnackBarComponent;

  consultant: Consultant;
  showProgress: boolean;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private consultantService: ConsultantService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.showProgress = true;
    this.getConsultant();
  }

  gotoListConsultants() {
    this.router.navigate(['/consultant/']);
  }

  addComment() {
    const dialogRef = this.dialog.open(AddCommentComponent, {
      height: '600px',
      width: '600px',
      data: { id: this.consultant.id}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.result === 'add') {
        this.getConsultant();
      }
    });
  }

  private getConsultant() {
    const consultant$ = this.route.paramMap
    .switchMap((params: ParamMap) => this.consultantService.getConsultant(params.get('id')));
    consultant$.subscribe((data) => {
      this.showProgress = false;
      this.consultant = data;
    }, (error) => this.snackBarComponent.open({'error': 'Inexpected error'}, 'error'));
  }

}
