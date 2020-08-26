import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TabsPage } from './tabs.page';
import { DashboardPage } from '../dashboard/dashboard.page';
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
      {
        path: 'categories',
        children: [
          {
            path: '',
            loadChildren: () => import('../categories/categories.module').then(m => m.CategoriesPageModule)
          },
          {
            path: 'fashion',
            loadChildren: () => import('../fashion/listing/fashion-listing.module').then(m => m.FashionListingPageModule)
          },
          {
            path: 'fashion/:productId',
            loadChildren: () => import('../fashion/details/fashion-details.module').then(m => m.FashionDetailsPageModule)
          },
          {
            path: 'food',
            loadChildren: () => import('../food/listing/food-listing.module').then(m => m.FoodListingPageModule)
          },
          {
            path: 'food/:productId',
            loadChildren: () => import('../food/details/food-details.module').then(m => m.FoodDetailsPageModule)
          },
          {
            path: 'travel',
            loadChildren: () => import('../travel/listing/travel-listing.module').then(m => m.TravelListingPageModule)
          },
          {
            path: 'travel/:productId',
            loadChildren: () => import('../travel/details/travel-details.module').then(m => m.TravelDetailsPageModule)
          },
          {
            path: 'deals',
            loadChildren: () => import('../deals/listing/deals-listing.module').then(m => m.DealsListingPageModule)
          },
          {
            path: 'deals/:productId',
            loadChildren: () => import('../deals/details/deals-details.module').then(m => m.DealsDetailsPageModule)
          },
          {
            path: 'real-estate',
            loadChildren: () => import('../real-estate/listing/real-estate-listing.module').then(m => m.RealEstateListingPageModule)
          },
          {
            path: 'real-estate/:productId',
            loadChildren: () => import('../real-estate/details/real-estate-details.module').then(m => m.RealEstateDetailsPageModule)
          }
        ]
      },
      {
        path: 'user',
        children: [
          {
            path: '',
            loadChildren: () => import('../user/profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'friends',
            loadChildren: () => import('../user/friends/user-friends.module').then(m => m.UserFriendsPageModule)
          }
        ]
      },
      {
        path: 'messages',
        children: [
          {
            path: '',
            loadChildren: () => import('../video-playlist/video-playlist.module').then(
              m => m.VideoPlaylistPageModule
            )
          } 
        ]
      },
      {
        path : 'fashion',
        loadChildren : () => import('../fashion/listing/fashion-listing.module').then(
          m => m.FashionListingPageModule
        )
      },
      {
        path: 'notifications',
        children: [
          {
            path: '',
            loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          }
        ]
      },
      {
        path:'categories',
        loadChildren: () =>
           import('../categories/categories.module').then(
             m => m.CategoriesPageModule
           )
      },
      {
        path:'dashboard',
        loadChildren: () =>
           import('../dashboard/dashboard.module').then(
             m => m.DashboardPageModule
           )
      },
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
