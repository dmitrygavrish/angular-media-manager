import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../common/services/auth.service';

@Component({
  selector: 'mm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public constructor(private router: Router,
                     private service: AuthService) {
    this.service.appState$
      .subscribe((v: any) => {
        debugger;
      });
  }
  
  public ngOnInit(): void {
  }
  
  public onMainLogoClick(): void {
    this.service.test();
    // this.router.navigate
  }
}
