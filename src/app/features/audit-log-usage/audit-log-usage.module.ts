import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLogUsageComponent } from './audit-log-usage.component';
import { AuditLogModule } from '../audit-log/audit-log.module';

@NgModule({
  imports: [
    CommonModule,

    AuditLogModule
  ],
  declarations: [ AuditLogUsageComponent ],
  exports: [ AuditLogUsageComponent ],
})
export class AuditLogUsageModule { }
