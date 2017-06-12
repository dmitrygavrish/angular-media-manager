import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mm-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit{
  @Input('params')
  public params: AppRouteParams;
  public activeTabIndex: number = 0;
  
  public ngOnInit(): void {
    this.activeTabIndex = typeof this.params.type === 'undefined' || this.params.type === 'search' ? 0 : 1;
  }
}
