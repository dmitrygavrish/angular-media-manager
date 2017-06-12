import {Component, OnInit} from '@angular/core';
import {FavoritesService} from '../../../../../common/services/favorites.service';
import {searchItems} from '../../../search-items';
import {favoriteItems} from '../../../favorite-items';
import {Router} from '@angular/router';

@Component({
  selector: 'mm-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent implements OnInit {
  public itemsData: { data: FavoritesMetadata, iconCategory: string, iconType: string }[];
  public searchItems: SearchItem[] = searchItems;
  public favoriteItems: FavoriteItem[] = favoriteItems;
  
  
  public constructor(private _favService: FavoritesService,
                     private _router: Router) {
  }
  
  public ngOnInit(): void {
    this._favService.favoritesMetadata$.subscribe((data: FavoritesMetadata[]) => {
      this.itemsData = data.map((d: FavoritesMetadata) => {
        return {
          data: d,
          iconCategory: this.searchItems.find((item: SearchItem) => item.key === d.category).icon,
          iconType: this.favoriteItems.find((item: FavoriteItem) => item.key === d.type).icon,
        };
      });
    });
    // TODO instead of manually initiating data implement Observable.scan
    this._favService.init();
  }
  
  public onEditBtnPress(data: FavoritesMetadata): void {
    // TODO open modal window, pass context
  }
  
  public onDeleteBtnPress(data: FavoritesMetadata): void {
    // TODO open modal window, pass context
  }
  
  public onListItemPress(data: FavoritesMetadata): void {
    // TODO detect whether same favorite item was pressed
    this._router.navigate(['app', {type: 'favorite', id: data.id}]);
  }
  
}
