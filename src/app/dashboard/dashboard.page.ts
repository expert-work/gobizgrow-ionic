import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ApisService } from '../services/apis.service';
import { ToastService } from '../services/toast.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
    Invoice:any;
    Customer:any;
    Estimate:any;
    Item:any;
    Payment:any
    Expense:any
    displayUserData: any;
    loading:boolean
  constructor(
       public actionSheetController: ActionSheetController, 
       private apisService: ApisService,
       private toastService:ToastService,
       private authService: AuthService
       ) {
        this.Invoice=0;
        this.Customer=0;
        this.Estimate=0;
        this.Item=0;
        this.Payment=0;
        this.Expense=0;
        this.loading=true
              
       }
       ngOnInit(){
        this.authService.userData$.subscribe((res:any) => {
          this.displayUserData=res
          if (this.displayUserData.auth_token !== undefined) { this.loadData();}
        })
       }

       loadData() {  
            let form = new FormData();
              form.append('auth_token',this.displayUserData.auth_token);
             this.apisService.dashboard(form).subscribe((result: any) => {
              this.loading=false;
                if(result.data.Customer){
                  this.Invoice=result.data.Invoice;
                  this.Customer=result.data.Customer;
                  this.Estimate=result.data.Estimate;
                  this.Item=result.data.Item;
                  this.Payment=result.data.Payment;
                  this.Expense=result.data.Expense;
                }else{
   
                }
             },
              (error: any)=>{
                if(error.status==0){
                  this.toastService.presentToast('Connection failed');
                }
                if(error.status==401){
                  this.toastService.presentToast('Authentcation failed');
                }
              }  
       ) 
     } 


}
