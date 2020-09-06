import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadPageRoutingModule } from './upload-routing.module';
import { ComponentsModule } from '../../components/components.module';
import { UploadPage } from './upload.page';

import { NewPageModule} from '../../images/new/new.module'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadPageRoutingModule,
    ComponentsModule,
    NewPageModule
  ],
  declarations: [UploadPage]
})
export class UploadPageModule {}
 