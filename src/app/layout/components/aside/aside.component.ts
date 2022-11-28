import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  isSidebarCollapsed: any;
  subscription!: Subscription;

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {

  }

  toggleSideBar(){
    this.layoutService.sideBarToggle(true);
  }

}
