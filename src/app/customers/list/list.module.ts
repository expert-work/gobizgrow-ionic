import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

import { ListPageRoutingModule } from './list-routing.module';

import { ListPage } from './list.page';
import { NewPageModule } from '../new/new.module'
import { EditPageModule } from '../edit/edit.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListPageRoutingModule,
    ComponentsModule,
    NewPageModule,
    EditPageModule
  ],
  declarations: [ListPage]
})
export class ListPageModule {}
  