import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../../components/components.module';
import { NewPageRoutingModule } from './new-routing.module';

import { NewPage } from './new.page';
import { ExpenseCategoriesPageModule } from '../../common/expense-categories/expense-categories.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewPageRoutingModule,
    ExpenseCategoriesPageModule,
    ComponentsModule
  ],
  declarations: [NewPage]
})
export class NewPageModule {}
