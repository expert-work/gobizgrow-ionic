import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { ApisService } from '../../services/apis.service'
import { Validators, FormGroup, FormControl } from '@angular/forms';

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { CategoriesPage } from '../../common/categories/categories.page' 

@Component({
  selector: 'app-account-information',
  templateUrl: './account-information.page.html',
  styleUrls: ['./account-information.page.scss'],
})
export class AccountInformationPage implements OnInit {
  isActiveTab:any;
  form: FormGroup;
  validation_messages = {
    'expense_date': [
      { type: 'required', message: 'Date is required.' },
     ],
     'title': [
      { type: 'required', message: 'Title is required.' },
     ],

    'amount': [
      { type: 'required', message: 'amount is required.' },
     ],
     'expense_category_name': [
      { type: 'required', message: 'Category is required.' },
     ],
     
  };

  constructor(
    private authService: AuthService,
    private apisService:ApisService,
    private storageService: StorageService,
    private toastService: ToastService,
   ) { 
    this.isActiveTab='account';
    this.form = new FormGroup({
      'amount': new FormControl('', Validators.compose([
        Validators.required,
       ])),
       'title': new FormControl('', Validators.compose([
        Validators.required,
       ])),

       
      'expense_date': new FormControl('', Validators.compose([
         Validators.required
       ])),
       'expense_category_name': new FormControl('', Validators.compose([
        Validators.required
        ])),
      'notes': new FormControl(''),
    });
   }

  ngOnInit() {
  }

  updateActiveTab(tab:any){
    this.isActiveTab=tab;
  }
}
