import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';

import { AuditLogComponent } from './audit-log.component';


@NgModule({
  imports: [
    CommonModule,

    TableModule
  ],
  declarations: [ AuditLogComponent ],
  exports: [ AuditLogComponent ]
})
export class AuditLogModule { }
