import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgClickOutsideDirective } from 'ng-click-outside2';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/homepage/homepage.module').then((m) => m.HomepageModule),
      },
      {
        path: 'windows',
        loadChildren: () =>
          import('../../pages/windows/windows.module').then((m) => m.WindowsModule),
      },
      {
        path: 'android',
        loadChildren: () =>
          import('../../pages/android/android.module').then((m) => m.AndroidModule),
      },
      {
        path: 'links',
        loadChildren: () =>
          import('../../pages/links/links.module').then((m) => m.LinksModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('../../pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InlineSVGModule.forRoot(),
    NgClickOutsideDirective,
  ],
  exports: [RouterModule]
})
export class LayoutModule { }
