import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, MenuController, IonRouterOutlet } from '@ionic/angular';

import { TermsOfServicePage } from '../terms-of-service/terms-of-service.page';
import { PrivacyPolicyPage } from '../privacy-policy/privacy-policy.page';
import { PasswordValidator } from '../validators/password.validator';
import { ApisService } from '../services/apis.service';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service'
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-signup-step-two',
  templateUrl: './signup-step-two.page.html',
   styleUrls: [
    '../signup/styles/signup.page.scss'
  ]

})
export class SignupStepTwoPage  {

  signupForm2: FormGroup;
  matching_passwords_group: FormGroup;
  industry: Array<any>; 
  desabled: boolean;
  displayUserData: any;


  validation_messages = {
    'name': [
      { type: 'required', message: 'Please enter your Full Name.' },
     ],
     'phone': [
      { type: 'required', message: 'Please enter Phone Number.' },
     ],
     
  };

  constructor(
    public router: Router,
    public modalController: ModalController,
    public menu: MenuController,
    private routerOutlet: IonRouterOutlet,
    private apisService: ApisService,
    private toastService: ToastService,
    private authService: AuthService,
    private storageService: StorageService
  ) { }
  
  ngOnInit(): void {
       this.desabled=false;
        this.authService.userData$.subscribe((res:any) => {
          this.displayUserData=res
        })
    

        this.signupForm2 = new FormGroup({
           'name': new FormControl('', Validators.compose([
            Validators.required
           ])),
           'phone': new FormControl('', Validators.compose([
            Validators.required
           ])),
          'company_name': new FormControl(''),

        });
  }

  // Disable side menu for this page
  ionViewDidEnter(): void {
    this.menu.enable(false);
  }

  // Restore to default when leaving this page
  ionViewDidLeave(): void {
    this.menu.enable(true);
  }

  
  doSignup(): void {
     this.desabled=true;
     let form = new FormData();
     form.append('name', this.signupForm2.value.name);
     form.append('company_name', this.signupForm2.value.company_name);
     form.append('phone', this.signupForm2.value.phone);
     form.append('auth_token', this.displayUserData.auth_token);

          this.apisService.signupComplete(form).subscribe((result: any) => {
              this.desabled=false;
              console.log(result);
                      this.storageService.store('userData',result.data);
                      this.toastService.presentToast(' Successfully Updated');
                      this.router.navigate(['app/dashboard']);
                    },
                    (error: any)=>{
                      this.desabled=false;
                      if(error.status==0){
                        this.toastService.presentToast('Connection failed');
                      }
                      if(error.status==401){
                        this.toastService.presentToast(error.error.data);
                      }
                    }  
            )
             
   }


}
