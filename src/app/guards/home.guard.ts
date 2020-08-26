import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router ,RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { resolve } from 'dns'
import { StorageService } from '../services/storage.service'


@Injectable({
  providedIn: 'root'
})
export class HomeGuard implements CanActivate {
   
  constructor(private storageService: StorageService, private router: Router){}

   canActivate(): Promise<boolean>{
         return new Promise(resolve=>{
                this.storageService.get('userData').then( result => {
                  if(result){ 
                    if (result.company_id === null && result.name === null){
                       this.router.navigate(['complete']);
                    }
                    resolve(true);
                    } else {
                      this.router.navigate(['']);
                      resolve(false); 
                    }
                }).catch(err => {
                  resolve(false)
            })
        })
   }
  
}
