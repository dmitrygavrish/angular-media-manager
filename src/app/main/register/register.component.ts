import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegService} from '../../common/services/reg.service';
import {MdSnackBar} from '@angular/material';

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
                     private _snackBar: MdSnackBar) {
  }
  
  public ngOnInit(): void {
    this.formModel = this._fb.group({
      nameGroup: this._fb.group({
        firstName: ['', [Validators.required]],
        secondName: ['', [Validators.required]]
      }),
      loginGroup: this._fb.group({
        login: ['', [Validators.required, Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]]
      }),
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(8)]],
        passwordConfirm: ['', [Validators.required, Validators.minLength(8)]]
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
      }
      
      this._showMessage(msg);
      this.isRegisterProceeding = false;
    });
  }
  
  private _showMessage(text: string): void {
    const duration: number = 3000;
    
    this._snackBar.open(text, '', {duration});
  }
}
