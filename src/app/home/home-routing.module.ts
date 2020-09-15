import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { DashboardPage } from '../dashboard/dashboard.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate : [HomeGuard],
    resolve: {
     userData: UserDataResolver
    },
    children : [
      {
        path: 'app',
        loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
      },

      {
        path:'app/dashboard',
        loadChildren: () =>
           import('../dashboard/dashboard.module').then(
             m => m.DashboardPageModule
           )
      },
      {
        path:'app/categories',
        loadChildren: () =>
            import('../item-categories/list/list.module').then(
              m => m.ListPageModule
            )
      },


      {
        path:'app/expenses-categories',
        loadChildren: () =>
           import('../dashboard/dashboard.module').then(
             m => m.DashboardPageModule
           )
      },

      {
        path:'app/taxes',
        loadChildren: () =>
            import('../taxes/list/list.module').then(
              m => m.ListPageModule
            )
      },
      {
        path:'app/expense-categories',
        loadChildren: () =>
            import('../expense-categories/list/list.module').then(
              m => m.ListPageModule
            )
      },

      
      {
        path:'home',
        loadChildren: () =>
           import('../dashboard/dashboard.module').then(
             m => m.DashboardPageModule
           )
      },
        {
          path : 'reports/sales',
          loadChildren : () => import('../reports/sales/sales.module').then(
            m =>m.SalesPageModule
          )
        },
        {
           path :'reports/profit-loss',
           loadChildren: () => import('../reports/profit-loss/profit-loss.module').then(
             m => m.ProfitLossPageModule
           )
        },
        { 
          path :'reports/expenses',
          loadChildren: () => import('../reports/expenses/expenses.module').then(
            m => m.ExpensesPageModule
          )
        },
        {
         path : 'reports/taxes',
         loadChildren : () => import('../reports/taxes/taxes.module').then(
           m => m.TaxesPageModule
         )
        },




        {
          path: 'app/invoices/do',
          loadChildren : () => import('../invoices/new/new.module').then(
            m => m.NewPageModule
          )
        },
        {
          path: 'app/estimates/do',
          loadChildren : () => import('../estimates/new/new.module').then(
            m => m.NewPageModule
          )
        },
        {
          path: 'app/jobs/do',
          loadChildren : () => import('../jobs/new/new.module').then(
            m => m.NewPageModule
          )
        }
  
       
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
