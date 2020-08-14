import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditLogComponent } from './audit-log.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuditLogComponent],
  exports: [AuditLogComponent]
})
export class AuditLogModule { }
