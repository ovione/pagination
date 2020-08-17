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

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    this.initializeAuditLogTableTable();
  }

  getRowsData(event: LazyLoadEvent): void {
    this.loading = true;
    setTimeout(() => {
      this.getData(event);
    }, 1000);
  }

  protected handleException(error: any): void {
    console.log('exception ' + error);
  }

  protected handleAuditLogsResponse(rowData: T[], totalRecords: number): void {
    this.loading = false;
    this.rowsData = rowData;
    this.totalRecords = totalRecords;
  }

  abstract initializeAuditLogTableTable(): void;
  abstract getData(event: LazyLoadEvent): void;

}
