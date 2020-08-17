import { Component, Input, OnInit } from '@angular/core';

import { AuditLogService } from './services/audit-log.service';
import { AuditLogRequestModel } from './model/audit-log-request.model';
import { AuditLogResponseModel } from './model/audit-log-response.model';
import { LazyLoadEvent } from 'primeng';
import { TablePaginationBaseComponent } from '../common/table-pagination/table-pagination-base.component';

@Component({
  selector: 'app-audit-log',
  templateUrl: '../common/table-pagination/table-pagination-primeng.component.html',
  styleUrls: ['./audit-log.component.scss']
})
export class AuditLogComponent extends TablePaginationBaseComponent implements OnInit {
  @Input() public rowsPerPage = 4;
  @Input() public rowsPerPageOptions = ['4', '8', '20'];

  constructor(private auditLogService: AuditLogService) {
    super();
  }

  ngOnInit(): void {
    this.initializeAuditLogTableTable();
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

  private initializeAuditLogTableTable(): void {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'action', header: 'Action' },
      { field: 'username', header: 'User name' },
      { field: 'comment', header: 'Comment' },
      { field: 'link', header: 'Link' }
    ];
  }

  modifyRowsPerPage(rowsPerPage: number): void {
    this.rowsPerPage = rowsPerPage;
  }
}
