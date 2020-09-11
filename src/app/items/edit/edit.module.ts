import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditPageRoutingModule } from './edit-routing.module';
import { CategoriesPageModule } from '../../common/categories/categories.module'

import { EditPage } from './edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditPageRoutingModule,
    CategoriesPageModule,
    ReactiveFormsModule
  ],
  declarations: [EditPage]
})
export class EditPageModule {}
