import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { ApisService } from '../../services/apis.service'

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { NewPage} from '../../item-categories/new/new.page'
import { from } from 'core-js/fn/array';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: [
     './categories.page.scss',
     '../../style/listing.ios.scss',
    '../../style/listing.page.scss',
    '../../style/listing.shell.scss'
    ],
})
export class CategoriesPage implements OnInit {

  displayUserData:any;
  categories:any;
  masterSelected:boolean;
  checklist:any;
  checkedList:any;
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
    this.loading=true;
    this.categories=navParams.get('data');
     
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
         this.apisService.categories(form).subscribe((result: any) => {
          this.loading=false;
            if(result.data.total){
              this.page= this.page+1;
              this.items.push(...result.data.data)
              this.items=this.apisService.sortArray(this.items);
              let self=this;
              let items=[];
              this.items.map(function (item) {
                   self.categories.map(function (category) {
                     if(item.id==category.category_id){
                      item.isSelected=true;
                     }
                   });
                   items.push(item);
              });
              this.items=items;
          
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

  updateSelectedCategories(){
    let categories=[];
    let self=this;
    this.items.map(function (item) {
      if(item.isSelected){
                    let isAlready=false;
                     self.categories.map(function (category) {
                          if(item.id==category.category_id){ isAlready= category; }
                      });
                      if(!isAlready){
                        categories.push({
                          id: self.apisService.makeid(10),
                          category_id:item.id,
                          name:item.name,
                          price:0
                        });
                      }else{
                        categories.push(isAlready);
                      }
                    }
    });

    this.modalController.dismiss(categories);

  //  price
  }
   close() { this.modalController.dismiss([]);  }

}
