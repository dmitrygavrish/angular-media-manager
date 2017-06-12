import {Inject, Injectable} from '@angular/core';
import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import {HttpService} from './http.service';
import {BASE_URL_TOKEN} from '../../../config';

@Injectable()
export class LocalService {
  private _delayTime: number = 1000;
  
  public constructor(private _http: HttpService,
                     @Inject(BASE_URL_TOKEN) private _baseUrl: string) {
  }

  public processLogin(loginData: AuthLoginData): Observable<AuthState> {
    return this._verifyAuthLoginData(loginData).map((isValid: boolean) => {
      const authState: AuthState = {
        isLoggedIn: isValid
      };

      if (isValid) {
        authState.userLogin = loginData.login;
      }

      return authState;
    });
  }
  
  public processRegistration(regData: AuthRegData): Observable<boolean> {
    return this._verifyAuthRegData(regData);
  }
  
  public confirmUserData(field: 'login' | 'email', value: string): Observable<boolean> {
    if (localStorage.accounts) {
      const accounts: AccountData[] = JSON.parse(localStorage.accounts);
      const isTaken: boolean = accounts.some((account: AccountData) => account[field] === value);
      
      return Observable.of(!isTaken).delay(this._delayTime);
    }
    
    return Observable.of(true).delay(this._delayTime);
  }
  
  public processSearchRequest(query: string, entity: string, attributes: string[]): Observable<SearchResponse> {
    const url: string = `${this._baseUrl}/search`;
    const search: URLSearchParams = new URLSearchParams();
  
    search.set('term', query);
    search.set('media', entity);
    search.set('attribute', attributes.toString());
  
    return this._http.get<SearchResponse>(url, {params: search});
  }
  
  public uploadFavoritesMetadata(login: string, favData?: FavoritesMetadata): Observable<FavoritesMetadata[]> {
    if (!localStorage.favorites) {
      localStorage.favorites = JSON.stringify([]);
    }
  
    let favorites: UserFavorites[];
  
    try {
      favorites = JSON.parse(localStorage.favorites);
    } catch (err) {
      favorites = [];
    }
    
    let userFavorites: UserFavorites = favorites.find((userFav: UserFavorites) => userFav.login === login);
    
    if (favData && userFavorites && userFavorites.favorites) {
      favData.id = userFavorites.favorites.length;
      
      userFavorites.favorites.push(favData);
    } else if (favData) {
      favData.id = 0;
      userFavorites = {
        login,
        favorites: [favData]
      };
      
      favorites.push(userFavorites);
    }
    
    localStorage.favorites = JSON.stringify(favorites);
    
    return Observable.of(userFavorites.favorites);
  }
  
  public uploadFavoritesContent(login: string,
                                favData: FavoritesMetadata,
                                mediaData: SearchResult): Observable<FavoritesMetadata[]> {
    const favorites: UserFavorites[] = JSON.parse(localStorage.favorites);
    const userFavorites: UserFavorites = favorites
      .find((userFav: UserFavorites) => userFav.login === login);
    const favoritesMetadata: FavoritesMetadata = userFavorites.favorites
      .find((fData: FavoritesMetadata) => fData.id === favData.id);
    
    favoritesMetadata.contentIds = favoritesMetadata.contentIds || [];
    
    if (!favoritesMetadata.contentIds.some((id: number) => id === mediaData.trackId)) {
      favoritesMetadata.contentIds.push(mediaData.trackId);
    }
  
    localStorage.favorites = JSON.stringify(favorites);
  
    return Observable.of(userFavorites.favorites);
  }
  
  public loadFavoritesContent(login: string, favoritesId: number | string): Observable<SearchResult[]> {
    const favorites: UserFavorites[] = JSON.parse(localStorage.favorites);
    const userFavorites: UserFavorites = favorites
      .find((userFav: UserFavorites) => userFav.login === login);
    const favoritesMetadata: FavoritesMetadata = userFavorites.favorites
      .find((fData: FavoritesMetadata) => Number(fData.id) === Number(favoritesId));
  
    const url: string = `${this._baseUrl}/lookup`;
    const search: URLSearchParams = new URLSearchParams();
    
    search.set('id', favoritesMetadata.contentIds.toString());
  
    return this._http.get<SearchResponse>(url, {params: search}).map((res: SearchResponse) => res.results);
  }
  
  private _verifyAuthLoginData(loginData: AuthLoginData): Observable<boolean> {
    if (localStorage.accounts) {
      const accounts: AccountData[] = JSON.parse(localStorage.accounts);
      const requestedAccount: AccountData =
        accounts.find((account: AccountData) => account.login === loginData.login);
      
      if (typeof requestedAccount !== 'undefined' || requestedAccount !== null) {
        return Observable.of(requestedAccount.password === loginData.password).delay(this._delayTime);
      }
    }
    
    return Observable.of(false).delay(this._delayTime);
  }
  
  private _verifyAuthRegData(regData: AuthRegData): Observable<boolean> {
    if (!localStorage.accounts) {
      localStorage.accounts = JSON.stringify([]);
    }
    
    let accounts: AccountData[];
  
    try {
      accounts = JSON.parse(localStorage.accounts);
    } catch (err) {
      accounts = [];
    }
    
    accounts.push({
      login: regData.loginGroup.login,
      email: regData.loginGroup.email,
      password: regData.passwordGroup.password,
      personal: {
        firstName: regData.nameGroup.firstName,
        secondName: regData.nameGroup.secondName
      }
    });
    
    localStorage.accounts = JSON.stringify(accounts);
    
    return Observable.of(true).delay(this._delayTime);
  }
}
