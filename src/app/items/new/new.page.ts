import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { ApisService } from '../../services/apis.service'

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { CategoriesPage } from '../../common/categories/categories.page' 


@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage  {

 
  form: FormGroup;
  desabled: boolean;
  displayUserData: any; 
  categories=[];
  
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Password must be at least 2 characters long.' }
    ],
    'price': [
      { type: 'required', message: 'Price is required.' },
      { type: 'min', message: 'Price must be a valid number.' },
     ]
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

    this.form = new FormGroup({
      'description': new FormControl(''),
      'name': new FormControl('', Validators.compose([
         Validators.required
      ])),
      'price': new FormControl('', Validators.compose([
        Validators.required,
        Validators.min(1),
     ])),
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
     form.append('description', this.form.value.description);
     form.append('name', this.form.value.name);
     form.append('price', this.form.value.price);
     form.append('categories', JSON.stringify(this.categories));
     form.append('auth_token',this.displayUserData.auth_token);
    this.apisService.itemAdd(form).subscribe((result: any) => {
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
                console.log(error.error.data);
                this.toastService.presentToast(error.error.data);
              }
            }  
     )
   }

   itemCategoryPriceUpdate(category:any,event:any){
                 let tempArray=[];
                 this.categories.map(function (item) {
                      if(item.category_id ==category.category_id){ item.price=event.target.value } 
                      tempArray.push(item); 
                 });
                 this.categories=tempArray;
   }

  async openCategoryModal() {
    const modal = await this.modalController.create({
      component: CategoriesPage,
       componentProps: { data: this.categories },
       backdropDismiss:false
    });
    modal.onDidDismiss().then(data=>{
        if(this.apisService.isDefined(data.data[0])){
          this.categories=(data.data);
          this.categories=this.apisService.sortArray(this.categories);
       }
    })
    return await modal.present();
  }
 

  deleteCategory(id : Number){
    let tempArray=[];
    this.categories.map(function (item) {
      if(item.id !=id){ tempArray.push(item);  }
    });
    this.categories=tempArray;
  }

  close()
  {
    this.modalController.dismiss([]);
  }
} 
