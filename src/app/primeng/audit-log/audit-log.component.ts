import { Component, OnInit } from '@angular/core';

import { AuditLogService } from '../../common/services/audit-log.service';
import { AuditLogModel } from '../../common/model/audit-log.model';
import { AuditLogRequestModel } from '../../common/model/audit-log-request.model';
import { AuditLogResponseModel } from '../../common/model/audit-log-response.model';
import { LazyLoadEvent } from 'primeng';

@Component({
  selector: 'app-audit-log',
  templateUrl: './audit-log.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent implements OnInit {
  rowsData: AuditLogModel[];
  rowsPerPage = 4;
  cols: any[];
  loading: boolean;
  totalRecords: number;

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
    this.initializePrimengTable();
    this.loading = true;
  }

  getRowsData(event: LazyLoadEvent): void {
    this.loading = true;
    setTimeout(() => {
      this.auditLogService.getAsynch(this.constructAuditLogRequestModel(event)).subscribe({
        next: (auditLogsResponse: AuditLogResponseModel) => this.handleAuditLogsResponse(auditLogsResponse),
        error: (error) => this.handleException(error)
      });
    }, 0);
  }

  private constructAuditLogRequestModel(event: LazyLoadEvent): AuditLogRequestModel {
    return new AuditLogRequestModel(event.first, event.rows);
  }

  private handleException(error: any): void {
    console.log('exception ' + error);
  }

  private handleAuditLogsResponse(auditLogsResponse: AuditLogResponseModel): void {
    this.loading = false;
    this.rowsData = auditLogsResponse.auditLogs;
    this.totalRecords = auditLogsResponse.totalRecords;
  }

  private initializePrimengTable(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'action', header: 'Action' },
      { field: 'username', header: 'User name' },
      { field: 'comment', header: 'Comment' },
      { field: 'link', header: 'Link' }
    ];
  }
}
