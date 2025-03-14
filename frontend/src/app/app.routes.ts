import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { authenticationGuard } from './auth.guard';
import { AdminProductDetailComponent } from './product/admin-product-detail/admin-product-detail.component';
import { authorizationGuard } from './product/admin.guard';
import { alertGuard } from './contact/alert.guard';
import { urlValidationGuard } from './product/validation.guard';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { conditionalGuard, reverseConditionalGuard } from './conditional.guard';
import { CartResolverService } from './cart/cart-resolver.service';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'products', component: ProductComponent, canActivate: [ authenticationGuard ], canActivateChild: [ authorizationGuard ], children: [
      { path: 'detail', component: ProductDetailComponent, canActivate: [ urlValidationGuard ] },
      { path: 'admin-detail', component: AdminProductDetailComponent },
    ]
  },
  { path: 'dashboard', component: AdminDashboardComponent, canMatch: [ conditionalGuard ] },
  { path: 'dashboard', component: UserDashboardComponent, canMatch: [ reverseConditionalGuard ] },
  { path: 'cart', canActivate: [ authenticationGuard ], resolve: { data: CartResolverService }, loadChildren: () => import('./cart/cart.routes').then(e => e.CartRoutes) },
  { path: 'about', canActivate: [ authenticationGuard ], loadComponent: () => import('./about/about.component').then(e => e.AboutComponent) },
  { path: 'contact', component: ContactComponent, canActivate: [ authenticationGuard ], canDeactivate: [ alertGuard ] },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent }
];
