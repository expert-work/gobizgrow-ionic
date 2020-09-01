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



  sortArray(myArray:any) {
    var result = myArray.reduce((unique, o) => {
      if(!unique.some(obj => obj.id === o.id)) {
        unique.push(o);
      }
      return unique;
    },[]);
   
    return result.sort(function(a, b) {
        return b.id-a.id ;
    });
}

isDefined(x:any) {
  if (x == null) {
      return false;
  }
  if (x === null) {
      return false;
  }
  if (typeof x === 'undefined') {
      return false;
  }
  return true;
}

 makeid(length:Number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}



signupComplete(postData: any): Observable<any> {
  return this.httpService.post('signup-complete',postData);
}


 //Customers

dashboard(postData: any): Observable<any> {
  return this.httpService.post('dashboard',postData);
}

customers(postData: any): Observable<any> {
  return this.httpService.post('customers/all',postData);
}

invoices(postData: any): Observable<any> {
  return this.httpService.post('invoices/all',postData);
}

items(postData: any): Observable<any> {
  return this.httpService.post('items/all',postData);
}

payments(postData: any): Observable<any> {
  return this.httpService.post('payments/all',postData);
}

expenses(postData: any): Observable<any> {
  return this.httpService.post('expenses/all',postData);
}



deleteCustomers(postData: any): Observable<any> {
  return this.httpService.post('customers/delete',postData);
}

customerAdd(postData: any): Observable<any> {
  return this.httpService.post('customers/add',postData);
}
customerEdit(auth_token:any,postData: any): Observable<any> {
  return this.httpService.post('customers/edit/'+auth_token,postData);
}

 

 //Invoices
 //Items
 //Payments
 //Expenses
 //Items Categories
 //Expenses Categories
 //Taxes
 //Payment Merhods




 // get Industries industries
  industries(postData: any): Observable<any> {
    return this.httpService.post('industries',postData);
  }
  // get All Estimates
  estimates(postData: any): Observable<any> {
    return this.httpService.post('estimates/all',postData);
  }

  

  

}
