import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ModelComponent} from './model/model.component';
import {ModelInStockComponent} from './model-in-stock/model-in-stock.component';
import {ContactsComponent} from './contacts/contacts.component';
import {Routes, Router, RouterModule} from "@angular/router";
import {BuylogComponent} from './buylog/buylog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";

const appRoutes: Routes = [
  {path: '', component: ModelComponent},
  {path: 'ModelInStock', component: ModelInStockComponent},
  {path: 'Contacts', component: ContactsComponent},
  {path: '**', component: BuylogComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ModelComponent,
    ModelInStockComponent,
    ContactsComponent,
    BuylogComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
