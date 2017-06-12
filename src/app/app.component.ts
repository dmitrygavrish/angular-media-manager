import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(private _router: Router,
                     private _authService: AuthService) {
    this._authService.authState$.subscribe((authState: AuthState) => {
      const navigateTo: string = authState.isLoggedIn ? 'app' : 'login';
      
      this._router.navigate([navigateTo]);
    });
  }
}
