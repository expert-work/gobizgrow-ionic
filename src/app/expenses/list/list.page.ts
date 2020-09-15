import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { ApisService } from '../../services/apis.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';

import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { EditPage  } from '../edit/edit.page';
import { NewPage } from  '../new/new.page';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: [
    './list.page.scss',
    '../../style/listing.ios.scss',
    '../../style/listing.page.scss',
    '../../style/listing.shell.scss'
  ],
})
export class ListPage implements OnInit {

  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  loading:boolean;
  displayUserData: any;
  q:any;
   constructor(
       public actionSheetController: ActionSheetController, 
       private apisService: ApisService,
       private toastService:ToastService,
       public router: Router,
       public menu: MenuController,
       private authService: AuthService,
       private storageService: StorageService,
       public modalController: ModalController

       ) {
          this.loading=true;    
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
  
  
  loadData(event) {  
    setTimeout(() => {  
      console.log('Done');  
      this.addMoreItems();  
      this.numTimesLeft -= 1;  
      event.target.complete();  
    }, 500);  
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


async updateModal(data:any) {
  const modal = await this.modalController.create({
     componentProps: { data: data },
     component: EditPage,
     backdropDismiss:false
  });
  modal.onDidDismiss().then(data=>{
     if(data.data)
     if(this.apisService.isDefined(data.data.id)){
       
       let tempArray=[];
        this.items.map(function (item) {
          if(item.id == data.data.id){ tempArray.push(data.data); } else {tempArray.push(item); }
        });
        this.items=this.apisService.sortArray(tempArray);
     }
  })
  return await modal.present();
}


//EditPage

checkUncheckAll() {
  for (var i = 0; i < this.items.length; i++) {
    this.items[i].isSelected = this.masterSelected;
  }
  this.getCheckedItemList();
}

  isAllSelected() {
    this.masterSelected = this.items.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }

  getCheckedItemList(){
    this.checkedList = [];
    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].isSelected)
      this.checkedList.push(this.items[i].id);
    }
    this.checkedList = JSON.stringify(this.checkedList);
    return this.checkedList;
  }




  addMoreItems() {  
     let form = new FormData();
         form.append('page',this.page.toString() );
         form.append('q',this.q );
         form.append('auth_token',this.displayUserData.auth_token);
          this.apisService.expenses(form).subscribe((result: any) => {
            this.loading=false; 
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


  async openOptionMenu(item) {  
    const actionSheet = await this.actionSheetController.create({  
     // header: 'Action',  
      buttons: [ 
        {  
          text: 'Update',  
           handler: () => {  
            console.log('Destructive clicked');  
            this.updateModal(item);
          }  
        }, 
        {  
          text: 'View',  
           handler: () => {  
            console.log('Destructive clicked');  
          }  
        } , {  
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
