import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BaseRequestOptions, HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {routes} from './common/routes';

import {AppComponent} from './app.component';
import {HeaderComponent} from './main/header/header.component';
import {FooterComponent} from './main/footer/footer.component';
import {LoginComponent} from './main/login/login.component';
import {RegisterComponent} from './main/register/register.component';
import {DeskComponent} from './main/desk/desk.component';
import {AboutComponent} from './main/about/about.component';
import {AuthService} from './common/services/auth.service';
import {AuthGuard} from './common/guards/auth.guard';
import {MasterComponent} from './main/desk/master/master.component';
import {DetailComponent} from './main/desk/detail/detail.component';
import {SearchComponent} from './main/desk/master/search/search.component';
import {FavoriteComponent} from './main/desk/master/favorite/favorite.component';
import {FavoriteListComponent} from './main/desk/master/favorite/favorite-list/favorite-list.component';
import {LocalService} from './common/services/local.service';
import {HttpService} from './common/services/http.service';
import {SearchService} from './common/services/search.service';
import {FavoritesService} from './common/services/favorites.service';
import {BASE_URL, BASE_URL_TOKEN} from '../config';
import {ModalComponent} from './common/components/modal/modal.component';
import {ModalService} from './common/components/modal/modal.service';
import {RegService} from './common/services/reg.service';
import {CloseButtonComponent} from './common/components/modal/close-button/close-button.component';
import {DetailPlaceComponent} from './main/desk/detail/detail-place/detail-place.component';
import {FavoritePlaceComponent} from './main/desk/detail/favorite-place/favorite-place.component';
import { CardComponent } from './main/desk/detail/card/card.component';
import { FavoriteCreateComponent } from './main/desk/favorite-create/favorite-create.component';
import { FavoriteEditComponent } from './main/desk/favorite-edit/favorite-edit.component';
import { ConfirmActionComponent } from './common/components/confirm-action/confirm-action.component';
import { FavoriteChooseComponent } from './main/desk/favorite-choose/favorite-choose.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    DeskComponent,
    AboutComponent,
    MasterComponent,
    DetailComponent,
    SearchComponent,
    FavoriteComponent,
    FavoriteListComponent,
    ModalComponent,
    CloseButtonComponent,
    DetailPlaceComponent,
    FavoritePlaceComponent,
    CardComponent,
    FavoriteCreateComponent,
    FavoriteEditComponent,
    ConfirmActionComponent,
    FavoriteChooseComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL
    },
    AuthService,
    AuthGuard,
    HttpService,
    LocalService,
    SearchService,
    FavoritesService,
    ModalService,
    RegService,
    BaseRequestOptions
  ],
  entryComponents: [
    RegisterComponent,
    FavoriteCreateComponent,
    FavoriteEditComponent,
    FavoriteChooseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
