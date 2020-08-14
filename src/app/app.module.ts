import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginatedTableModule } from './boostrap/paginated-table/paginated-table.module';
import { AuditLogModule } from './primeng/audit-log/audit-log.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    PaginatedTableModule,
    AuditLogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
