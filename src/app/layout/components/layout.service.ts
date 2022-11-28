import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private sideBarSource = new Subject<any>();
  sideBarObservable$ = this.sideBarSource.asObservable();

  constructor() { }
  
  public sideBarToggle(data: any){
    this.sideBarSource.next(data);
  }
}
