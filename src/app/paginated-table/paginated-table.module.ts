import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginatedTableComponent } from "./paginated-table.component";
import { AuditLogTableModule } from "../audit-log/audit-log-table/audit-log-table.module";
import { PaginatorModule } from "../common/paginator/paginator.module";

@NgModule({
  imports: [
    CommonModule,

    AuditLogTableModule,
    PaginatorModule
  ],
  declarations: [ PaginatedTableComponent ],
  exports: [ PaginatedTableComponent ]
})
export class PaginatedTableModule { }
