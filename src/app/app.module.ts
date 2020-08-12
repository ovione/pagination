import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatedTableModule } from "./paginated-table/paginated-table.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    PaginatedTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
