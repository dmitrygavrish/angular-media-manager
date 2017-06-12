import {Component, Input} from '@angular/core';
import {searchItems} from '../../search-items';
import {favoriteItems} from '../../favorite-items';
import {ModalService} from '../../../../common/components/modal/modal.service';
import {FavoriteCreateComponent} from '../../favorite-create/favorite-create.component';

@Component({
  selector: 'mm-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input('params')
  public params: AppRouteParams;
  public searchItems: SearchItem[] = searchItems;
  public favoriteItems: FavoriteItem[] = favoriteItems;
  public selectedCategories: string[];
  public selectedType: string;
  
  public constructor(private _modalService: ModalService) {
  }
  
  public onCategorySelectionChange(value: string[]): void {
    this.selectedCategories = value;
  }
  
  public onTypeSelectionChange(value: string): void {
    this.selectedType = value;
  }
  
  public onAddFavoritePress(): void {
    this._modalService.open({
      component: FavoriteCreateComponent
    });
  }
}
