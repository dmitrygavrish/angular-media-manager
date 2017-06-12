import {Injectable} from '@angular/core';
import {LocalService} from './local.service';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {AuthService} from './auth.service';

@Injectable()
export class FavoritesService {
  private _favoritesMetadata$$: Subject<FavoritesMetadata[]> = new Subject();
  private _favoritesData$$: Subject<SearchResult[]> = new Subject();
  
  public constructor(private _mainService: LocalService,
                     private _authService: AuthService) {
  }
  
  public addFavoritesItem(favData: FavoritesMetadata): void {
    this._mainService.uploadFavoritesMetadata(this._authService.userLogin, favData)
      .subscribe((data: FavoritesMetadata[]) => {
        this._favoritesMetadata$$.next(data);
      });
  }
  
  // TODO remove manual initialising
  public init(): void {
    this._mainService.uploadFavoritesMetadata(this._authService.userLogin)
      .subscribe((data: FavoritesMetadata[]) => {
        this._favoritesMetadata$$.next(data);
      });
  }
  
  public addMediaItemToFavorites(favData: FavoritesMetadata, mediaData: SearchResult): void {
    this._mainService.uploadFavoritesContent(this._authService.userLogin, favData, mediaData)
      .subscribe((data: FavoritesMetadata[]) => {
        this._favoritesMetadata$$.next(data);
      });
  }
  
  public loadFavoritesContent(favoritesId: number): void {
    this._mainService.loadFavoritesContent(this._authService.userLogin, favoritesId)
      .subscribe((data: SearchResult[]) => {
        this._favoritesData$$.next(data);
      });
  }
  
  public get favoritesMetadata$(): Observable<FavoritesMetadata[]> {
    return this._favoritesMetadata$$.asObservable();
  }
  
  public get favoritesData$(): Observable<SearchResult[]> {
    return this._favoritesData$$.asObservable();
  }
}
