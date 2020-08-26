import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupStepTwoPageRoutingModule } from './signup-step-two-routing.module';
import { ComponentsModule } from '../components/components.module';

import { SignupStepTwoPage } from './signup-step-two.page';

@NgModule({
  imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ComponentsModule,
        SignupStepTwoPageRoutingModule,
     
  ],
  declarations: [SignupStepTwoPage]
})
export class SignupStepTwoPageModule {}
