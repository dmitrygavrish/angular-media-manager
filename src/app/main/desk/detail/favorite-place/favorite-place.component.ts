import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FavoritesService} from '../../../../common/services/favorites.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'mm-favorite-place',
  templateUrl: './favorite-place.component.html',
  styleUrls: ['./favorite-place.component.scss']
})
export class FavoritePlaceComponent implements OnInit, OnChanges {
  @Input('currentContent')
  public currentId: number;
  public favoriteMediaItems: Observable<SearchResult[]>;
  
  public constructor(private _favService: FavoritesService) {
  }
  
  public ngOnInit(): void {
    this.favoriteMediaItems = this._favService.favoritesData$;
  }
  
  public ngOnChanges(): void {
    this._favService.loadFavoritesContent(this.currentId);
  }
}
