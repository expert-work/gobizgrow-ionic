import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { environment } from '../../environments/environment';

export interface ApiImage {
  _id: string;
  name: string;
  createdAt: Date;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(
    private httpService: HttpService,
    private http: HttpClient,
    private storageService: StorageService,
    private router: Router
  ) { }





  // Image Upload Starts

  imageUploadUrl = environment.apiUrl+'uploads';

  getImages() {
    return this.http.get<ApiImage[]>(`${this.imageUploadUrl}/image`);
  }
 
  uploadImage(blobData, name, ext,auth_token:any) {
    const formData = new FormData();
    formData.append('file', blobData, `myimage.${ext}`);
    formData.append('name', name);
    formData.append('auth_token', auth_token);

    return this.http.post(`${this.imageUploadUrl}`, formData);
  }
 
  uploadImageFile(file: File, auth_token:any) {
    const ext = file.name.split('.').pop();
    const formData = new FormData();
    formData.append('file', file, `myimage.${ext}`);
    formData.append('name', file.name);
    formData.append('auth_token', auth_token);

    return this.http.post(`${this.imageUploadUrl}`, formData);
  }
 
  
  deleteImage(id) {
    return this.http.delete(`${this.imageUploadUrl}/image/${id}`);
  }

  b64toBlob(b64Data, contentType = '', sliceSize = 512) {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
 
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
 
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
 
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
 
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }
  // Image Upload End



  getImageUrl(file:any){
    return environment.fileUrl+file;
  }
  getThumbImageUrl(file:any){
    return environment.fileUrl+'thumb/'+file;
  }

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
  var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
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

nextInvoice(postData: any): Observable<any> {
  return this.httpService.post('invoices/next',postData);

}


nextEstimate(postData: any): Observable<any> {
  return this.httpService.post('estimates/next',postData);

}
nextJob(postData: any): Observable<any> {
  return this.httpService.post('jobs/next',postData);

}



items(postData: any): Observable<any> {
  return this.httpService.post('items/all',postData);
}
categories(postData: any): Observable<any> {
  return this.httpService.post('categories/all',postData);
}

payments(postData: any): Observable<any> {
  return this.httpService.post('payments/all',postData);
}

expenses(postData: any): Observable<any> {
  return this.httpService.post('expenses/all',postData);
}

jobs(postData: any): Observable<any> {
  return this.httpService.post('jobs/all',postData);
}
expenseCategories(postData: any): Observable<any> {
  return this.httpService.post('expenses-categories/all',postData);
}


taxes(postData: any): Observable<any> {
  return this.httpService.post('taxes/all',postData);
}
images(postData: any): Observable<any> {
  return this.httpService.post('images/all',postData);
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

categoryAdd(postData: any): Observable<any> {
  return this.httpService.post('categories/add',postData);
}

categoryUpdate(postData: any): Observable<any> {
  return this.httpService.post('categories/edit',postData);
}

itemAdd(postData: any): Observable<any> {
  return this.httpService.post('items/add',postData);
}
itemUpdate(postData: any): Observable<any> {
  return this.httpService.post('items/edit',postData);
}


taxAdd(postData: any): Observable<any> {
  return this.httpService.post('tax/add',postData);
}
taxUpdate(postData: any): Observable<any> {
  return this.httpService.post('tax/edit',postData);
}

invoiceAdd(postData: any): Observable<any> {
  return this.httpService.post('invoices/add',postData);
}

invoiceUpdate(postData: any): Observable<any> {
  return this.httpService.post('invoices/edit',postData);
}



estimateAdd(postData: any): Observable<any> {
  return this.httpService.post('estimates/add',postData);
}

estimateUpdate(postData: any): Observable<any> {
  return this.httpService.post('estimates/edit',postData);
}


jobAdd(postData: any): Observable<any> {
  return this.httpService.post('jobs/add',postData);
}

jobUpdate(postData: any): Observable<any> {
  return this.httpService.post('jobs/edit',postData);
}
 //Invoices
 //Items
 //Payments
 //Expenses
 //Items Categories
 //Expenses Categories
 //Taxes
 //Payment Merhods

 
 expenseCategoryUpdate(postData: any): Observable<any> {
  return this.httpService.post('expenses-categories/edit',postData);
}

expenseCategoryAdd(postData: any): Observable<any> {
  return this.httpService.post('expenses-categories/add',postData);

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
