import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng';
import { AuditLogModel } from '../../common/model/audit-log.model';
import { AuditLogService } from '../../common/services/audit-log.service';
import { AuditLogResponseModel } from '../../common/model/audit-log-response.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  rowsData: AuditLogModel[] = [];
  rowsPerPage = 4;
  cols: any[];
  loading: boolean;
  totalRecords: number;

  datasource: AuditLogModel[];
  cars: AuditLogModel[];

  constructor(private auditLogService: AuditLogService) { }

  ngOnInit(): void {
    this.datasource = this.auditLogService.get();
    this.totalRecords = this.datasource.length;

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'date', header: 'Date' },
      { field: 'action', header: 'Action' },
      { field: 'username', header: 'User name' },
      { field: 'comment', header: 'Comment' },
      { field: 'link', header: 'Link' }
    ];

    this.loading = true;
  }

  loadCarsLazy(event: LazyLoadEvent): void {
    this.loading = true;

    setTimeout(() => {
      if (this.datasource) {
        this.cars = this.datasource.slice(event.first, (event.first + event.rows));
        this.loading = false;
      }
    }, 1000);
  }
  //
  // getRowsData(event: LazyLoadEvent = {first: 1, rows: this.rowsPerPage}): void {
  //   this.loading = true;
  //   this.auditLogService.getAsynch(this.constructAuditLogRequestModel(event)).subscribe({
  //     next: (auditLogsResponse: AuditLogResponseModel) => this.handleAuditLogsResponse(auditLogsResponse),
  //     error: (error) => this.handleException(error)
  //   });
  // }
  //
  // private handleException(error: any): void {
  //   console.log('exception ' + error);
  // }
  //
  // private handleAuditLogsResponse(auditLogsResponse: AuditLogResponseModel): void {
  //   this.loading = false;
  //   this.rowsData = auditLogsResponse.auditLogs;
  //   this.totalRecords = auditLogsResponse.totalRecords;
  // }
}
