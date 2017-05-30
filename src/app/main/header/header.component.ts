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
  
  public constructor(private router: Router,
                     private authService: AuthService) {
    this.authService.authState$.subscribe((authState: AuthState) => {
      this.logoutBtnVisible = authState.isLoggedIn;
    });
  }
  
  public ngOnInit(): void {
    this.logoutBtnVisible = this.authService.isLoggedIn;
  }
  
  public onMainLogoPress(): void {
    this.router.navigate(['']);
  }
  
  public onLogoutBtnPress(): void {
    this.authService.updateAuth({isLoggedIn: false});
  }
}
