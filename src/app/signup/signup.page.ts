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
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: [
    './styles/signup.page.scss'
  ]
})
export class SignupPage {
  signupForm: FormGroup;
  matching_passwords_group: FormGroup;
  industry: Array<any>; 
  desabled: boolean;



  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'matching_passwords': [
      { type: 'areNotEqual', message: 'Password mismatch' }
    ]
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
    this.apisService.industries('').subscribe((result: any) => {
          this.industry=result.data;
        },
        (error: any)=>{
          if(error.status==0){
            this.toastService.presentToast('Connection failed');
          }
          if(error.status==500){
            this.toastService.presentToast('Somthing went wrong failed');
          }
        }  
    )
      this.matching_passwords_group = new FormGroup({
          'password': new FormControl('', Validators.compose([
            Validators.minLength(5),
            Validators.required
          ])),
          'confirm_password': new FormControl('', Validators.required)
        }, (formGroup: FormGroup) => {
          return PasswordValidator.areNotEqual(formGroup);
        });

        this.signupForm = new FormGroup({
          'email': new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
          ])),
          'matching_passwords': this.matching_passwords_group,
          'industry': new FormControl('', Validators.required),

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

  async showTermsModal() {
    const modal = await this.modalController.create({
      component: TermsOfServicePage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  async showPrivacyModal() {
    const modal = await this.modalController.create({
      component: PrivacyPolicyPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }

  doSignup(): void {
     this.desabled=true;
     let form = new FormData();
     form.append('email', this.signupForm.value.email);
     form.append('industry', this.signupForm.value.industry);
     form.append('password', this.signupForm.value.matching_passwords.password);
            this.authService.signup(form).subscribe((result: any) => {
              this.desabled=false;
              console.log(result);
                      this.storageService.store('userData',result.data);
                      this.toastService.presentToast('Account Successfully Created');
                      this.router.navigate(['complete']);
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
