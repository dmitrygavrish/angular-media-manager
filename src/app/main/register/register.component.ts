import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegService} from '../../common/services/reg.service';
import {MdSnackBar} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import {ModalService} from '../../common/components/modal/modal.service';

@Component({
  selector: 'mm-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public formModel: FormGroup;
  public isRegisterProceeding: boolean = false;
  
  public constructor(private _fb: FormBuilder,
                     private _regService: RegService,
                     private _modalService: ModalService,
                     private _snackBar: MdSnackBar) {
  }
  
  public ngOnInit(): void {
    this.formModel = this._fb.group({
      nameGroup: this._fb.group({
        firstName: ['', [Validators.required]],
        secondName: ['', [Validators.required]]
      }),
      loginGroup: this._fb.group({
        login: ['', [Validators.required, Validators.minLength(4)], this._loginValidator.bind(this)],
        email: ['', [Validators.required, Validators.email], this._emailValidator.bind(this)]
      }),
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
      }, {
        validator: this._passwordMatchValidator.bind(this)
      })
    });
    
    this.formModel.valueChanges.subscribe((value: AuthRegData) => {
      const isEmpty: boolean = Object.keys(value).every((groupKey: string) => {
        return Object.keys(value[groupKey]).every((controlKey: string) => {
          return !value[groupKey][controlKey];
        });
      });
      
      if (isEmpty) {
        this.formModel.markAsPristine();
      }
    });
  }
  
  public onSubmit(regData: AuthRegData): void {
    this.isRegisterProceeding = true;
    
    this._regService.validateRegistration(regData).subscribe((isConfirmed: boolean) => {
      const msg: string = isConfirmed ? 'Account successfully registered!' : 'An error has occurred';
      
      if (isConfirmed) {
        this.formModel.reset();
        this._modalService.close();
      }
      
      this._showMessage(msg);
      this.isRegisterProceeding = false;
    });
  }
  
  private _showMessage(text: string): void {
    const duration: number = 3000;
    
    this._snackBar.open(text, '', {duration});
  }
  
  private _passwordMatchValidator({value}: FormGroup): { [key: string]: boolean } {
    const isValid: boolean = value.password === value.passwordConfirm;
    
    return isValid ? null : {passwordMismatch: true};
  }
  
  private _regAsyncValidator(
    regServiceMethod: string,
    errorName: string
  ): (control: FormControl) => Observable<{ [key: string]: boolean }> {
    return (control: FormControl) =>
      this._regService[regServiceMethod](control.value).map((isConfirmed: boolean) =>
         isConfirmed ? null : {[errorName]: true}
      );
  }
  
  private _loginValidator(control: FormControl): Observable<{ [key: string]: boolean }> {
    // force submit/reset buttons disabling due to async validators behaviour:
    // it makes form valid until it gets response
    this.isRegisterProceeding = true;
    
    return this._regAsyncValidator('validateLogin', 'loginExists')(control)
      .do(() => {
        this.isRegisterProceeding = false;
      });
  }
  
  private _emailValidator(control: FormControl): Observable<{ [key: string]: boolean }> {
    // same as in _loginValidator here
    this.isRegisterProceeding = true;
    
    return this._regAsyncValidator('validateEmail', 'emailExists')(control)
      .do(() => {
        this.isRegisterProceeding = false;
      });
  }
}
