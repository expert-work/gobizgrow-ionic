import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { ApisService } from '../../services/apis.service'

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { ExpenseCategoriesPage } from '../../common/expense-categories/expense-categories.page'



@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage  {

 
  form: FormGroup;
  desabled: boolean;
  displayUserData: any; 
  expense_date:any;
  vehicles_json_data=[];
  expenses_category:any;
  validation_messages = {
    'expense_date': [
      { type: 'required', message: 'Date is required.' },
     ],
    'amount': [
      { type: 'required', message: 'amount is required.' },
     ],
     'expense_category_name': [
      { type: 'required', message: 'Category is required.' },
     ],
     
  };

 

  constructor(
    public router: Router,
    public menu: MenuController,
    private authService: AuthService,
    private apisService:ApisService,
     private storageService: StorageService,
    private toastService: ToastService,
    navParams: NavParams,
    public modalController: ModalController
  ) {
    this.expenses_category=[];
     this.expenses_category.name='';

    this.form = new FormGroup({
      'amount': new FormControl('', Validators.compose([
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
 
  ngOnInit(){
    this.authService.userData$.subscribe((res:any) => {
      this.displayUserData=res
      })
   }


  saveForm(): void {
    console.log('do Log In');
     this.desabled=true;
     let form = new FormData();
     form.append('amount', this.form.value.amount);
     form.append('expense_date', this.form.value.expense_date);
     form.append('notes', this.form.value.notes);
     form.append('expense_category_id', this.expenses_category.expense_category_id);

     
     form.append('auth_token',this.displayUserData.auth_token);
 
     
    this.apisService.expensesAdd(form).subscribe((result: any) => {
      this.desabled=false;
                this.toastService.presentToast('Successfully added');
                console.log(result.data);
                this.modalController.dismiss(result.data);
            },
            (error: any)=>{
              this.desabled=false;
              if(error.status==0){
                this.toastService.presentToast('Connection failed');
              }
              if(error.status==401){
                this.toastService.presentToast('Authentcation failed');
              }
            }  
     )
   }

 

  async openExpenseCategoriesModal() {
    let data={
      id:this.apisService.makeid(10),
       
    }
    const modal = await this.modalController.create({
      component: ExpenseCategoriesPage,
       componentProps: { data: data },
       backdropDismiss:false
    });
    modal.onDidDismiss().then(data=>{
        if(this.apisService.isDefined(data.data.id)){
          this.expenses_category=(data.data);
       }
   
   
    })
    return await modal.present();
  }

  
 
 

  close()
  {
    this.modalController.dismiss([]);
  }
} 
