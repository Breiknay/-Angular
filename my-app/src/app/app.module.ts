// @ts-ignore

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { ModelComponent } from './model/model.component';
import { ModelInStockComponent } from './model-in-stock/model-in-stock.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  {path :'',component: ModelComponent} ,
{path : 'ModelInStock' ,component : ModelInStockComponent},
  {path : 'Contacts' ,component : ContactsComponent},
  ]
@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ModelInStockComponent,
    ContactsComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
      RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
