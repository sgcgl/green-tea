import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ItemsComponent} from './items/items.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {BrandsComponent} from './brands/brands.component';
import {ItemStartComponent} from './items/item-start/item-start.component';
import {ItemDetailComponent} from './items/item-detail/item-detail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: 'items', component: ItemsComponent, children: [
      { path: '', component: ItemStartComponent },
      { path: ':id', component: ItemDetailComponent }
    ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'brands', component: BrandsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
