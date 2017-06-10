import {Component, Input, OnInit} from '@angular/core';
import {searchItems} from '../../search-items';

@Component({
  selector: 'mm-detail-place',
  templateUrl: './detail-place.component.html',
  styleUrls: ['./detail-place.component.scss']
})
export class DetailPlaceComponent implements OnInit {
  @Input('currentContent')
  public currentContent: string;
  public searchItems: SearchItem[] = searchItems;
  
  public constructor() {
  }

  public ngOnInit(): void {
  }
}
