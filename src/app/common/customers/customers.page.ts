import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { ApisService } from '../../services/apis.service'

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { NewPage } from '../../customers/new/new.page'


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: [
    './customers.page.scss',
    '../../style/listing.ios.scss',
    '../../style/listing.page.scss',
    '../../style/listing.shell.scss'
  ],
})
export class CustomersPage implements OnInit {
  displayUserData:any;
  customer:any;
  loading:boolean;
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
    this.customer=navParams.get('data');

    console.log('popup open start');
    console.log(this.customer);
    console.log('popup open end');
    this.loading=true;

  }
  q:any
  items = [];  
  x= 0;
  page=1;
  last_page=0;
  numTimesLeft = 5;  
   
  ngOnInit(){
   this.authService.userData$.subscribe((res:any) => {
     this.displayUserData=res
     this.q='';
     if (this.displayUserData.auth_token !== undefined) { this.loadItems(); }
   })
  

  }

  loadData(event) {  
   setTimeout(() => {  
     this.loadItems();  
     this.numTimesLeft -= 1;  
     event.target.complete();  
   }, 500);  
 }  
 loadItems() {  
    let form = new FormData();
        form.append('page',this.page.toString() );
        form.append('q',this.q );
        form.append('auth_token',this.displayUserData.auth_token);
         this.apisService.customers(form).subscribe((result: any) => {
          this.loading=false;
            if(result.data.total){
              this.page= this.page+1;
              this.items.push(...result.data.data)
              this.items=this.apisService.sortArray(this.items);
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
 searchBox(evt){
   this.q= evt.srcElement.value;
   this.page=1;
   this.items = [];
   this.loadItems()
 }

 async newModal() {
  const modal = await this.modalController.create({
     component: NewPage,
     backdropDismiss:false
  });
  modal.onDidDismiss().then(data=>{
     if(data.data)
     if(this.apisService.isDefined(data.data.id)){
        this.items.push(data.data)
        this.items=this.apisService.sortArray(this.items);
     }
  })
  return await modal.present();
}

  selectCustomer(item){
    this.customer= item;  
    
  }

 updateSelectedCusromer(){
  this.modalController.dismiss(this.customer);
 }
   close() { this.modalController.dismiss([]);  }
}
