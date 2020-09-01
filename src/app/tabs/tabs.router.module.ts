import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';
//import { DashboardPage } from '../dashboard/dashboard.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    canActivate : [HomeGuard],
    resolve: {
      userData: UserDataResolver
     },
    children: [
         
      // {
      //   path:'dashboard',
      //   loadChildren: () =>
      //      import('../dashboard/dashboard.module').then(
      //        m => m.DashboardPageModule
      //      )
      // },
      {
        path: 'customers',
        loadChildren: () =>
            import('../customers/list/list.module').then(
              m => m.ListPageModule
            )
      },
      {
        path: 'items',
        loadChildren: () =>
        import('../items/list/list.module').then(
          m => m.ListPageModule
        )
      },
      {
        path:'estimates',
        loadChildren: () =>
           import('../estimates/list/list.module').then(
             m => m.ListPageModule
           )
      },
      {
        path: 'invoices',
        loadChildren: () =>
          import('../invoices/list/list.module').then(
            m => m.ListPageModule
          )
      },
      {
        path: 'payments',
         loadChildren: () => 
         import('../payments/list/list.module').then(
           m => m.ListPageModule
         )
      },
      {
        path: 'expenses',
        loadChildren: () =>
         import('../expenses/list/list.module').then(
           m => m.ListPageModule
         )
      },
      {
        path: 'reports',
        loadChildren: () =>
         import('../reports/reports/reports.module').then(
           m => m.ReportsPageModule
         )
      },
      {
        'path': 'settings',
        loadChildren: () =>
        import('../settings/setting/setting.module').then(
          m => m.SettingPageModule
        )
      }

    ]
  },
  // /app/ redirect
  {
    path: '',
    redirectTo: 'app/categories',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ ]
})
export class TabsPageRoutingModule {}
