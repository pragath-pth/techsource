import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AndroidComponent } from './android.component';
import { RouterModule, Routes } from '@angular/router';
import { AndroidService } from './android.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

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
    NgbModule,
    TableModule,
    ButtonModule,
    NgxSpinnerModule,
    DialogModule,
    DropdownModule,
    FormsModule
  ],
  providers: [
    AndroidService
  ]
})
export class AndroidModule { }
