import { Component, OnInit } from '@angular/core';
import { WindowsService } from './windows.service';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
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

  constructor(private windowsService: WindowsService) { }

  ngOnInit(): void {
    this.loadAppList();
  }

  loadAppList(){
    this.appList = [];
    let obj: any = {
      platform: "Windows"
    };
    console.log(this.tabId);
    if(this.tabId === 1){
      obj['choice'] = 'Necessary'
    } else if(this.tabId === 2){
      obj['choice'] = 'Optional'
    }
    this.windowsService.getAppList(obj).subscribe({
      next: res => {
        console.log(res);
        this.appList = res.appData;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  onNavChange(ev:any){
    // console.log(ev);
    this.tabId = ev.nextId;
    this.loadAppList();
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
