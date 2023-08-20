import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WindowsComponent } from './windows.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WindowsService } from './windows.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { ClipboardModule } from 'ngx-clipboard';

const routes: Routes = [
  {
    path: '',
    component: WindowsComponent,
  },
]

@NgModule({
  declarations: [
    WindowsComponent
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
    FormsModule,
    ClipboardModule
  ],
  providers: [
    WindowsService,
    DatePipe
  ]
})
export class WindowsModule { }
