import {Routes} from '@angular/router';
import {LoginComponent} from '../main/login/login.component';
import {RegisterComponent} from '../main/register/register.component';
import {AboutComponent} from '../main/about/about.component';
import {DeskComponent} from '../main/desk/desk.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    data: {
      testState: 'isLoggedIn',
      conditionValue: true,
      redirectTo: '/app'
    }
  },
  {
    path: 'app',
    component: DeskComponent,
    canActivate: [AuthGuard],
    data: {
      testState: 'isLoggedIn',
      conditionValue: false,
      redirectTo: '/login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
