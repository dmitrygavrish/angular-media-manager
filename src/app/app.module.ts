import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from './material/material.module';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
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
    ModalComponent
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
    ModalService
  ],
  entryComponents: [RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
