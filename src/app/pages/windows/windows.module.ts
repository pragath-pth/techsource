import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { WindowsComponent } from './windows.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WindowsService } from './windows.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

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
    ButtonModule
  ],
  providers: [
    WindowsService,
    DatePipe
  ]
})
export class WindowsModule { }
