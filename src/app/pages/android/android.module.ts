import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndroidComponent } from './android.component';
import { RouterModule, Routes } from '@angular/router';
import { AndroidService } from './android.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: '',
    component: AndroidComponent,
  },
]

@NgModule({
  declarations: [
    AndroidComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule
  ],
  providers: [
    AndroidService
  ]
})
export class AndroidModule { }
