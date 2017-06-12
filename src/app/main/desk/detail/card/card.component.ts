import {Component, Input} from '@angular/core';
import {ModalService} from '../../../../common/components/modal/modal.service';
import {FavoriteChooseComponent} from '../../favorite-choose/favorite-choose.component';

@Component({
  selector: 'mm-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('cardData')
  public data: SearchResult;
  
  public constructor(private _modalService: ModalService) {
  }
  
  public onAddToFavoritesBtnPress(mediaData: SearchResult): void {
    this._modalService.open({
      component: FavoriteChooseComponent,
      context: {mediaData}
    });
  }
}
