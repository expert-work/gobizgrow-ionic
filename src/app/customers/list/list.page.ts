import { Component, OnInit } from '@angular/core';
import { ActionSheetController,ModalController } from '@ionic/angular';
import { ApisService } from '../../services/apis.service';
import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { NewPage } from '../new/new.page'
import { EditPage } from '../edit/edit.page'

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

  displayUserData: any;
  q:any;
  masterSelected:boolean;
  checklist:any;
  checkedList:any;
  constructor(
       public actionSheetController: ActionSheetController, 
       private apisService: ApisService,
       private toastService:ToastService,
       private authService: AuthService,
       private modalController: ModalController
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

  
  async openMenu() {  
    const actionSheet = await this.actionSheetController.create({  
     // header: 'Action',  
      buttons: [  
       {  
          text: 'Delete',  
          role: 'destructive',  
          handler: () => {  
            this.deleteItems(); 
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


  async openActionMenu(item: any) {  
     const actionSheet = await this.actionSheetController.create({  
     // header: 'Action',  
      buttons: [ 
        {  
          text: 'Update',  
           handler: () => {  
             this.editModal(item);
          }  
        }, 
        {  
          text: 'View',  
           handler: () => {  
            console.log('Destructive clicked');  
          }  
        } 
        , {  
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

 

async openModal(player) {
  const modal = await this.modalController.create({
    component: NewPage,
    componentProps: { player: player },
    backdropDismiss:false
  });
  return await modal.present();
}

 

async editModal(data:any) {
  const modal = await this.modalController.create({
    component: EditPage,
    componentProps: { data: data },
    backdropDismiss:false
  });
  modal.onDidDismiss().then(data=>{
     if(this.apisService.isDefined(data.data.id)){
      let tempArray=[];
      this.items.map(function (item) {
        if(item.id == data.data.id){ tempArray.push(data.data); console.log(item.id+'--'+data.data.id+' EQUAL');  } else {tempArray.push(item); }
      });
      this.items=this.apisService.sortArray(tempArray);
     }
  })
  return await modal.present();
}

 
async deleteItems(){
      let checkedItems= this.getCheckedItemList();
      let form = new FormData();
       form.append('ids', checkedItems);
       form.append('auth_token',this.displayUserData.auth_token);

      this.apisService.deleteCustomers(form).subscribe((result: any) => {
              if(!result.isError){
                let tempItems = [];
                for (var i = 0; i < this.items.length; i++) {
                  if(!this.items[i].isSelected)
                  tempItems.push(this.items[i]);
                }
              this.items=tempItems;
              }
       },
        (error: any)=>{
          console.log(error);
          if(error.status==0){
            this.toastService.presentToast('Connection failed');
          }
          if(error.status==401){
            this.toastService.presentToast('Authentcation failed');
          }
        }  
    ) 
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





}
 