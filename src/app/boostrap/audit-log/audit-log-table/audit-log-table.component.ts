import { Component, Input } from '@angular/core';

import { AuditLogModel } from "../../../audit-log/model/audit-log.model";

@Component({
  selector: 'app-audit-log-table',
  templateUrl: './audit-log-table.component.html',
  styleUrls: ['./audit-log-table.component.scss']
})
export class AuditLogTableComponent {
  @Input() auditLogSet: AuditLogModel[] = [];
}
