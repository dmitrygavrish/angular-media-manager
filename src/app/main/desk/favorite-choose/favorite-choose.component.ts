import {Component, OnInit} from '@angular/core';
import {FavoritesService} from '../../../common/services/favorites.service';
import {ModalService} from '../../../common/components/modal/modal.service';

@Component({
  selector: 'mm-favorite-choose',
  templateUrl: './favorite-choose.component.html',
  styleUrls: ['./favorite-choose.component.scss']
})
export class FavoriteChooseComponent implements OnInit {
  public favoritesItems: FavoritesMetadata[];
  public mediaData: SearchResult;
  
  public constructor(private _favService: FavoritesService,
                     private _modalService: ModalService) {
  }
  
  public ngOnInit(): void {
    this._favService.favoritesMetadata$.subscribe((data: FavoritesMetadata[]) => {
      this.favoritesItems = data;
    });
    
    this._favService.init();
  }
  
  public onListItemPress(item: FavoritesMetadata): void {
    this._favService.addMediaItemToFavorites(item, this.mediaData);
    this._modalService.close();
  }
}
