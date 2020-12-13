import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Import your component from directory
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrandsComponent } from './brands/brands.component';
import { BrandDetailComponent } from './brands/brand-detail/brand-detail.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { BrandItemComponent } from './brands/brand-list/brand-item/brand-item.component';
import { ItemsComponent } from './items/items.component';
import { ItemDetailComponent } from './items/item-detail/item-detail.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemComponent } from './items/item-list/item/item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

// components you want angular to be aware of
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BrandsComponent,
    BrandDetailComponent,
    BrandListComponent,
    BrandItemComponent,
    ItemsComponent,
    ItemDetailComponent,
    ItemListComponent,
    ItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
