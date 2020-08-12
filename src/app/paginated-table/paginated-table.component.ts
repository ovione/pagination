import { Component, OnInit } from '@angular/core';

import {AuditLogModel} from "../audit-log/model/audit-log.model";
import {AuditLogService} from "../audit-log/services/audit-log.service";

@Component({
  selector: 'app-paginated-table',
  templateUrl: './paginated-table.component.html',
  styleUrls: ['./paginated-table.component.scss']
})
export class PaginatedTableComponent implements OnInit {
  auditLogSet:AuditLogModel[];

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
    this.auditLogSet = this.auditLogService.get();
  }

}
