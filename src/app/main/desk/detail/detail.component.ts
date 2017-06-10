import {Component, Input} from '@angular/core';

@Component({
  selector: 'mm-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  @Input('params')
  public params: AppRouteParams;
}
