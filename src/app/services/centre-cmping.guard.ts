import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CentreCmpingGuard implements CanActivate {
  constructor(private token : TokenStorageService , private router:Router) {}

  canActivate(): boolean {
    const role = this.token.getRole();
    if (role === 'CENTRECAMPING') {
      return true;
    } else {
      this.router.navigate (['/erreur']);
      console.log(" leeeeeeeeeee centre Camping");
      return false;
    }
  }
}
