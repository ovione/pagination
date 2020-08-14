import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLogTableComponent } from "./audit-log-table.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ AuditLogTableComponent ],
  exports: [ AuditLogTableComponent ]
})
export class AuditLogTableModule {

}
