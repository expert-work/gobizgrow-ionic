import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';

 import {  NewPageModule } from '../../expense-categories/new/new.module';

import { ExpenseCategoriesPageRoutingModule } from './expense-categories-routing.module';

import { ExpenseCategoriesPage } from './expense-categories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpenseCategoriesPageRoutingModule,
    NewPageModule,
     NewPageModule,
    ComponentsModule
  ],
  declarations: [ExpenseCategoriesPage]
})
export class ExpenseCategoriesPageModule {}
