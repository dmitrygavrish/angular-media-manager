import {
  Component,
  ViewChild
} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MdSnackBar} from '@angular/material';
import {AuthService} from 'app/common/services/auth.service';
import {ModalService} from '../../common/components/modal/modal.service';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public isLoginProceeding: boolean = false;
  @ViewChild('loginForm') private _loginForm: NgForm;
  
  public constructor(private _authService: AuthService,
                     private _modalService: ModalService,
                     private _snackBar: MdSnackBar) {
  }
  
  public onSubmit(loginData: AuthLoginData): void {
    this.isLoginProceeding = true;
    
    this._authService.validateLogin(loginData).subscribe((authState: AuthState) => {
      if (!authState.isLoggedIn) {
        this._showMessage('Incorrect login and/or password');
      }
      
      this._loginForm.reset();
      this.isLoginProceeding = false;
    });
  }
  
  public onRegisterBtnPress(): boolean {
    this._modalService.open({
      component: RegisterComponent
    });
    return false;
  }
  
  private _showMessage(text: string): void {
    const duration: number = 3000;
    
    this._snackBar.open(text, '', {duration});
  }
}
