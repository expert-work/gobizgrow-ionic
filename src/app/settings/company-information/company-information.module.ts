import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanyInformationPageRoutingModule } from './company-information-routing.module';

import { CompanyInformationPage } from './company-information.page';
import { UploadPageModule } from  '../../common/upload/upload.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CompanyInformationPageRoutingModule,
    UploadPageModule
  ],
  declarations: [CompanyInformationPage]
})
export class CompanyInformationPageModule {}
