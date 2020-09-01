import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { NewPageRoutingModule } from './new-routing.module';

import { NewPage } from './new.page';
import { VehiclePageModule} from '../vehicle/vehicle.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewPageRoutingModule,
    VehiclePageModule,
    ComponentsModule
  ],
  declarations: [NewPage]
})
export class NewPageModule {}
