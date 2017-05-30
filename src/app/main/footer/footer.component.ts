import {Component} from '@angular/core';

@Component({
  selector: 'mm-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public footerSign: string =
    'By signing up and/or using this site you agree to the privacy policy and terms of service';
}
