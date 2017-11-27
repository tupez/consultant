import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { Comment } from '../../../beans/comment';
import { CommentService } from '../../../services/comment.service';
import { SnackBarComponent } from '../../../../components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  @Input()
  idConsultant: number;

  @ViewChild(SnackBarComponent) snackBarComponent: SnackBarComponent;

  comment = new Comment();


  constructor(
    public dialogRef: MatDialogRef<AddCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commentService: CommentService) { }

  ngOnInit() {
    this.comment.consultant = this.data.id;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addComment() {
    this.commentService.addComment(this.comment).subscribe((data) => {
      this.dialogRef.close();
      this.snackBarComponent.open({'success': 'added comment'}, 'info');
    }, (error) => {
      this.snackBarComponent.open(error.error, 'error');
    });
  }

}
