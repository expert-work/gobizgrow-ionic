import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }


  signupComplete(postData: any): Observable<any> {
    return this.httpService.post('signup-complete',postData);
  }

 // get Industries industries
  industries(postData: any): Observable<any> {
    return this.httpService.post('industries',postData);
  }
  // get All Estimates
  estimates(postData: any): Observable<any> {
    return this.httpService.post('estimates/all',postData);
  }

  

  

}
