import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { ApisService } from '../../services/apis.service'

import { StorageService } from '../../services/storage.service';
import { ToastService } from '../../services/toast.service';
import { VehiclePage} from '../vehicle/vehicle.page'



@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage  {

 
  form: FormGroup;
  desabled: boolean;
  displayUserData: any; 
  vehicles_json_data=[];

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' },
      { type: 'minlength', message: 'Password must be at least 2 characters long.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone is required.' },
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
      'email': new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      'name': new FormControl('', Validators.compose([
         Validators.required
      ])),
      'phone': new FormControl('', Validators.compose([
        Validators.required
     ])),
     'street_address': new FormControl(''),
     'city': new FormControl(''),
     'state': new FormControl(''),
     'zip_code': new FormControl(''),
     'customer_notes': new FormControl(''),
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
     form.append('email', this.form.value.email);
     form.append('name', this.form.value.name);
     form.append('phone', this.form.value.phone);
     form.append('street_address', this.form.value.street_address);
     form.append('city', this.form.value.city);
     form.append('state', this.form.value.state);
     form.append('zip_code', this.form.value.zip_code);
     form.append('customer_notes', this.form.value.customer_notes);
     form.append('auth_token',this.displayUserData.auth_token);
     form.append('vehicles_json_data', JSON.stringify(this.vehicles_json_data));

     
    this.apisService.customerAdd(form).subscribe((result: any) => {
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

 

  async openVehicleModal() {
    let data={
      id:this.apisService.makeid(10),
      make:'',
      model:'',
      year:'',
      color:'',
      mileage:'',
      notes:'',
    }
    const modal = await this.modalController.create({
      component: VehiclePage,
       componentProps: { data: data },
       backdropDismiss:false
    });
    modal.onDidDismiss().then(data=>{
        if(this.apisService.isDefined(data.data.id)){
          this.vehicles_json_data.push(data.data)
          this.vehicles_json_data=this.apisService.sortArray(this.vehicles_json_data);
       }
   
   
    })
    return await modal.present();
  }

  
  async editVehicleModal(data) {
    const modal = await this.modalController.create({
      component: VehiclePage,
       componentProps: { data: data },
       backdropDismiss:false
    });
    modal.onDidDismiss().then(data=>{
        if(this.apisService.isDefined(data.data.id)){
          let tempArray=[];
          this.vehicles_json_data.map(function (item) {
            if(item.id ==data.data.id){ tempArray.push(data.data);  } else {tempArray.push(item); }
          });
          this.vehicles_json_data=tempArray;
       }
    })
    return await modal.present();
  }
  
  deleteVehicle(id : Number){
    let tempArray=[];
    this.vehicles_json_data.map(function (item) {
      if(item.id !=id){ tempArray.push(item);  }
    });
    this.vehicles_json_data=tempArray;
  }

  close()
  {
    this.modalController.dismiss([]);
  }
} 
