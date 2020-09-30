import { Component, OnInit } from '@angular/core';
 import { AuthService } from '../../services/auth.service'
 import { Router,ActivatedRoute,NavigationExtras } from '@angular/router';
 import { ApisService,ApiImage } from '../../services/apis.service';
 import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Platform,ActionSheetController ,NavController,ModalController} from '@ionic/angular';

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { CategoriesPage } from '../../common/categories/categories.page' 
import { UploadPage } from '../../common/upload/upload.page'

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.page.html',
  styleUrls: ['./company-information.page.scss'],
})
export class CompanyInformationPage implements OnInit {
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
    private router: Router,
    private route: ActivatedRoute,
    private modalController: ModalController,
    private platform: Platform,
    
   ) { 
    this.isActiveTab='GENERAL';
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


  async openUploadModal(type:any) {
    const modal = await this.modalController.create({
      component: UploadPage,
      componentProps: { data: '' },
      backdropDismiss:false
    });
    modal.onDidDismiss().then(data=>{
       if(this.apisService.isDefined(data.data.id)){
        console.log(data.data)
        
        let photo= data.data;
        
     

       

                 
        }
    })
    return await modal.present();
  }
  updateActiveTab(tab:any){
    this.isActiveTab=tab;
  }
}
