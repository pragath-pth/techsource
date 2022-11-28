import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '404', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },

];

@NgModule({
  declarations: [
    Error404Component,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ErrorsModule { }
