import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from './layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  isSidebarCollapsed: any = true;
  subscription!: Subscription;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.toggleSideBar();
  }

  toggleSideBar() {
    this.subscription = this.layoutService.sideBarObservable$.subscribe((res) => {
      // console.log(res);
      this.isSidebarCollapsed = res;
    });
  }

  onClickedOutside(e: Event) {
    // console.log('Clicked outside:', e);
    // console.log(this.isSidebarCollapsed);
    if(this.isSidebarCollapsed === false){
      this.isSidebarCollapsed = true;
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
