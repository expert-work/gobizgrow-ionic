import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

 import {  NewPageModule } from '../../items/new/new.module';

import { ItemsPageRoutingModule } from './items-routing.module';

import { ItemsPage } from './items.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemsPageRoutingModule,
    ComponentsModule,
    NewPageModule
  ],
  declarations: [ItemsPage]
})
export class ItemsPageModule {}
