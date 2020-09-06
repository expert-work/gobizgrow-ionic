import { Component, OnInit } from '@angular/core';
import { ActionSheetController ,NavController} from '@ionic/angular';
 
import { Router , NavigationExtras} from '@angular/router';
import { ApisService } from '../../services/apis.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: [
    './list.page.scss',
    './style/listing.ios.scss',
    './style/listing.page.scss',
    './style/listing.shell.scss'

  
  ],
})
export class ListPage implements OnInit {

  user = {
    name: 'Simon Grimm',
    website: 'www.ionicacademy.com',
    address: {
      zip: 48149,
      city: 'Muenster',
      country: 'DE'
    },
    interests: [
      'Ionic', 'Angular', 'YouTube', 'Sports'
    ]
  };
 
  displayUserData: any;
  q:any;
  nextInvoice:any
  constructor(
       public actionSheetController: ActionSheetController, 
       private apisService: ApisService,
       private toastService:ToastService,
       private authService: AuthService,
       private router: Router,
       
       ) {
       }


   items = [];  
   x= 0;
   page=1;
   last_page=0;
   numTimesLeft = 5;  
    
   ngOnInit(){
    this.authService.userData$.subscribe((res:any) => {
      this.displayUserData=res
      this.q='';
      if (this.displayUserData.auth_token !== undefined) { this.addMoreItems(); }
    })
   }
  
  newInvoice(){
    let form = new FormData();
     form.append('auth_token',this.displayUserData.auth_token);
                this.apisService.nextInvoice(form).subscribe((result: any) => {
                      if(result.data){
                            this.nextInvoice=result.data
                             let navigationExtras: NavigationExtras = {
                              state: {
                                data: this.nextInvoice
                              }
                            };
                            this.router.navigate(['app/invoices/do'], navigationExtras);
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

  loadData(event) {  
    setTimeout(() => {  
      console.log('Done');  
      this.addMoreItems();  
      this.numTimesLeft -= 1;  
      event.target.complete();  
    }, 500);  
  }  
  addMoreItems() {  
     let form = new FormData();
         form.append('page',this.page.toString() );
         form.append('q',this.q );
         form.append('auth_token',this.displayUserData.auth_token);
          this.apisService.invoices(form).subscribe((result: any) => {
             if(result.data.total){
               this.page= this.page+1;
               this.items.push(...result.data.data)
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
    this.addMoreItems()
  }
  async openMenu() {  
    const actionSheet = await this.actionSheetController.create({  
     // header: 'Action',  
      buttons: [  
       {  
          text: 'Delete',  
          role: 'destructive',  
          handler: () => {  
            console.log('Destructive clicked');  
          }  
        }, {  
          text: 'Cancel',  
          role: 'cancel',  
          handler: () => {  
            console.log('Cancel clicked');  
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  }  


  async openOptionMenu() {  
    const actionSheet = await this.actionSheetController.create({  
     // header: 'Action',  
      buttons: [ 
        {  
          text: 'Update',  
           handler: () => {  
            console.log('Destructive clicked');  
          }  
        }, 
        {  
          text: 'View',  
           handler: () => {  
            console.log('Destructive clicked');  
          }  
        }, 
        {  
          text: 'Send',  
           handler: () => {  
            console.log('Destructive clicked');  
          }  
        },
        {  
          text: 'Mark As Sent',  
           handler: () => {  
            console.log('Destructive clicked');  
          }  
        },
        {  
          text: 'Resend',  
           handler: () => {  
            console.log('Destructive clicked');  
          }  
        },
       {  
          text: 'Delete',  
          role: 'destructive',  
          handler: () => {  
            console.log('Destructive clicked');  
          }  
        }, {  
          text: 'Cancel',  
          role: 'cancel',  
          handler: () => {  
            console.log('Cancel clicked');  
          }  
        }  
      ]  
    });  
    await actionSheet.present();  
  } 


}
