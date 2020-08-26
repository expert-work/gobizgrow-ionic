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
      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
