import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowsComponent } from './windows.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WindowsService } from './windows.service';

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
    NgbModule
  ],
  providers: [
    WindowsService
  ]
})
export class WindowsModule { }
