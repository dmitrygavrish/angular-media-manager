import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './common/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public constructor(private router: Router,
                     private authService: AuthService) {
    this.authService.authState$.subscribe((authState: AuthState) => {
      const navigateTo: string = authState.isLoggedIn ? 'app' : 'login';
      
      this.router.navigate([navigateTo]);
    });
  }
}
