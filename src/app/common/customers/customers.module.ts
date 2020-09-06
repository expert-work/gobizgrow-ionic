import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

import { CustomersPageRoutingModule } from './customers-routing.module';
import {  NewPageModule } from '../../customers/new/new.module';

import { CustomersPage } from './customers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomersPageRoutingModule,
    NewPageModule,
    ComponentsModule
  ],
  declarations: [CustomersPage]
})
export class CustomersPageModule {}
