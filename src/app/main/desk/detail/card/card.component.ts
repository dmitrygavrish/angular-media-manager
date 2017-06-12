import {Component, Input} from '@angular/core';

@Component({
  selector: 'mm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('cardData')
  public data: SearchResult;
}
