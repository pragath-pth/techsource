import { Component, OnInit } from '@angular/core';
import { AndroidService } from './android.service';

@Component({
  selector: 'app-android',
  templateUrl: './android.component.html',
  styleUrls: ['./android.component.scss']
})
export class AndroidComponent implements OnInit {

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

  constructor(private androidService: AndroidService) { }

  ngOnInit(): void {
    this.loadAppList();
  }

  loadAppList(){
    this.appList = [];
    this.appListLoader = true;
    let obj: any = {
      platform: "Android"
    };
    console.log(this.tabId);
    if(this.tabId === 1){
      obj['choice'] = 'Necessary'
    } else if(this.tabId === 2){
      obj['choice'] = 'Optional'
    }
    this.androidService.getSelectedAppData(obj).subscribe({
      next: res => {
        console.log(res);
        this.appList = res;
        this.appListLoader = false;
      },
      error: error => {
        console.log(error);
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

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
