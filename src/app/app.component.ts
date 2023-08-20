import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tech-source';

  constructor(private meta: Meta){ }

  ngOnInit() {
    this.meta.updateTag({ name: 'Tech Source', content: 'One Place For Tech Related Resources & Links' });
  }
}
