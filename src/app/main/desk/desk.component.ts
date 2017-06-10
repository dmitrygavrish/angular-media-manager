import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mm-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.scss']
})
export class DeskComponent {
  public detailParams: AppRouteParams = {type: 'search', key: 'all'};
  
  public constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: AppRouteParams) => {
      if (params) {
        this.detailParams = params;
      }
    });
  }
}
