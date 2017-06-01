import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'mm-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent {
  public currentContent: 'search' | 'favorite' = 'search';
  
  public constructor() {
  }
  
  public onSearchTabPress(): void {
    if (this.currentContent !== 'search') {
      this.currentContent = 'search';
    }
  }
  
  public onFavTabPress(): void {
    if (this.currentContent !== 'favorite') {
      this.currentContent = 'favorite';
    }
  }
}
