import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { ApisService } from '../../services/apis.service'

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

 
  form: FormGroup;
  desabled: boolean;
  displayUserData: any; 
  vehicles_json_data=[];
  data:any;
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' },
      ],
      'percent': [
        { type: 'required', message: 'Name is required.' },
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
    this.data=navParams.get('data');

    this.form = new FormGroup({
      'name': new FormControl(this.data.name, Validators.compose([
         Validators.required
      ])),
      'percent': new FormControl(this.data.percent, Validators.compose([
        Validators.required
      ])),
     'description': new FormControl(this.data.description),
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
      form.append('name', this.form.value.name);
      form.append('description', this.form.value.description);
      form.append('percent', this.form.value.percent);
      form.append('id',this.data.id);
      
     
    this.apisService.taxUpdate(form).subscribe((result: any) => {
      this.desabled=false;
                this.toastService.presentToast('Successfully Updated');
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
   close()
   {
     this.modalController.dismiss([]);
   }

}
