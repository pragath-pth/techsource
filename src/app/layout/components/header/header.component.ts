import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSidebarCollapsed: any = false;
  subscription!: Subscription;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {

  }

  toggleSidebar(){
    this.layoutService.sideBarToggle(this.isSidebarCollapsed);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
