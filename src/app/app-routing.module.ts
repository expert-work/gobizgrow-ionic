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
  },   {
    path: 'sales',
    loadChildren: () => import('./reports/sales/sales.module').then( m => m.SalesPageModule)
  },
  {
    path: 'profit-loss',
    loadChildren: () => import('./reports/profit-loss/profit-loss.module').then( m => m.ProfitLossPageModule)
  },
  {
    path: 'expenses',
    loadChildren: () => import('./reports/expenses/expenses.module').then( m => m.ExpensesPageModule)
  },
  {
    path: 'taxes',
    loadChildren: () => import('./reports/taxes/taxes.module').then( m => m.TaxesPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./customers/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./customers/vehicle/vehicle.module').then( m => m.VehiclePageModule)
  }

 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
