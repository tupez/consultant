import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenderConsultantPipe } from './gender-consultant.pipe';
import { StatusConsultantPipe } from './status-consultant.pipe';
import { StatusCommentPipe } from './status-comment.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    GenderConsultantPipe,
    StatusConsultantPipe,
    StatusCommentPipe
  ],
  exports: [
    GenderConsultantPipe,
    StatusConsultantPipe,
    StatusCommentPipe
  ]
})
export class PipesModule { }
