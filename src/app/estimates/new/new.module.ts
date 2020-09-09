import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPageRoutingModule } from './new-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { CustomersPageModule } from '../../common/customers/customers.module';
import { ItemsPageModule} from  '../../common/items/items.module'
import { NewPage } from './new.page';
import { TaxesPageModule } from  '../../common/taxes/taxes.module'
import { UploadPageModule } from  '../../common/upload/upload.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPageRoutingModule,
    ComponentsModule,
    CustomersPageModule,
    ItemsPageModule,
    TaxesPageModule,
    UploadPageModule
  ],
  declarations: [NewPage]
})
export class NewPageModule {}
