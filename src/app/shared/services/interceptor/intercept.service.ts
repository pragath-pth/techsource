import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {
  // intercept request and add token
  service_count: any = 0;
  constructor(private spinner: NgxSpinnerService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable <HttpEvent<any>>{
    const endPoint = request.url.split('/')[request.url.split('/').length - 1]
    this.service_count++;
    this.getUrl().includes(endPoint) ? '': this.spinner.show();
    request = request.clone({
      // withCredentials: true
    })
    return next.handle(request).pipe(
      finalize(() => {
        this.service_count--;

        if(this. service_count === 0){
          this.spinner.hide();
        }
      })
    )
  };
  getUrl(){
    return['']
  }
}
