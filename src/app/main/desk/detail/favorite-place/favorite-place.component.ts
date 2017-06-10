import {Component, Input, OnInit} from '@angular/core';
import {favoriteItems} from '../../favorite-items';

@Component({
  selector: 'mm-favorite-place',
  templateUrl: './favorite-place.component.html',
  styleUrls: ['./favorite-place.component.scss']
})
export class FavoritePlaceComponent implements OnInit {
  @Input('currentContent')
  public currentContent: string;
  public favoriteItems: FavoriteItem[] = favoriteItems;
  
  public constructor() {
  }
  
  public ngOnInit(): void {
  }
}
