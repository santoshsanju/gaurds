import { Routes } from "@angular/router";
import { MyWishlistComponent } from "./my-wishlist/my-wishlist.component";
import { CartComponent } from "./cart.component";

export const CartRoutes: Routes = [
  { path: '', component: CartComponent },
  { path: 'my-wishlist', component: MyWishlistComponent }
];