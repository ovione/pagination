import { LazyLoadEvent } from 'primeng';
import { Directive, Input } from '@angular/core';
import { AuditLogResponseModel } from '../../audit-log/model/audit-log-response.model';

@Directive()
// tslint:disable-next-line:directive-class-suffix
export abstract class TablePaginationBase<T> {
  @Input() public rowsPerPage = 4;
  @Input() public rowsPerPageOptions = ['4', '8', '20'];

  cols: Array<any> = [];
  totalRecords: number;
  loading: boolean;
  rowsData: Array<any> = [];

  protected handleException(error: any): void {
    console.log('exception ' + error);
  }

  protected handleAuditLogsResponse(rowData: T[], totalRecords: number): void {
    this.loading = false;
    this.rowsData = rowData;
    this.totalRecords = totalRecords;
  }

  abstract getRowsData(event: LazyLoadEvent): void;

}
