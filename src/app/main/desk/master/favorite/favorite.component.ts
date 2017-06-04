import {Component} from '@angular/core';
import {searchItems} from '../../search-items';
import {favoriteItems} from '../../favorite-items';

@Component({
  selector: 'mm-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  public searchItems: SearchItem[] = searchItems;
  public favoriteItems: FavoriteItem[] = favoriteItems;
  public selectedCategories: string[];
  public selectedType: string;
  
  public onCategorySelectionChange(value: string[]): void {
    this.selectedCategories = value;
  }
  
  public onTypeSelectionChange(value: string): void {
    this.selectedType = value;
  }
  
  public onAddFavoritePress(): void {
  
  }
}
