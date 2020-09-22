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
  },
  {
    path: 'list',
    loadChildren: () => import('./jobs/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./jobs/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./expenses/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'expense-categories',
    loadChildren: () => import('./common/expense-categories/expense-categories.module').then( m => m.ExpenseCategoriesPageModule)
  },
 
  
 
   
  
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
