import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { WindowsService } from './windows.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastService } from 'src/app/shared/services/toast/toast.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class WindowsComponent implements OnInit {

  activeId: any;
  tabId: any = 1;
  necessary:any = [
    {appName: 'Google Chrome', appVersion: '107.0.5304.121', appDescription: 'Browser', appLink: 'https://www.google.com/intl/en/chrome/?standalone=1'},
    {appName: 'Mozilla Firefox', appVersion: '107.0.0', appDescription: 'Browser', appLink: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US'},
    {appName: 'VLC Media Player', appVersion: '3.0.17.4', appDescription: 'Player', appLink: 'https://get.videolan.org/vlc/3.0.17.4/win64/vlc-3.0.17.4-win64.exe'},
    {appName: 'KM Player', appVersion: '4.2.2.71', appDescription: 'Player', appLink: 'https://dn.kmplayer.com/Dn/kmp32/2211/KMPlayer_4.2.2.71.exe'}
  ]
  appList:any = [];
  appListLoader:boolean = true;
  visible:boolean = false;
  appDetailedData: any = [];
  // choices: any = [
  //   {name: 'Necessary', value: 'necessary'},
  //   {name: 'Optional', value: 'optional'},
  // ]
  choices: any = [
    'Necessary',
    'Optional'
  ]

  constructor(private windowsService: WindowsService, private spinner: NgxSpinnerService, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadAppList();
  }

  loadAppList(){
    this.spinner.show('appSpinner');
    this.appList = [];
    this.appListLoader = true;
    let obj: any = {
      platform: "Windows"
    };
    // console.log(this.tabId);
    if(this.tabId === 1){
      obj['choice'] = 'Necessary'
    } else if(this.tabId === 2){
      obj['choice'] = 'Optional'
    }
    this.windowsService.getSelectedAppData(obj).subscribe({
      next: res => {
        // console.log(res);
        setTimeout(() => {
          this.appList = res.filter((app: any) => app.hidden === false);
          this.appListLoader = false;
          this.spinner.hide('appSpinner');
        }, 300);
      },
      error: error => {
        console.log(error);
        this.spinner.hide('appSpinner');
        this.appListLoader = false;
      }
    }
    );
  }

  onNavChange(ev:any){
    // console.log(ev);
    this.tabId = ev.nextId;
    this.loadAppList();
  }

  goToLink(ev: any, url: string){
    ev.stopPropagation();
    window.open(url, "_blank");
  }

  copyLink(ev: any){
    ev.stopPropagation();
    this.toastService.showSuccessToastr('Link Copied !');
  }

  showAppDetails(appData: any){
    this.visible = true;
    this.appDetailedData = [];
    this.appDetailedData = appData;
  }

}
