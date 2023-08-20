import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  showInfoToastr(msg: any) {
    this.toastr.info(msg, 'Info', {
        disableTimeOut: false,
        // progressBar: true,
        tapToDismiss: false,
        // progressAnimation: 'decreasing' ,
        positionClass: 'toast-top-right',
        timeOut: 5000,
        closeButton: true
    });
  }

  showProgressInfoToastr(msg: any, time: any) {
    this.toastr.info(msg, 'Info', {
        disableTimeOut: 'extendedTimeOut',
        progressBar: true,
        tapToDismiss: false,
        progressAnimation: 'increasing',
        positionClass: 'toast-top-right',
        timeOut: time,
        closeButton: true
    });
  }

  showErrorToastr(msg: any) {
    this.toastr.error(msg, 'Error', {
        disableTimeOut: false,
        // progressBar: true,
        tapToDismiss: false,
        // progressAnimation: 'decreasing' ,
        positionClass: 'toast-top-right',
        timeOut: 5000,
        closeButton: true
    });
  }

  showWarningToastr(msg: any) {
    this.toastr.warning(msg, 'Warning', {
        disableTimeOut: false,
        // progressBar: true,
        tapToDismiss: false,
        // progressAnimation: 'decreasing' ,
        positionClass: 'toast-top-right',
        timeOut: 5000,
        closeButton: true
    });
  }

  showSuccessToastr(msg: any) {
    this.toastr.success(msg, 'Success', {
        disableTimeOut: false,
        // progressBar: true,
        tapToDismiss: false,
        // progressAnimation: 'decreasing' ,
        positionClass: 'toast-top-right',
        timeOut: 1500,
        closeButton: true
    });
  }

  clearToastr() {
      this.toastr.clear();
  }
}
