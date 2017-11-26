import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListConsultantComponent } from './components/list-consultant/list-consultant.component';
import { ConsultantService } from './services/consultant.service';
import { MaterialModule } from '../material/material.module';
import { ViewConsultantComponent } from './components/list-consultant/view-consultant/view-consultant.component';
import { DetailConsultantComponent } from './components/detail-consultant/detail-consultant.component';
import { RouterModule } from '@angular/router/src/router_module';
import { ConsultantRoutingModule } from './consultant.routing.module';
import { CommentComponent } from './components/detail-consultant/comment/comment.component';
import { AddCommentComponent } from './components/detail-consultant/add-comment/add-comment.component';
import { CommentService } from './services/comment.service';
import { FormsModule } from '@angular/forms';
import { StatusConsultantPipe } from '../pipes/status-consultant.pipe';
import { GenderConsultantPipe } from '../pipes/gender-consultant.pipe';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    PipesModule,
    ConsultantRoutingModule
  ],
  declarations: [
    ListConsultantComponent,
    ViewConsultantComponent,
    DetailConsultantComponent,
    CommentComponent,
    AddCommentComponent
  ],
  providers: [
    ConsultantService,
    CommentService
  ],
  entryComponents: [
    AddCommentComponent
  ]
})
export class ConsultantModule { }
