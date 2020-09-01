import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.page.html',
  styleUrls: ['./vehicle.page.scss'],
})


export class VehiclePage  {
  form: FormGroup;
  desabled: boolean;
  data:any;
  


  validation_messages = {
    'make': [
      { type: 'required', message: 'Make is required.' },
     ],
    'model': [
      { type: 'required', message: 'Model is required.' },
     ],
    'year': [
      { type: 'required', message: 'Year is required.' },
     ]
      
  };






  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {
    this.data=navParams.get('data')

    console.log(this.data);
    this.form = new FormGroup({
      'id': new FormControl(this.data.id),
      'make': new FormControl(this.data.make, Validators.compose([
        Validators.required,
       ])),
       'model': new FormControl(this.data.model, Validators.compose([
        Validators.required,
       ])),
       'year': new FormControl(this.data.year, Validators.compose([
        Validators.required,
       ])),
     'color': new FormControl(this.data.color),
     'mileage': new FormControl(this.data.mileage),
     'notes': new FormControl(this.data.notes),
    });
  }



  // id:this.apisService.makeid(10),
  //     make:'test',
  //     model:'',
  //     year:'',
  //     color:'',
  //     mileage:'',
  //     notes:'',


  saveForm(){
    let data={
      id:this.form.value.id,
      make:this.form.value.make,
      model:this.form.value.model,
      year:this.form.value.year,
      color:this.form.value.color,
      mileage:this.form.value.mileage,
      notes:this.form.value.notes,
    }
    this.modalController.dismiss(data);

  }

  close()
  {
    this.modalController.dismiss([]);

  }

}
