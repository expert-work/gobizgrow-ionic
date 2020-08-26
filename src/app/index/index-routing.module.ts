import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';
import { IndexGuard } from '../guards/index.guard';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate:[IndexGuard],
    children: [
      {
        path:'',
        loadChildren: () =>
           import('../walkthrough/walkthrough.module').then(
             m => m.WalkthroughPageModule
           )
      },
      {
        path:'getting-started',
        loadChildren : () =>
            import('../getting-started/getting-started.module').then(
              m => m.GettingStartedPageModule
            )
      },
      {
        path:'auth/login',
        loadChildren: () =>
        import('../login/login.module').then(
          m => m.LoginPageModule
        )
      },
      {
        path:'auth/signup',
        loadChildren: () =>
        import('../signup/signup.module').then(
          m=>m.SignupPageModule
        )
      },
      {
        path : 'auth/forgot-password',
        loadChildren : () =>
        import('../forgot-password/forgot-password.module').then(
          m => m.ForgotPasswordPageModule
        )
      }



      ///auth/forgot-password'
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
