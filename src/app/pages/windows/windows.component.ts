import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit {

  active: any;
  necessary:any = [
    {appName: 'Google Chrome', appVersion: '107.0.5304.121', appDescription: 'Browser', appLink: 'https://www.google.com/intl/en/chrome/?standalone=1'},
    {appName: 'Mozilla Firefox', appVersion: '107.0.0', appDescription: 'Browser', appLink: 'https://download.mozilla.org/?product=firefox-latest-ssl&os=win64&lang=en-US'},
    {appName: 'VLC Media Player', appVersion: '3.0.17.4', appDescription: 'Player', appLink: 'https://get.videolan.org/vlc/3.0.17.4/win64/vlc-3.0.17.4-win64.exe'},
    {appName: 'KM Player', appVersion: '4.2.2.71', appDescription: 'Player', appLink: 'https://dn.kmplayer.com/Dn/kmp32/2211/KMPlayer_4.2.2.71.exe'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onNavChange(ev:any){
    console.log(ev);
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

}
