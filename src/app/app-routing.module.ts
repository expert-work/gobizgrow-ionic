import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompleteGuard } from './guards/complete.guard';
import { UserDataResolver } from './resolvers/userData.resolver';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./index/index.module').then(
      m =>m.IndexPageModule
    )
  },
  {
    path:'',
    loadChildren : () => import('./home/home.module').then(
      m => m.HomePageModule
    )
  },
  {
    path: 'complete',
    canActivate : [CompleteGuard],
    resolve: {
      userData : UserDataResolver
    },
    loadChildren: () => import('./signup-step-two/signup-step-two.module').then(
      m => m.SignupStepTwoPageModule
    )
  } 
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
