import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  userData$= new BehaviorSubject<any>('')
  constructor(
    private httpService: HttpService,
    private storageService: StorageService,
    private router: Router
  ) { }

  getUserData(){
    this.storageService.get('userData').then( result => {
      console.log(result);
      this.userData$.next(result);
    })
  }

  login(postData: any): Observable<any> {
    return this.httpService.post('login',postData);
  }

  signup(postData: any): Observable<any> {
    return this.httpService.post('signup',postData);
  }
  logout() {
    this.userData$.next('');
    this.storageService.clear();
  }
}
