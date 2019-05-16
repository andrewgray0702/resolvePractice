import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any> {
  constructor(private userService: UserService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let userId = route.params.id;
    return this.userService.getUserById(userId)
  }

  
}
