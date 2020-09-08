import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxesPageRoutingModule } from './taxes-routing.module';
import { ComponentsModule } from '../../components/components.module';

import { TaxesPage } from './taxes.page';
import { NewPageModule } from '../../taxes/new/new.module'
import { from } from 'core-js/fn/array';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxesPageRoutingModule,
    ComponentsModule,
    NewPageModule
  ],
  declarations: [TaxesPage]
})
export class TaxesPageModule {}
