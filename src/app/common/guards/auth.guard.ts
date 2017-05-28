import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  public constructor(private authService: AuthService,
                     private router: Router) {
  }
  
  public canActivate(routeSnapshot: ActivatedRouteSnapshot,
                     routerState: RouterStateSnapshot): boolean {
    const testState: string = routeSnapshot.data.testState;
    const conditionValue: boolean = routeSnapshot.data.conditionValue;
    const redirectTo: string = routeSnapshot.data.redirectTo;
    
    const serviceState: boolean = typeof this.authService[testState] === 'function'
      ? this.authService[testState]() : this.authService[testState];
    
    // if state meets the condition, do redirection
    if (serviceState === conditionValue) {
      this.router.navigate([redirectTo]);
    }
    
    // if state doesn't meet the condition, allow user to navigate to the route
    return serviceState !== conditionValue;
  }
}
