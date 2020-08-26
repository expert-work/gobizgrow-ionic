import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve } from 'dns'
import { StorageService } from '../services/storage.service'


@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router){}

  canActivate(): Promise<boolean>{
        return new Promise(resolve=>{
               this.storageService.get('userData').then( result => {
                 if(result){ 
                  this.router.navigate(['app/dashboard']);
                   resolve(false);
                   } else {
                     resolve(true); 
                   }
               }).catch(err => {
                 resolve(false)
           })
       })
  }
  
}
