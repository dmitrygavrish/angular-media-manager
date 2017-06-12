import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../common/services/auth.service';

@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logoutBtnVisible: boolean = false;
  
  public constructor(private _router: Router,
                     private _authService: AuthService) {
    this._authService.authState$.subscribe((authState: AuthState) => {
      this.logoutBtnVisible = authState.isLoggedIn;
    });
  }
  
  public ngOnInit(): void {
    this.logoutBtnVisible = this._authService.isLoggedIn;
  }
  
  public onMainLogoPress(): void {
    this._router.navigate(['']);
  }
  
  public onLogoutBtnPress(): void {
    this._authService.updateAuth({isLoggedIn: false});
  }
}
