import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from 'app/common/services/auth.service';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm') private loginForm: NgForm;
  @ViewChild('formContainer') private formContainer: ElementRef;
  
  public constructor(private authService: AuthService) {
  }
  
  public onSubmit(): void {
    if (this.loginForm.valid) {
      this.loginForm.reset();
      this.authService.updateAuth({isLoggedIn: true});
    }
  }
  
  public onRegisterBtnPress(): boolean {
    // TODO add modal dialog
    return false;
  }
}
